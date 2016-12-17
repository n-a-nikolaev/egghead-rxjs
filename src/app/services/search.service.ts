import { UserService } from './users.service';

export class SearchService {
    constructor(private userService: UserService) { }

    public search(term: string) {
        return this.userService.getByUsername(term);
    }
}