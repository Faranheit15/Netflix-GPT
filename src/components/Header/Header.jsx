import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

import { auth } from "@/http/firebase";
import { addUser, removeUser } from "@/store/redux/userSlice";
import { LOGO, USER_AVATAR, SUPPORTED_LANGUAGES } from "@/utils/constants";
import { setShowGptSearch } from "@/store/redux/gptSlice";
import { changeLanguage } from "@/store/redux/configSlice";

import Button from "@/components/utils/Button";
import Select from "@/components/utils/Select";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-end">
          {showGptSearch && (
            <Select
              options={SUPPORTED_LANGUAGES}
              handleChange={handleLanguageChange}
              defaultValue={SUPPORTED_LANGUAGES[0].name}
            />
          )}
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
