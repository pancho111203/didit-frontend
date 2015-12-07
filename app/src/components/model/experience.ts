/**
 * Created by pancho111203 on 7/12/15.
 */

module app {
    'use strict';
    export class Experience {
        private date: Date;
        private users: [User];
        private event: Event;

        getParentEvent(): Event {
            return this.event;
        }
    }
}