import { BaseComponentOptions } from '../types/base-component-options.interface';

export class LoadingComponent {
    private isLoading: boolean = false;

    // Element classes
    private activeClass: string = 'active'; // apply this class when active

    // DOM Elementss
    private $loader: any;

    constructor(options: BaseComponentOptions) {
        this.$loader = $(options.element);
    }

    /**
     * @description
     * Toggle visibility of loading container
     * 
     * @memberOf LoadingComponent
     */
    public toggle() {
        this.isLoading ? this.hide() : this.show();
    }

    /**
     * @description
     * Show loading container by adding activeClass
     * 
     * @memberOf LoadingComponent
     */
    public show() {
        this.$loader.addClass(this.activeClass);
        this.isLoading = true;
    }

    /**
     * @description
     * Hide loading container by removing activeClass
     * 
     * @memberOf LoadingComponent
     */
    public hide() {
        this.$loader.removeClass(this.activeClass);
        this.isLoading = false;
    }
}