<?php

/**
 * Update.php
 *
 * @category Trait
 * @package  Payment/Xendit
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */

namespace App\Services\Payment\ApiOperations;

/**
 * Trait Update
 *
 * @category Trait
 * @package  XenditApiOperations
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */
trait Update
{
    /**
     * Send an update request
     *
     * @param string $id     data ID
     * @param array  $params user's params
     *
     * @return array
     */
    public static function update($id, $params = [])
    {
        self::validateParams($params, static::updateReqParams());

        $url = static::classUrl() . '/' . $id;

        return static::_request('PATCH', $url, $params);
    }
}
