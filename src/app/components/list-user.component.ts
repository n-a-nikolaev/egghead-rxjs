import { ListOptions } from '../types/list-options.interface';
import { AppComponents } from '../app.components';

export class ListUsersComponent {
    private $list: Element;

    constructor(options: ListOptions) {
        this.$list = options.element;
    }

    public init() {
        AppComponents.search.searchStream$().subscribe(name => {
            console.log(name);
        })
    }
}