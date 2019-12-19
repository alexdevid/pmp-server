<?php
/**
 * This file is part of ONP.
 *
 * Copyright (c) Opensoft (http://opensoftdev.com)
 *
 * The unauthorized use of this code outside the boundaries of
 * Opensoft is prohibited.
 */

namespace PMP\Service;

use Doctrine\Common\Persistence\ManagerRegistry;
use PMP\Entity\Album;
use PMP\Entity\Artist;
use PMP\Entity\Audio;
use PMP\Entity\User;
use PMP\Repository\AlbumRepository;
use PMP\Repository\ArtistRepository;
use PMP\Repository\AudioRepository;
use PMP\Service\Parser\AudioParser;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * @author Alexander Tsukanov <alexander.tsukanov@opensoftdev.com>
 */
class AudioService
{
    const UNKNOWN_ARTIST = 'Unknown Artist';
    const UNKNOWN_ALBUM = 'Unknown Album';

    const UNKNOWN_IMAGE_PATH = '/images/unknown.jpg';

    /**
     * @var AudioParser
     */
    private $audioParser;

    /**
     * @var ArtistRepository
     */
    private $artistRepository;

    /**
     * @var AudioRepository
     */
    private $audioRepository;

    /**
     * @var AlbumRepository
     */
    private $albumRepository;

    /**
     * @var User
     */
    private $user;

    /**
     * @param AudioParser $audioParser
     * @param ManagerRegistry $doctrine
     * @param TokenStorageInterface $tokenStorage
     */
    public function __construct(AudioParser $audioParser, ManagerRegistry $doctrine, TokenStorageInterface $tokenStorage)
    {
        $this->user = $tokenStorage->getToken()->getUser();
        $this->audioParser = $audioParser;
        $this->artistRepository = $doctrine->getRepository(Artist::class);
        $this->audioRepository = $doctrine->getRepository(Audio::class);
        $this->albumRepository = $doctrine->getRepository(Album::class);
    }

    /**
     * @param UploadedFile $uploadedFile
     *
     * @return Audio
     */
    public function createEntityFromUploadedFile(UploadedFile $uploadedFile): Audio
    {
        $audio = new Audio();
        //remove extension
        $title = preg_replace('/\\.[^.\\s]{3,4}$/', '', $uploadedFile->getClientOriginalName());
        $id3Info = $this->audioParser->getID3Info($uploadedFile->getPathname());

        $audio
            ->setUser($this->user)
            ->setTitle($id3Info->getTitle() ?: $title)
            ->setBitrate($id3Info->getBitrate())
            ->setGenre($id3Info->getGenre()) //TODO array
            ->setLyrics($id3Info->getLyrics())
            ->setDuration($id3Info->getDuration())
            ->setSize($uploadedFile->getSize())
            ->setSrc($uploadedFile->getPathname()); //TODO take from storage !?

        $artistTitle = $id3Info->getArtist() ?: self::UNKNOWN_ARTIST;
        $albumTitle = $id3Info->getAlbum() ?: self::UNKNOWN_ALBUM;

        $artist = $this->artistRepository->findOneBy(['title' => $artistTitle]);
        if (!$artist) {
            $artist = new Artist();
            $artist
                ->setTitle($artistTitle)
                ->setGenre([$id3Info->getGenre()]); //TODO
        }

        $album = $this->albumRepository->findOneBy(['title' => $albumTitle]);
        if ($id3Info->getYear() && $album && !$album->getYear()) {
            $album->setYear($id3Info->getYear());
        }

        if (!$album) {
            $album = new Album();
            $album
                ->setTitle($albumTitle)
                ->setArtist($artist);
            //todo cover
            $album->setImage(self::UNKNOWN_IMAGE_PATH);
        }

        $audio
            ->setArtist($artist)
            ->setAlbum($album);

        return $audio;
    }
}