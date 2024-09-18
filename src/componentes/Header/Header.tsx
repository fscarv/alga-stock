import React from "react"
import './Header.css'
import { RootState } from "../../redux"
import { connect } from "react-redux"
import { Product } from "../../shared/Table/Table.mockdata"
import { User } from "../../service/authentication.service"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

declare interface HeaderProps {
    title: string
    firstProduct: Product
    profile?: User
}

const Header: React.FC<HeaderProps> = (props) => {
    const navagate = useNavigate()

    const isLoggedIn = !!props.profile?._id

    const askToLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#09f",
            cancelButtonColor: "#d33",
        }).then(({ value }) => value && navagate('/login'))
    }

    const handleLoginLogout = () => {
        isLoggedIn
            ? askToLogout()
            : navagate('/login')
    }

    return <header className="AppHeader">
        <h1>{ props.title }</h1>
        <div>
            <span onClick={handleLoginLogout}>
                {
                    isLoggedIn ? 'Logout' : 'Login'
                }
            </span>
        </div>
    </header>
}

const mapStateToProps = (state: RootState) => ({
    firstProduct: state.products[0],
    profile: state.authentication.profile
})

export default connect(mapStateToProps)(Header)