import React from "react";
import { connect } from "react-redux";
import ProfileCard, { User } from "../componentes/Authentication/ProfileCard";
import Header from "../componentes/Header";
import Container from "../shared/Container";

declare interface ProfileViewProps{
    user: User
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {
    return <>
        <Header title="AlgaStock"/>
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
                
            }}>
                <ProfileCard user={props.user} />
            </div>
        </Container>
    </>
}

const mapStateToProps = () => ({
    user: {
        name: 'Fernando Carvalho',
        email: 'fcarvalho@lcsistemas.com'
    }
})

export default connect(mapStateToProps)(ProfileView)