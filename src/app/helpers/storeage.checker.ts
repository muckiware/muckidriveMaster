/**
 * @package     muckiwareDrive
 * @subpackage  Master
 *
 * @copyright Copyright (C) 2021 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveMaster
 */

import { Cookie } from 'ng2-cookies/ng2-cookies';

export class  StorageWorker {

    static storageAvailable(): boolean {

        if (typeof localStorage !== 'undefined') {
            try {

                localStorage.setItem('feature_test', 'yes');

                if (localStorage.getItem('feature_test') === 'yes') {

                    localStorage.removeItem('feature_test');
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                return false;
            }
        } else {
            return false;
        }
    }

    static setUserToken(userToken: string): void {

        if (userToken !== '') {

            if (this.storageAvailable()) {
                if (localStorage.getItem('sit_current_token') === '') {
                    localStorage.setItem('sit_current_token', userToken);
                } else {
                    localStorage.removeItem('sit_current_token');
                    localStorage.setItem('sit_current_token', userToken);
                }
            } else {
                if (Cookie.get('sit_current_token') === '') {
                    Cookie.set('sit_current_token', userToken);
                } else {
                    Cookie.delete('sit_current_token');
                    Cookie.set('sit_current_token', userToken);
                }
            }
        } else {
            console.log('missing token string for to set into storage or cookie');
        }
    }
}
