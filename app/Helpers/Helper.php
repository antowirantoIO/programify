<?php

function translations($json)
{
    if(!file_exists($json)) {
    return [];
    }
    return json_decode(file_get_contents($json), true);
}

function getTranslations($path)
{
    $files = glob($path . '/*.php');
    $translations = [];
    foreach ($files as $file) {
        $fileName = basename($file, '.php');
        $fileContent = file_get_contents($file);

        $arrayData = eval('return'
            . preg_replace('/^<\?php\s+return\s+/', '', $fileContent)
            . ';');

        foreach ($arrayData as $key => $value) {
            $arrayKey = $fileName . '.' . $key;
            $arrayValue = $value;
            $translations[$arrayKey] = $arrayValue;
        }
    }

    return ($translations);
}
