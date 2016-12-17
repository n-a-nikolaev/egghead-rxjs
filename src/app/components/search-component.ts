import * as Rx from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { SearchOptions } from '../types/search-options.interface';
import { LoadingComponent } from './loader-component';

export class SearchComponent {
    private inputClass: string = 'search-input';

    private Loader: LoadingComponent;
    private $search: Element;
    private $input: Element;

    constructor(options: SearchOptions) {
        this.Loader = options.loader;
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