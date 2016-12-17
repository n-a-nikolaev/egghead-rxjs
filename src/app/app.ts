import { AppServices } from './app.services';
import { AppComponents } from './app.components';

class App {
    constructor(
        private Services: any,
        private Components: any,
    ) {
        Components.list.init();
    }
}

new App(AppServices, AppComponents)




