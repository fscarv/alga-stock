import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { redirect as redirectPage } from "react-router-dom";

type Role = 'admin' | 'customer' | undefined

const withPermission = (roles: Role[], redirect = '') => (Component: FC<any>) => (props: any) => {
    const auth = useSelector((state: RootState) => ({
        profile: state.authentication.profile
    }))

    return roles.includes(auth.profile?.role)
        ? <Component {...props} />
        : redirect
            ? redirectPage(redirect)
            : null
}

export default withPermission