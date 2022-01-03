/**
 * @package     muckiwareDrive
 * @subpackage  Master
 *
 * @copyright Copyright (C) 2021 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveMaster
 */

import { HttpResponse } from '@angular/common/http';

export class String {

    static getLocalStorageItem(key: string): string {

        var localStorageItem = localStorage.getItem(key);
        if(localStorageItem) {
            return localStorageItem;
        } else {
            return '';
        }
    }

    static getHeadersItem(res: HttpResponse<object>, key: string): string {

        var headersItem = res.headers.get(key);
        if(headersItem) {
            return headersItem;
        } else {
            return '';
        }
    }

    static isNullUndefinedEmtpy(string: string, checkEmpty: boolean = false): boolean {

        if (checkEmpty) {

            if (string === undefined || string === null || string === '') {
                return true;
            } else {
                return false;
            }
        } else {

            if (string === undefined || string === null) {
                return true;
            } else {
                return false;
            }
        }
    }
}
