import * as Rx from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { User } from '../types/user.interface';

// const url: string = 'https://api.github.com/users';

// let makePromise = (request: JQueryXHR): Promise<any> => {
//     return Promise.resolve(request);
// }

// export const UserService = {
//     getAll: (from: number = 0): Observable<User[]> => {
//         let data = {
//             since: from
//         }
//         return Rx.Observable.fromPromise(makePromise($.getJSON(url, data)));
//     },
//     getByUsername: (username: string): Observable<User[]> => {
//         return Rx.Observable.fromPromise(this.makePromise($.getJSON(`url/${username}`)));
//     }
// }

export class UserService {
    private url: string = 'https://api.github.com/users';

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
        return Rx.Observable.fromPromise(this.makePromise($.getJSON(this.url, data)));
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
        return Rx.Observable.fromPromise(this.makePromise($.getJSON(`${this.url}/${username}`)));
    }


    /**
     * @description
     * TypeScript: error TS2345: Argument of type 'JQueryXHR' is not assignable to parameter of type 'Promise<any>'
     * http://stackoverflow.com/questions/39759536/typescript-error-ts2345-argument-of-type-jqueryxhr-is-not-assignable-to-para
     * 
     * @private
     * @param {JQueryXHR} request
     * @returns {Promise<any>}
     * 
     * @memberOf UserService
     */
    private makePromise(request: JQueryXHR): Promise<any> {
        return Promise.resolve(request);
    }
}