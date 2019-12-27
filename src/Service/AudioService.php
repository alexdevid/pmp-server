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

        $artist = $this->getArtist($id3Info->getArtist(), $id3Info->getGenre());
        $audio
            ->setArtist($artist)
            ->setAlbum($this->getAlbum($artist, $id3Info->getAlbum(), $id3Info->getYear()));

        return $audio;
    }

    /**
     * @param string|null $artistTitle
     * @param string|null $genre
     * @return Artist
     */
    private function getArtist(string $artistTitle = null, string $genre = null): Artist
    {
        $artistTitle = $artistTitle ?: self::UNKNOWN_ARTIST;
        $artist = $this->artistRepository->findOneBy(['title' => $artistTitle]);
        if (!$artist) {
            $artist = new Artist();
            $artist
                ->setTitle($artistTitle)
                ->setGenre([$genre]); //TODO
        }

        return $artist;
    }

    /**
     * @param Artist $artist
     * @param string|null $albumTitle
     * @param int|null $year
     * @return Album
     */
    private function getAlbum(Artist $artist, string $albumTitle = null, int $year = null): Album
    {
        $albumTitle = $albumTitle ?: self::UNKNOWN_ALBUM;
        $album = $this->albumRepository->findOneBy(['title' => $albumTitle]);
        if ($year && $album && !$album->getYear()) {
            $album->setYear($year);
        }
        if (!$album) {
            $album = new Album();
            $album
                ->setTitle($albumTitle)
                ->setArtist($artist);
            //todo cover
            $album->setImage(self::UNKNOWN_IMAGE_PATH);
        }

        return $album;
    }
}