/**
 * @package     muckiwareDrive
 * @subpackage  Master
 *
 * @copyright Copyright (C) 2021-2022 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveMaster
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import * as masterApp from './index';

@NgModule({

    declarations: [
        masterApp.AppComponent
    ],
    imports: [
        BrowserModule,
        masterApp.AppRoutingModule,
    ],
    providers: [
        {
        provide: APOLLO_OPTIONS,
        useFactory: (httpLink: HttpLink) => {
            return {
                cache: new InMemoryCache(),
                link: httpLink.create({
                    uri: masterApp.AppConfig.CONNECTION_ADDRESS,
                }),
            };
        },
        deps: [HttpLink],
        },
    ],
    bootstrap: [ masterApp.AppComponent ]
})

export class AppModule { }
