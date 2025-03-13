import profilePic1 from "./assets/headshot.jpeg"
import profilePic2 from "./assets/headshot.jpeg"


function Profile(){
    return(
        <div>
            <div className="profile1">
                    <img className = "profileImg" src={profilePic1} alt="profile picture" />
                    <h2 className="profile-title">Gregory Parent</h2>
                    <p className="profileText">Type shit</p>
            </div> 
 
            <div className="profile2">
                    <img className = "profileImg" src={profilePic2} alt="profile picture" />
                    <h2 className="profile-title">Jane Tenecota Villa</h2>
                    <p className="profileText">Type shit</p>
            </div> 
       </div>
    );
}

export default Profile