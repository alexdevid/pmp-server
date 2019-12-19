<?php
/**
 * This file is part of PMP.
 * Copyright (c) Alexander Tsukanov (http://alexdevid.ru)
 */

namespace PMP\Service\Parser;

/**
 * @author Alexander Tsukanov <http://alexdevid.ru>
 */
class ID3Info
{
    /**
     * @var string|null
     */
    private $title;

    /**
     * @var string|null
     */
    private $album;

    /**
     * @var string|null
     */
    private $artist;

    /**
     * @var int|null
     */
    private $year;

    /**
     * @var int|null
     */
    private $bitrate;

    /**
     * @var string|null
     */
    private $genre;

    /**
     * @var string|null
     */
    private $lyrics;

    /**
     * @var int|null
     */
    private $duration;

    /**
     * @var string|null
     */
    private $cover;

    /**
     * @var string|null
     */
    private $coverThumb;

    /**
     * @var string|null
     */
    private $coverName;

    /**
     * @return string|null
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return ID3Info
     */
    public function setTitle(string $title = null): ID3Info
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getAlbum(): ?string
    {
        return $this->album;
    }

    /**
     * @param string $album
     * @return ID3Info
     */
    public function setAlbum(string $album = null): ID3Info
    {
        $this->album = $album;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getArtist(): ?string
    {
        return $this->artist;
    }

    /**
     * @param string $artist
     * @return ID3Info
     */
    public function setArtist(string $artist = null): ID3Info
    {
        $this->artist = $artist;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getYear(): ?int
    {
        return $this->year;
    }

    /**
     * @param int $year
     * @return ID3Info
     */
    public function setYear(int $year = null): ID3Info
    {
        $this->year = $year;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getBitrate(): ?int
    {
        return $this->bitrate;
    }

    /**
     * @param int $bitrate
     * @return ID3Info
     */
    public function setBitrate(int $bitrate = null): ID3Info
    {
        $this->bitrate = $bitrate;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getGenre(): ?string
    {
        return $this->genre;
    }

    /**
     * @param string $genre
     * @return ID3Info
     */
    public function setGenre(string $genre = null): ID3Info
    {
        $this->genre = $genre;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getLyrics(): ?string
    {
        return $this->lyrics;
    }

    /**
     * @param string $lyrics
     * @return ID3Info
     */
    public function setLyrics(string $lyrics = null): ID3Info
    {
        $this->lyrics = $lyrics;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getDuration(): ?int
    {
        return $this->duration;
    }

    /**
     * @param int $duration
     * @return ID3Info
     */
    public function setDuration(int $duration = null): ID3Info
    {
        $this->duration = $duration;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getCover(): ?string
    {
        return $this->cover;
    }

    /**
     * @param null|string $cover
     * @return ID3Info
     */
    public function setCover(string $cover): ID3Info
    {
        $this->cover = $cover;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getCoverThumb(): ?string
    {
        return $this->coverThumb;
    }

    /**
     * @param null|string $coverThumb
     * @return ID3Info
     */
    public function setCoverThumb(string $coverThumb): ID3Info
    {
        $this->coverThumb = $coverThumb;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getCoverName(): ?string
    {
        return $this->coverName;
    }

    /**
     * @param null|string $coverName
     * @return ID3Info
     */
    public function setCoverName(string $coverName): ID3Info
    {
        $this->coverName = $coverName;

        return $this;
    }

    public function toArray(): array
    {
        return [
            'title' => $this->getTitle(),
            'album' => $this->getAlbum(),
            'artist' => $this->getArtist(),
            'year' => $this->getYear(),
            'genre' => $this->getGenre(),
            'duration' => $this->getDuration(),
            'bitrate' => $this->getBitrate(),
            'lyrics' => $this->getLyrics(),
            'cover' => $this->getCover(),
            'coverThumb' => $this->getCoverThumb()
        ];
    }
}