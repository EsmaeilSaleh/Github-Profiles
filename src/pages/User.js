import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const param = useParams();
  return (
    <div>
      <h2>User</h2>
      <p>{param.login}</p>
    </div>
  );
};

export default User;
