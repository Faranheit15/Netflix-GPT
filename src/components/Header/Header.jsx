import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useState } from "react";

import { auth } from "@/http/firebase";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="relative">
          <button
            id="dropdownDefaultButton"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center focus:outline-none"
            type="button"
          >
            <img
              src="https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABcdk1iCbqnp0L9eChv7Q8IHGZ2WTy26xTot4zHhnhnjjBiVicIkUNo9qBqvdD49rOnefHYhJ_ghofRGnfHobQ87SzOh_J4E.png?r=a4f"
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
