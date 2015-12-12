/**
 * Created by pancho111203 on 7/12/15.
 */
/// <reference path="../../../../typings/angularjs/angular.d.ts" />

module app.feed{
    import JSONApiService = app.core.JSONApiService;
    'use strict';

    // used for containing the feeds and communicating with the backend to load them

    export class FeedService{

        private INITIAL_FEED: number = 5; //initial number of feeds loaded
        private STEP_FEED: number = 5; //number of feeds loaded each time the user reaches the limit


        // gets a number of experiences from the stack
        // 0 is the earliest experience
        private feeds_displayed: Experience[];
        private feedLength: number;

        // This list is loaded on startup and it contains all the normalized feed experiences of the user
        // It only contains the id, so when the user activates them by scrolling down, the experience has to be loaded from backend
        private normalizedFeedsList: string[];

        static $inject = ['JSONApiService'];

        constructor(public jsonApiService: JSONApiService) {
            this.normalizedFeedsList = jsonApiService.loadNormalizedFeedsList();
            this.feedLength = this.INITIAL_FEED;
            this.loadFeeds(0, this.feedLength);
        }

        // Increase the feed length by STEP_FEED and load the extra feeds into the array
        increaseFeedLength() {
            var prevLength = this.feedLength;
            this.feedLength = prevLength + this.STEP_FEED;
            this.loadFeeds(prevLength, this.feedLength);
        }

        // Loads feeds [from : to[ from the backend and adds them to the end of the feed array
        loadFeeds(from: number, to: number) {
            var idsToLoad = this.normalizedFeedsList.slice(from, to);
            //TODO error handling if 'to' is higher than normalizedFeedsList.length
            var feedsLoadedFromJSON: Experience[] = this.jsonApiService.loadFeedsFromIdList(idsToLoad);

            this.feeds_displayed.concat(feedsLoadedFromJSON);
        }


    }
    angular.module('app.feed').service('FeedService', FeedService);
}