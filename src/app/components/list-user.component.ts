import { AppComponents } from '../app.components';
import { AppServices } from '../app.services';

import { User } from '../types/user.interface';
import { BaseComponentOptions } from '../types/base-component-options.interface';

import { ListUsersTemplate } from '../templates/list-users.template';
import { Helper } from '../helpers/template-engine';

export class ListUsersComponent {
    private $list: Element;

    constructor(options: BaseComponentOptions) {
        this.$list = options.element;
    }

    /**
     * @description
     * Initialization method for list component
     * 
     * 
     * @memberOf ListUsersComponent
     */
    public init() {
        AppServices.userService.getAll().subscribe(response => {
            let listUsers = this.createList(response);
            this.addListToDOM(listUsers);
        });
        AppComponents.search.searchStream$().subscribe(this.onNext, this.onError);
    }


    /**
     * @description
     * Add users marukp to $list container
     * 
     * @param {string} list
     * 
     * @memberOf ListUsersComponent
     */
    public addListToDOM(list: string) {
        this.$list.innerHTML = list;
    }


    /**
     * @description
     * Clear list container html
     * 
     * @memberOf ListUsersComponent
     */
    public emptyList() {
        this.$list.innerHTML = '';
    }


    /**
     * @description
     * Create markup for users list
     * 
     * @param {any[]} users - object or array with github users
     * @returns {string}
     * 
     * @memberOf ListUsersComponent
     */
    public createList(users: any[]): string {
        let usersArr: any[] = Array.isArray(users) ? users : [users];
        let list = Helper.templateEngine(ListUsersTemplate, {
            users: usersArr
        });
        return list;
    }


    /**
     * @description
     * Callback executed when users data received 
     * 
     * @private
     * @param {User[]} response
     * 
     * @memberOf ListUsersComponent
     */
    private onNext(response: User[]) {
        AppComponents.loader.toggle();
        AppComponents.list.emptyList();
        AppComponents.list.addListToDOM(AppComponents.list.createList(response));
    }


    /**
     * @description
     * Error callback for searchStream$
     * 
     * @private
     * @param {*} error
     * 
     * @memberOf ListUsersComponent
     */
    private onError(error: any) {
        alert(error.responseText);
        AppComponents.loader.toggle();
    }
}