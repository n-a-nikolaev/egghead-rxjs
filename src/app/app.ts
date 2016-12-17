import * as Rx from 'rxjs';
import { User } from './types/user.interface';
import { UserService } from './services/users.service';
import { LoadingComponent } from './components/loader-component';

// Cache DOM Elements
let $loader = document.getElementsByClassName('dimmer')[0];




class App {
    private loader: LoadingComponent;

    constructor(loadingComponent: LoadingComponent) { 
        this.loader = loadingComponent;
    }

    public init() {
    }
}

// Initializa Components
let loader = new LoadingComponent($loader);
let app = new App(loader);


// Init App
app.init();
