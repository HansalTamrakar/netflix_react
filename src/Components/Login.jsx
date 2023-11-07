import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/Validate";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/Firebase";
import { Photo } from "./Constants";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useDispatch } from "react-redux";

const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);
  const [errorMessageOn, setErrorMessageOn] = useState("");
  const dispatch = useDispatch();

  const emailref = useRef(null);
  const passwordref = useRef(null);
  const nameref = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
  };
  const handleButtonClick = () => {
    const message = checkValidate(
      emailref?.current?.value,
      passwordref?.current?.value,
      nameref?.current?.value
    );
    setErrorMessageOn(message);

    if (message) {
      return;
    }

    if (!isSigninForm) {
      //SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        emailref.current.value,
        nameref.current.value,

        passwordref.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // const { uid, email, displayName, photoURL } = auth.currentUser;
          updateProfile(user, {
            displayName: nameref.current.value,
            photoURL: Photo,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessageOn(errorCode + "-" + errorMessage);
        });
    } else {
      //signin Logic

      signInWithEmailAndPassword(
        auth,
        emailref.current.value,
        passwordref.current.value,
        nameref?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessageOn(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action=""
          className="absolute text-white  bg-black w-3/12 my-60 mx-auto right-0 left-0 bg-opacity-70 p-16"
        >
          <h1 className="text-3xl font-bold  y-4">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSigninForm ? (
            <input
              ref={nameref}
              // value={nameref.current.value}
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full bg-gray-800 h-16 text-xl "
            />
          ) : null}
          <input
            ref={emailref}
            // value={emailref.current.value}
            type="email"
            placeholder="Email Adress"
            className="p-2 my-4 w-full bg-gray-800 h-16 text-xl "
          />

          <input
            ref={passwordref}
            // value={passwordref.current.value}
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-800 h-16 text-xl"
          />

          <p className="text-red-600 font-bold py-2 text-xl ">
            {errorMessageOn}
          </p>
          <button
            className="p-4 my-12 bg-red-500 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-4 cursor-pointer hover:text-red-500 "
            onClick={toggleSignInForm}
          >
            {isSigninForm
              ? "New to Netflix?Signup Now"
              : "All Ready?Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
