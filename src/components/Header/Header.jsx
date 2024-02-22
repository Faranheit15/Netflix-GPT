import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

import { auth } from "@/http/firebase";
import { addUser, removeUser } from "@/store/redux/userSlice";
import { LOGO, USER_AVATAR } from "@/utils/constants";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Netflix-GPT/browse");
      } else {
        dispatch(removeUser());
        navigate("/Netflix-GPT/");
      }
    });
    //unsubscribe when the component unmounts, i.e., hygiene
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/Netflix-GPT");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="relative">
          <button
            id="dropdownDefaultButton"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center focus:outline-none"
            type="button"
          >
            <img
              src={USER_AVATAR}
              alt="avatar"
              className="w-12 h-12 rounded-full cursor-pointer"
            />
          </button>
          {isDropdownOpen && (
            <div
              id="dropdown"
              className="absolute z-10 divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul
                className="py-2 text-sm text-gray-700"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <button
                    onClick={handleSignOut}
                    className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 w-full text-left text-white"
                    style={{ borderRadius: " 8px" }}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
