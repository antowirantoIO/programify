<?php

/**
 * Retrieve.php
 *
 * @category Trait
 * @package  XenditApiOperations
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */

namespace App\Services\Payment\ApiOperations;

/**
 * Trait Retrieve
 *
 * @category Trait
 * @package  XenditApiOperations
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */
trait Retrieve
{
    /**
     * Send GET request to retrieve data
     *
     * @param string|null $id ID
     *
     * @return array
     */
    public static function retrieve($id, $params = [])
    {
        $url = static::classUrl() . '/' . $id;
        return static::_request('GET', $url, $params);
    }
}
