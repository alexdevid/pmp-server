<?php
/**
 * This file is part of PMP.
 * Copyright (c) Alexander Tsukanov (http://alexdevid.ru)
 */

namespace PMP\Service\Parser;

use Intervention\Image\ImageManager;

/**
 * @author Alexander Tsukanov <http://alexdevid.ru>
 */
class AudioParser
{
    /**
     * @var ImageManager
     */
    private $imageManager;

    public function __construct()
    {
        $this->imageManager = new ImageManager(['driver' => 'gd']);
    }

    /**
     * @param string $filename
     *
     * @return ID3Info
     */
    public function getID3Info(string $filename): ID3Info
    {
        $output = [];
        exec(sprintf('/usr/bin/ffprobe %s 2>&1', $filename), $output, $result);

        $id3Info = new ID3Info();
        $id3Info->setTitle($this->getTagValue('title', $output));
        $id3Info->setArtist($this->getTagValue('artist', $output));
        $id3Info->setAlbum($this->getTagValue('album', $output));
        $id3Info->setGenre($this->getTagValue('genre', $output));
        $id3Info->setYear($this->getTagValue('date', $output));

        $duration = null;
        $bitrate = null;

        foreach ($output as $line) {
            $line = trim($line);
            if (substr($line, 0, strlen('Duration')) === 'Duration') {
                $exploded = explode(':', $line);
                $duration = sprintf('%s:%s:%s', $exploded[1], $exploded[2], substr($exploded[3], 0, strpos($exploded[3], '.')));
                $bitrate = (int)$exploded[5];
            }
        }

        if ($duration) {
            $id3Info->setDuration(strtotime($duration) - strtotime('TODAY'));
        }
        if ($bitrate) {
            $id3Info->setBitrate($bitrate);
        }

//        $coverFilename = md5(json_encode($id3Info->toArray()));
//        $coverPath = '/tmp/' . $coverFilename . '.jpg';
//        $thumbPath = '/tmp/' . $coverFilename . '-thumb.jpg';

//        $hasCover = $this->getCover($filename, $coverPath);
//        if ($hasCover) {
//            $this->imageManager
//                ->make($coverPath)
//                ->resize(40, 40)
//                ->save($thumbPath);
//
//            $id3Info->setCoverName($coverFilename);
//            if (is_file($coverPath)) {
//                $id3Info->setCover($coverPath);
//            }
//            if (is_file($thumbPath)) {
//                $id3Info->setCoverThumb($thumbPath);
//            }
//        }

        return $id3Info;
    }

    /**
     * @param string $filename
     * @param string $path
     * @return bool
     */
    private function getCover(string $filename, string $path): bool
    {
        exec(sprintf('/usr/bin/ffmpeg -i %s -an -vcodec copy %s 2>&1', $filename, $path));

        return is_file($path);
    }

    /**
     * @param string $tag
     * @param array $id3info
     * @return string|null
     */
    private function getTagValue(string $tag, array $id3info): ?string
    {
        foreach ($id3info as $line) {
            $line = trim($line);
            if (substr($line, 0, strlen($tag)) === $tag) {
                $exploded = explode(':', $line);
                return trim($exploded[1]);
            }
        }

        return null;
    }
}