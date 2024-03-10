import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();
  const navigate = useNavigate();
  console.log(user);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  function redirect() {
    navigate("/");
  }

  return (
    <>
      {isAuthenticated ? (
        <div>
          <h3> Hello {user.name}</h3>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
        </div>) : (redirect())
      }
    </>
  );
};

export default Dashboard
