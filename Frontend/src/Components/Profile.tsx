import React, { useEffect, useState } from "react";
import API from "../services/api";

const Profile: React.FC = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        console.error("Error loading profile:", err);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="card">
      <h2>Your Profile</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default Profile;

// This makes the file a TypeScript module
export {};
