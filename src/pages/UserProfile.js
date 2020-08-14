import React from 'react';
import profileImg from '../assets/img/avatar-placeholder.png';

class UserProfile extends React.Component {

    static getImage() {
        if (JSON.parse(localStorage.getItem("user")).profileImage !== null) {
            return "data:image/png;base64, "+JSON.parse(localStorage.getItem('user')).profileImage
        } else {
            return profileImg
        }
    }

    render() {
        return (
            <div className={"container Padding40T"}>
                <div className={"item"}>
                    <img
                        width={128}
                        height={128}
                        src={UserProfile.getImage()}
                        alt={'Profile'}
                    />
                </div>
                <div className={"item"}><span>Jméno: </span>{JSON.parse(localStorage.getItem("user")).name}</div>
                <div className={"item"}><span>Příjmení: </span>{JSON.parse(localStorage.getItem("user")).surname}</div>
                <div className={"item"}><span>Telefon: </span>{JSON.parse(localStorage.getItem("user")).phoneNumber}</div>
                <div className={"item"}><span>E-mail: </span>{JSON.parse(localStorage.getItem("user")).email}</div>
            </div>
        );
    }
}

export default UserProfile;
