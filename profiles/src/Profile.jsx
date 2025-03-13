import profilePic1 from "./assets/jane.png"
import profilePic2 from "./assets/gregory_parent_headshot copy.jpeg"

function Profile(){
    return(

    <div className="profile-container">
        <div className="profile">
            <img className="profileImg" src={profilePic1} alt="Jane's profile picture" />
            <h2 className="profile-title">Jane Tenecota Villa</h2>
            <p className="profileText">Love data, running, and my dog</p>
        </div>

        <div className="profile">
            <img className="profileImg" src={profilePic2} alt="Gregory's profile picture" />
            <h2 className="profile-title">Gregory Parent</h2>
            <p className="profileText">Locked in</p>
        </div>
  </div>

    );
}

export default Profile