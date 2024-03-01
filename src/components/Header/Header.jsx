import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

import { auth } from "@/http/firebase";
import { addUser, removeUser } from "@/store/redux/userSlice";
import { LOGO, USER_AVATAR } from "@/utils/constants";
import { setShowGptSearch } from "@/store/redux/gptSlice";

import Button from "@/components/utils/Button";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleGptButtonClick = () => {
    dispatch(setShowGptSearch(true));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-end">
          {/* <button
            onClick={handleGptButtonClick}
            className="text-white bg-purple-700 p-2 py-0 rounded-lg mr-4"
          >
            🚀 GPT Search
          </button> */}
          {/* <button
            onClick={handleSignOut}
            className="text-white bg-red-700 p-2 py-0 rounded-lg"
          >
            👋🏻 Sign Out
          </button> */}
          <Button btnName="GPT Search" onClick={handleGptButtonClick} />
          <Button
            btnName="Sign Out"
            onClick={handleSignOut}
            color="bg-red"
            textColor="text-white"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
