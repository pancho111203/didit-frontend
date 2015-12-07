/**
 * Created by pancho111203 on 7/12/15.
 */
/// <reference path="../../../../typings/angularjs/angular.d.ts" />

module app.done {
    export class DoneService {
        private doneList: [Experience];

        // Use this method to load all the experiences of the done list
        loadDones(){
            //TODO load the dones of the current user from backend
        }
        //@pre the experience doesnt exist already
        addNewExperience(experience: Experience) {
            this.doneList.push(experience);
            //TODO push the new experience to the backend
        }
        //@pre the experience exists
        removeExperience(experience: Experience) {
            this.doneList.remove(experience);
            //TODO remove the experience from backend
        }
        getElements(): [Experience] {
            return this.doneList;
        }
    }
    angular.module('app.done').service('DoneService', DoneService);
}