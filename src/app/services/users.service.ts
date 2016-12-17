import * as Rx from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { User } from '../types/user.interface';

export class UserService {
    private url: string = 'https://api.github.com/users';

    constructor() { }

    /**
     * @description
     * Get github users
     * 
     * @param {number} [from=0]
     * @returns {Observable<User[]>}
     * 
     * @memberOf UserService
     */
    public getAll(from: number = 0): Observable<User[]> {
        let data = {
            since: from
        }
        return Rx.Observable.fromPromise($.getJSON(this.url, data));
    }

    /**
     * Get user by it's username
     * 
     * @param {string} username
     * @returns {Observable<User[]>}
     * 
     * @memberOf UserService
     */
    public getByUsername(username: string): Observable<User[]> {
        return Rx.Observable.fromPromise($.getJSON(`${this.url}/${username}`));
    }
}