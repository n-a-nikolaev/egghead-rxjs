import { AppComponents } from '../app.components';
import { BaseComponentOptions } from '../types/base-component-options.interface';

export class ListUsersComponent {
    private $list: Element;

    constructor(options: BaseComponentOptions) {
        this.$list = options.element;
    }

    public init() {
        AppComponents.search.searchStream$().subscribe(name => {
            console.log(name);
        })
    }
}