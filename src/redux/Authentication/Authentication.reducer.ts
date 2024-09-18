import { Action } from "..";
import { User } from "../../service/authentication.service";

declare interface AutheticationState {
    profile?: User
}

// eslint-disable-next-line
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