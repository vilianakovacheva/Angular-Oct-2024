import { ResolveFn } from "@angular/router";
import { User } from "../../types/user";
import { UsersService } from "../users.service";
import { inject } from "@angular/core";

export const UserDetailsResolver: ResolveFn<User> = (route) => {
    const userService = inject(UsersService);
    const id = route.params['id'];
    return userService.getSingleUser(id);
}