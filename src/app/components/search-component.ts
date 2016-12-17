import * as Rx from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { BaseComponentOptions } from '../types/base-component-options.interface';

export class SearchComponent {
    private inputClass: string = 'search-input';

    private $search: Element;
    private $input: Element;

    constructor(options: BaseComponentOptions) {
        this.$search = options.element;
        this.$input = document.getElementsByClassName(this.inputClass)[0];
    }


    /**
     * @description
     * Get user input as observable
     * 
     * @returns {Observable<string>}
     * 
     * @memberOf SearchComponent
     */
    public searchStream$(): Observable<string> {
        return Rx.Observable.fromEvent(this.$input, 'keyup')
            .debounceTime(500)
            .map((event: KeyboardEvent) => (<HTMLInputElement>event.target).value.trim())
    }
}