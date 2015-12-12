/**
 * Created by pancho111203 on 7/12/15.
 */
/// <reference path="../../../../typings/angularjs/angular.d.ts" />

module app.todo {
    export class TodoService {
        private todoList: Event[];

        // Use this method to load all the events of the todo list
        loadTodos(){
            //TODO load the todos of the current user from backend
        }
        //@pre the event doesnt exist already
        addNewEvent(event: Event) {
            this.todoList.push(event);
            //TODO push the new event to the backend
        }
        //@pre the event exists
        removeEvent(event: Event) {
            var index = this.todoList.indexOf(event);
            this.todoList.splice(index,1);
            //TODO remove the event from backend
        }
        getElements(): Event[] {
            return this.todoList;
        }
    }
    angular.module('app.todo').service('TodoService', TodoService);
}