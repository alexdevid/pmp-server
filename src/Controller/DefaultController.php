<?php
/**
 * This file is a part of PMP project
 *
 * Copyright (c) Alexander Tsukanov (http://alexdevid.ru)
 *
 * The unauthorized use of this code is prohibited
 */

namespace PMP\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @author Alexander Tsukanov (http://alexdevid.ru)
 */
class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default.index")
     *
     * @return Response
     */
    public function indexAction()
    {
        return $this->render('default/index.html.twig');
    }
}