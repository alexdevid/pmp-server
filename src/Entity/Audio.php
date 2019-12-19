<?php
/**
 * This file is a part of PMP project
 *
 * Copyright (c) Alexander Tsukanov (http://alexdevid.ru)
 *
 * The unauthorized use of this code is prohibited
 */

namespace PMP\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="PMP\Repository\AudioRepository")
 *
 * @author Alexander Tsukanov (http://alexdevid.ru)
 */
class Audio
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     *
     * @var string
     */
    private $title;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    private $duration;

    /**
     * @ORM\Column(type="string", length=255)
     *
     * @var string
     */
    private $src;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    private $genre;

    /**
     * @ORM\Column(type="integer", nullable=true)
     *
     * @var integer
     */
    private $bitrate;

    /**
     * @ORM\Column(type="text", nullable=true)
     *
     * @var string
     */
    private $lyrics;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    private $size;

    /**
     * @ORM\ManyToOne(targetEntity="PMP\Entity\Artist", inversedBy="audio")
     *
     * @var Artist
     */
    private $artist;

    /**
     * @ORM\ManyToOne(targetEntity="PMP\Entity\Album", inversedBy="audio")
     *
     * @var Album
     */
    private $album;

    /**
     * @ORM\ManyToOne(targetEntity="PMP\Entity\User", inversedBy="audio")
     * @ORM\JoinColumn(nullable=false)
     *
     * @var User
     */
    private $user;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return $this
     */
    public function setTitle(string $title): self
    {
        $this->title = $title;

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
     * @return $this
     */
    public function setDuration(int $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getSrc(): ?string
    {
        return $this->src;
    }

    /**
     * @param string $src
     * @return $this
     */
    public function setSrc(string $src): self
    {
        $this->src = $src;

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
     * @param string|null $genre
     * @return $this
     */
    public function setGenre(?string $genre): self
    {
        $this->genre = $genre;

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
     * @param int|null $bitrate
     * @return $this
     */
    public function setBitrate(?int $bitrate): self
    {
        $this->bitrate = $bitrate;

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
     * @param string|null $lyrics
     * @return $this
     */
    public function setLyrics(?string $lyrics): self
    {
        $this->lyrics = $lyrics;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getSize(): ?int
    {
        return $this->size;
    }

    /**
     * @param int $size
     * @return $this
     */
    public function setSize(int $size): self
    {
        $this->size = $size;

        return $this;
    }

    /**
     * @return Artist|null
     */
    public function getArtist(): ?Artist
    {
        return $this->artist;
    }

    /**
     * @param Artist|null $artist
     * @return $this
     */
    public function setArtist(?Artist $artist): self
    {
        $this->artist = $artist;

        return $this;
    }

    /**
     * @return Album|null
     */
    public function getAlbum(): ?Album
    {
        return $this->album;
    }

    /**
     * @param Album|null $album
     * @return $this
     */
    public function setAlbum(?Album $album): self
    {
        $this->album = $album;

        return $this;
    }

    /**
     * @return User|null
     */
    public function getUser(): ?User
    {
        return $this->user;
    }

    /**
     * @param User|null $user
     * @return $this
     */
    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
