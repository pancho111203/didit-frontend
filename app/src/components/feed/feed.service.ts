/**
 * Created by pancho111203 on 7/12/15.
 */
/// <reference path="../../../../typings/angularjs/angular.d.ts" />

module app.feed{
    'use strict';

    export class FeedService{
        // gets a number of experiences from the stack
        // 0 is the earliest experience
        private experiences_displayed: [Experience];



        // Returns the experience selected by index
        public getExperience(index: number): Experience {
            return this.experiences_displayed[index];
        }





    }
    angular.module('app.feed').service('FeedService', FeedService);
}