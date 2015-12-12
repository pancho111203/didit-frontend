/**
 * Created by pancho111203 on 7/12/15.
 */
/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/lodash/lodash.d.ts" />

module app.feed {
    import TodoService = app.todo.TodoService;
    import DoneService = app.done.DoneService;
    'use strict';
    class FeedController {
        static $inject = ['FeedService', 'TodoService', 'DoneService'];

        constructor(public feedService: FeedService, public todoService: TodoService, public doneService: DoneService) {
        }

        // Adds an event to the to do list, given the index of the experience relative to the feed.
        // If the element is already on the list, it gets removes(used for toggling the fav button)
        toggleEventFromExperience(experience: Experience) {
            if(this.experienceAlreadyOnTodoList(experience)) {
                this.todoService.removeEvent(experience.getParentEvent());
            } else {
                this.todoService.addNewEvent(experience.getParentEvent());
            }
        }

        // Returns if the experience('s event) is already on the to do list of the user
        experienceAlreadyOnTodoList(experience: Experience): boolean {
            return _.contains(this.todoService.getElements(), experience.getParentEvent());
        }
        // Returns if the experience is already on the done list of the user
        experienceAlreadyOnDoneList(experience: Experience): boolean {
            return _.contains(this.doneService.getElements(), experience);
        }

        showMoreFeeds() {
            this.feedService.increaseFeedLength();
        }
    }
    angular.module('app.tree').controller('FeedController', FeedController);
}