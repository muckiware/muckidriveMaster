/**
 * @package     muckiwareDrive
 * @subpackage  Master
 *
 * @copyright Copyright (C) 2021-2022 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveMaster
 */

import { environment } from '../environments/environment';

export class AppConfig {

    public static get CONNECTION_ADDRESS(): string {
        return environment.connectionAddress;
    };
};
