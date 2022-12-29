<?php

/**
 * Create.php
 *
 * @category Trait
 * @package  Payment/Xendit
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */

namespace App\Services\Payment\ApiOperations;

/**
 * Trait Create
 *
 * @category Trait
 * @package  XenditApiOperations
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */
trait Create
{
    /**
     * Send a create request
     *
     * @param array $params user's params
     *
     * @return array
     */
    public static function create($params = [])
    {
        self::validateParams($params, static::createReqParams());

        $url = static::classUrl();

        return static::_request('POST', $url, $params);
    }
}
