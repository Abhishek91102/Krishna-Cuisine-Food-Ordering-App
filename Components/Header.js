import { useAuth0 } from "@auth0/auth0-react";
import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const onlineStatus = useOnlineStatus();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      loginWithRedirect();
    }
  };


  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center p-1 m-1">
        <ul className="flex ">
          <li className="px-4"> Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/About">About</Link></li>
          <li className="px-4"><Link to="/Contact">Contact</Link></li>
          <li className="px-4">Cart</li>
          <div className="ml-4 flex items-center">
          {isAuthenticated && <Profile />}  {/* Show profile if authenticated */}
          <button
            className="px-2 py-1 bg-green-500 m-2 rounded-lg"
            onClick={handleAuthAction}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
