/**
 * Created by pancho111203 on 7/12/15.
 */
module app {
    'use strict';
    export class User {
        //used to access other users info and view their profiles(this doesn't represent the current user)
        private name: string;

        private experiencesDone: Experience[];
        private eventsToDo: Event[];
    }
}