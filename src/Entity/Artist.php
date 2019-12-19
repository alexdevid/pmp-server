<?php
/**
 * This file is a part of PMP project
 *
 * Copyright (c) Alexander Tsukanov (http://alexdevid.ru)
 *
 * The unauthorized use of this code is prohibited
 */

namespace PMP\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="PMP\Repository\ArtistRepository")
 *
 * @author Alexander Tsukanov (http://alexdevid.ru)
 */
class Artist
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
     * @ORM\Column(type="string", length=255, unique=true)
     *
     * @var string
     */
    private $title;

    /**
     * @ORM\Column(type="array", nullable=true)
     *
     * @var array
     */
    private $genre = [];

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    private $website;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    private $image;

    /**
     * @ORM\OneToMany(targetEntity="PMP\Entity\Album", mappedBy="artist")
     *
     * @var Album[]
     */
    private $albums;

    /**
     * @ORM\OneToMany(targetEntity="PMP\Entity\Audio", mappedBy="artist")
     *
     * @var Audio[]
     */
    private $audio;

    public function __construct()
    {
        $this->albums = new ArrayCollection();
        $this->audio = new ArrayCollection();
    }

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
     * @return array|null
     */
    public function getGenre(): ?array
    {
        return $this->genre;
    }

    /**
     * @param array|null $genre
     * @return $this
     */
    public function setGenre(?array $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getWebsite(): ?string
    {
        return $this->website;
    }

    /**
     * @param string|null $website
     * @return $this
     */
    public function setWebsite(?string $website): self
    {
        $this->website = $website;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getImage(): ?string
    {
        return $this->image;
    }

    /**
     * @param string|null $image
     * @return $this
     */
    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return Collection|Album[]
     */
    public function getAlbums(): Collection
    {
        return $this->albums;
    }

    /**
     * @param Album $album
     * @return $this
     */
    public function addAlbum(Album $album): self
    {
        if (!$this->albums->contains($album)) {
            $this->albums[] = $album;
            $album->setArtist($this);
        }

        return $this;
    }

    /**
     * @param Album $album
     * @return $this
     */
    public function removeAlbum(Album $album): self
    {
        if ($this->albums->contains($album)) {
            $this->albums->removeElement($album);
            // set the owning side to null (unless already changed)
            if ($album->getArtist() === $this) {
                $album->setArtist(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Audio[]
     */
    public function getAudio(): Collection
    {
        return $this->audio;
    }

    /**
     * @param Audio $audio
     * @return $this
     */
    public function addAudio(Audio $audio): self
    {
        if (!$this->audio->contains($audio)) {
            $this->audio[] = $audio;
            $audio->setArtist($this);
        }

        return $this;
    }

    /**
     * @param Audio $audio
     * @return $this
     */
    public function removeAudio(Audio $audio): self
    {
        if ($this->audio->contains($audio)) {
            $this->audio->removeElement($audio);
            // set the owning side to null (unless already changed)
            if ($audio->getArtist() === $this) {
                $audio->setArtist(null);
            }
        }

        return $this;
    }
}
