import { useState } from "react";

const handleChange = (e) => {
  const { name, value } = e.target;
  SetProfile((prevProfile) => ({
    ...prevProfile,
    [name]: value,
  }));
};
  return (
    <div>
      <h3>User Profile</h3>
      <div>
        <label>
          {" "}
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <lable>
          Age:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </lable>
      </div>
      <h3>Profile Info</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};
export default Profile;
