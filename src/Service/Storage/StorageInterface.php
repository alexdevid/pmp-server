<?php
/**
 * This file is part of ONP.
 *
 * Copyright (c) Opensoft (http://opensoftdev.com)
 *
 * The unauthorized use of this code outside the boundaries of
 * Opensoft is prohibited.
 */

namespace PMP\Service\Storage;

/**
 * @author Alexander Tsukanov <alexander.tsukanov@opensoftdev.com>
 */
interface StorageInterface
{
    /**
     * @param string $key
     * @param string $path
     */
    public function store(string $key, string $path);
}