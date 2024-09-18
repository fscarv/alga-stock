import { Action } from "..";
import { User } from "../../service/authentication.service";

declare interface AutheticationState {
    profile?: User
}

// eslint-disable-next-line
export default function (state: AutheticationState = {}, action: Action): AutheticationState {
    switch(action.type) {
        case 'AUTHENTICATION_LOGIN':
            return {
                profile: action.payload
            }
        case 'AUTHENTICATION_LOGOUT':
            return {
                
            }
        default:
            return state
    }
}