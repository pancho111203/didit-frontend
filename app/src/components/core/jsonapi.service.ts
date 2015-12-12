/**
 * Created by pancho111203 on 7/12/15.
 */
/// <reference path="../../../../typings/angularjs/angular.d.ts" />

module app.core {
    'use strict';

    export class JSONApiService{
        loadNormalizedFeedsList() : string[] {
            //TODO load from rest api using json

            // ONLY TESTING PURPOSES
            return ['1', '2', '3', '4', '5', '6'];
        }

        // given a list of ids, all the experiences associated with them are loaded in the same order
        loadFeedsFromIdList(idList: string[]) : Experience[] {
            // TODO load from rest api using json


            //ONLY TESTING PURPOSES
            var res: Experience[];
            for(var i = 0; i < idList.length; i++) {
                res.push(new Experience());
            }
            return res;
        }
    }
    angular.module('app.core').service('JSONApiService', JSONApiService);
}