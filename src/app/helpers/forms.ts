/**
 * @package     muckiwareDrive
 * @subpackage  Master
 *
 * @copyright Copyright (C) 2021 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveMaster
 */

export class Forms {

    static checkFormValue(value: string, key: string, dataObject: any): string {

        if (value === undefined || value === null) {
            return dataObject[key];
        } else {
            return value;
        }
    }

    static checkFormValueCombi(value: string | number, key: string, dataObject: any): string | number {

        if (value === undefined || value === null) {
            return dataObject[key];
        } else {
            return value;
        }
    }

    static checkFormNumberValue(value: number, key: string, dataObject: any): number {

        if (isNaN(value) || value === 0) {
            return dataObject[key];
        } else {
            return value;
        }
    }
}
