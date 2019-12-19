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
 * @ORM\Entity(repositoryClass="PMP\Repository\AlbumRepository")
 *
 * @author Alexander Tsukanov (http://alexdevid.ru)
 */
class Album
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
     * @ORM\Column(type="integer", nullable=true)
     *
     * @var integer
     */
    private $year;

    /**
     * @ORM\Column(type="string", length=255)
     *
     * @var string
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    private $publisher;

    /**
     * @ORM\ManyToOne(targetEntity="PMP\Entity\Artist", inversedBy="albums")
     *
     * @var Artist
     */
    private $artist;

    /**
     * @ORM\OneToMany(targetEntity="PMP\Entity\Audio", mappedBy="album")
     *
     * @var Album
     */
    private $audio;

    public function __construct()
    {
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
     * @return int|null
     */
    public function getYear(): ?int
    {
        return $this->year;
    }

    /**
     * @param int|null $year
     * @return $this
     */
    public function setYear(?int $year): self
    {
        $this->year = $year;

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
     * @param string $image
     * @return $this
     */
    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getPublisher(): ?string
    {
        return $this->publisher;
    }

    /**
     * @param string|null $publisher
     * @return $this
     */
    public function setPublisher(?string $publisher): self
    {
        $this->publisher = $publisher;

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
            $audio->setAlbum($this);
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
            if ($audio->getAlbum() === $this) {
                $audio->setAlbum(null);
            }
        }

        return $this;
    }
}
