<?php

/**
 * ExceptionInterface.php
 *
 * @category Exception
 * @package  XenditExceptions
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */

namespace App\Services\Payment\Exceptions;

/**
 * Interface ExceptionInterface
 *
 * @category Interface
 * @package  XenditException
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */
interface ExceptionInterface extends \Throwable
{
    /**
     * Get error code for the exception instance
     *
     * @return string
     */
    public function getErrorCode();
}
