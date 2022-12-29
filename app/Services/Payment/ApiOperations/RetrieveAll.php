<?php

/**
 * RetrieveAll.php
 *
 * @category Trait
 * @package  XenditApiOperations
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */

namespace App\Services\Payment\ApiOperations;

/**
 * Trait RetrieveAll
 *
 * @category Trait
 * @package  XenditApiOperations
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */
trait RetrieveAll
{
    /**
     * Send request to get all object, e.g Invoice
     *
     * @return array
     */
    public static function retrieveAll($params = [])
    {
        $url = static::classUrl();
        return static::_request('GET', $url, $params);
    }
}
