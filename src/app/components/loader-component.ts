export class LoadingComponent {
    private isLoading: boolean = false;

    // Element classes
    private activeClass: string = 'active'; // apply this class when active

    // DOM Elementss
    private $loader: any;

    constructor(private element: Element) {
        this.$loader = element;
    }

    public toggle() {
        this.isLoading ? this.hide() : this.show();
    }
    public show() {
        this.$loader.classList = `${this.$loader.classList} ${this.activeClass}`;
        this.isLoading = true;
    }
    public hide() {
        let classListArr: string[] = this.$loader.classList.toString().split(' ');
        classListArr.splice(classListArr.indexOf(this.activeClass), 1);
        this.$loader.classList = classListArr.join(' ');
        this.isLoading = false;
    }
}