<?php
/**
 * This file is part of ONP.
 *
 * Copyright (c) Opensoft (http://opensoftdev.com)
 *
 * The unauthorized use of this code outside the boundaries of
 * Opensoft is prohibited.
 */

namespace PMP\Controller\Admin;

use PMP\Entity\Audio;
use PMP\Service\AudioService;
use PMP\Service\Storage\LocalStorage;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @author Alexander Tsukanov <alexander.tsukanov@opensoftdev.com>
 */
class AudioController extends AbstractController
{
    /**
     * @Route("/admin/audio/index", name="admin.audio.index")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function indexAction(Request $request): Response
    {
        $audios = $this->getDoctrine()->getRepository(Audio::class)->findAll();

        return $this->render('admin/audio/index.html.twig', [
            'audios' => $audios
        ]);
    }

    /**
     * @Route("/admin/audio/upload", name="admin.audio.upload")
     *
     * @param Request $request
     * @param AudioService $audioService
     * @param LocalStorage $storage
     *
     * @return Response
     */
    public function uploadAction(Request $request, AudioService $audioService, LocalStorage $storage): Response
    {
        if ($request->isMethod(Request::METHOD_POST) && $request->files->count() > 0) {
            $audios = [];
            /** @var UploadedFile $file */
            foreach ($request->files->get('audio') as $file) {
                $audio = $audioService->createEntityFromUploadedFile($file);

//                $this->getDoctrine()->getManager()->persist($audio);
//                $this->getDoctrine()->getManager()->persist($audio->getAlbum());
//                $this->getDoctrine()->getManager()->persist($audio->getArtist());


            }

            return $this->render('admin/audio/upload-edit.html.twig', [
                'audios' => $audios
            ]);

//            $this->getDoctrine()->getManager()->flush();
        }

        return $this->render('admin/audio/upload.html.twig', []);
    }
}