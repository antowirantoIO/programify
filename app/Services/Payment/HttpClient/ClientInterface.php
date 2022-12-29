<?php

/**
 * ClientInterface.php
 *
 * @category Interface
 * @package  XenditHttpClient
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */

namespace App\Services\Payment\HttpClient;

use App\Services\Payment\Exceptions\ApiException;

/**
 * Interface ClientInterface
 *
 * @category Interface
 * @package  XenditHttpClient
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */
interface ClientInterface
{
    /**
     * Create a request to execute in _executeRequest
     *
     * @param string $method         request method
     * @param string $url            url
     * @param array  $defaultHeaders request headers
     * @param array  $params         parameters
     *
     * @return array
     * @throws ApiException
     */
    public function sendRequest($method,
        string $url,
        array $defaultHeaders,
        $params
    );
}
