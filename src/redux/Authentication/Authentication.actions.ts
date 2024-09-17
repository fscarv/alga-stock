import { Thunk } from "..";
import { signInUser } from "../../service/authentication.service";


declare interface Credentials {
    user: string
    pass: string
}

export const login = ({user, pass}: Credentials): Thunk => async (dispatch) => {
    const loggedInUser = await signInUser(user, pass)
    dispatch({
        type: 'AUTHETICATION_LOGIN',
        payload: loggedInUser
    })
}

