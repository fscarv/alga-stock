import { Action } from "..";
import { User } from "../../service/Authentication.service";

declare interface AutheticationState {
    profile?: User
}

export default function (state: AutheticationState = {}, action: Action): AutheticationState {
    switch(action.type) {
        case 'AUTHETICATION_LOGIN':
            return {
                profile: action.payload
            }
        case 'AUTHETICATION_LOGOUT':
            return {
                
            }
        default:
            return state
    }
}