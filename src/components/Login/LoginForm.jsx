import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { validateForm } from "@/utils/validate";
import { auth } from "@/http/firebase";
import { addUser } from "@/store/redux/userSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef?.current?.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const message = validateForm(email, password);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      //Logic for Signup functionality
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/Netflix-GPT/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Logic for Signin functionality
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/Netflix-GPT/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="text-3xl font-bold py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignInForm && (
        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          required
          name="name"
          className="p-4 my-4 w-full rounded-lg bg-gray-600"
        />
      )}
      <input
        ref={emailRef}
        type="email"
        placeholder="Email Address"
        required
        name="email"
        className="p-4 my-4 w-full rounded-lg bg-gray-600"
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        required
        name="password"
        autoComplete="off"
        className="p-4 my-4 w-full rounded-lg bg-gray-600"
      />
      <p className="text-red-600 text-xl">{errorMessage}</p>
      <button
        onSubmit={(e) => e.preventDefault()}
        onClick={handleSubmit}
        type="submit"
        className="p-4 my-6 bg-red-700 w-full rounded-lg"
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p className="py-4">
        {isSignInForm ? "New to Netflix?" : "Already have an account?"}
        <span
          onClick={toggleIsSignInForm}
          className="cursor-pointer text-gray-600"
        >
          {isSignInForm ? " Sign Up Now" : " Sign In"}
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
