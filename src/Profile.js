import React, { useState, useEffect } from "react";

const Profile = (props) => {
  const [userProfile, setUserProfile] = useState({
    profile: null,
    error: "",
  });

  useEffect(() => {
    props.auth.getProfile((profile, error) => {
      setUserProfile({ profile, error });
    });
  }, [props.auth]);

  const { profile } = userProfile;

  return (
    <>
      {profile && (
        <>
          <h1>Profile</h1>
          <p>{profile.nickname}</p>
          <img
            style={{ maxWidth: 500, maxHeight: 500 }}
            src={profile.picture}
            alt="profile pic"
          />
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </>
      )}
    </>
  );
};

export default Profile;
