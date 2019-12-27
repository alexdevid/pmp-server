<?php
/**
 * This file is part of ONP.
 *
 * Copyright (c) Opensoft (http://opensoftdev.com)
 *
 * The unauthorized use of this code outside the boundaries of
 * Opensoft is prohibited.
 */

namespace PMP\Controller\Api;

use Doctrine\Common\Collections\ArrayCollection;
use PMP\Entity\Album;
use PMP\Entity\Artist;
use PMP\Service\AudioService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @author Alexander Tsukanov <alexander.tsukanov@opensoftdev.com>
 */
class AudioController extends AbstractController
{
    /**
     * @Route("/api/audio/upload", name="api.audio.upload", methods={"POST"})
     *
     * @param Request $request
     * @param AudioService $audioService
     * @param SerializerInterface $serializer
     * @return Response
     */
    public function uploadAction(Request $request, AudioService $audioService, SerializerInterface $serializer)
    {
        $file = $request->files->get('audio');
        $audio = $audioService->createEntityFromUploadedFile($file);

        $artists = new ArrayCollection($this->getDoctrine()->getRepository(Artist::class)->findAll());
        if (!$artists->contains($audio->getArtist())) {
            $artists->add($audio->getArtist());
        }

        $albums = new ArrayCollection($this->getDoctrine()->getRepository(Album::class)->findAll());
        if (!$albums->contains($audio->getAlbum())) {
            $albums->add($audio->getAlbum());
        }

        $data = [
            'audio' => $audio,
            'artists' => $artists,
            'albums' => $albums
        ];

        return new Response($serializer->serialize($data, JsonEncoder::FORMAT, [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object) {
                return $object->getId();
            },
        ]));
    }
}