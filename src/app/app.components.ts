import { LoadingComponent } from './components/loader-component';
import { SearchComponent } from './components/search-component';
import { ListUsersComponent } from './components/list-user.component';
import { BaseComponentOptions } from './types/base-component-options.interface';

// Get DOM Elements
let $loader = document.getElementById('gtu-loader');
let $search = document.getElementById('gtu-search-component');
let $list = document.getElementById('gtu-list-users-component');


// Initialize Loader
let loaderOption: BaseComponentOptions = {
    element: $loader
}
let loader = new LoadingComponent(loaderOption);


// Initialize search component
let searchOptions: BaseComponentOptions = {
    element: $search
}
let search = new SearchComponent(searchOptions);

// Initialize list users component
let listOptions: BaseComponentOptions = {
    element: $list
}
let list = new ListUsersComponent(listOptions);

export const AppComponents = {
    loader: loader,
    search: search,
    list: list
}