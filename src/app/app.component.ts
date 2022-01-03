/**
 * @package     muckiwareDrive
 * @subpackage  Master
 *
 * @copyright Copyright (C) 2021-2022 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveMaster
 */

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'masterApp';

    getRequestResults() {

      console.log('test');
    }
}
