import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule,MdAutocompleteModule} from '@angular/material';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {PostsService} from "./posts.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdIconModule,
        MdAutocompleteModule
    ],
    providers: [PostsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
