import { LoadingComponent } from './components/loader-component';
import { SearchComponent } from './components/search-component';
import { LoaderOptions } from './types/loader-options.interface';
import { SearchOptions } from './types/search-options.interface';
import { ListOptions } from './types/list-options.interface';
import { ListUsersComponent } from './components/list-user.component';

// Get DOM Elements
let $loader = document.getElementById('gtu-loader');
let $search = document.getElementById('gtu-search-component');
let $list = document.getElementById('gtu-list-users-component');


// Initialize Loader
let loaderOption: LoaderOptions = {
    element: $loader
}
let loader = new LoadingComponent(loaderOption);


// Initialize search component
let searchOptions: SearchOptions = {
    element: $search,
    loader: loader
}
let search = new SearchComponent(searchOptions);

// Initialize list users component
let listOptions: ListOptions = {
    element: $list
}
let list = new ListUsersComponent(listOptions);

export const AppComponents = {
    loader: loader,
    search: search,
    list: list
}