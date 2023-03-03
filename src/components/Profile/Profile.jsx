import React from "react";
import "./Profile.css";
import foto from "../../images/foto.png";

function Profile() {
  return (
    <div className="profile">
      <p className="profile__user-name">Константин</p>
      <img className="profile__user-foto" alt="Логотип" src={foto} />
    </div>
  );
}

export default Profile;
