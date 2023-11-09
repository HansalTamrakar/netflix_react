import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { Supported_Languages } from "./Constants";
import { changeLanguage } from "../utils/ConfigSlice";
import GptSearch from "./GptSearch";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    //This is Like a Event Listeneter Only have to call Onece

    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsuscribe when un mounts
    return () => unSubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full z-30 px-8 py-2 bg-gradient-to-b from-black  flex justify-between">
      <Link to="/browse">
        {" "}
        <img
          className="w-44 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </Link>
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="text-center font-serif font-bold bg-gray-900 text-white mr-6 h-9 mt-2 w-36 rounded-lg "
              onChange={handleLangChange}
            >
              {Supported_Languages.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className=" px-4 m-1 h-10 bg-purple-500 font-bold text-white  rounded-lg mr-20 hover:bg-opacity-40"
            onClick={handleGptSearch}
          >
            {!showGptSearch ? "GPT SEARCH" : "HOME PAGE"}
          </button>
          <img
            className="h-12 border border-black rounded-full cursor-pointer mr-9 -mt"
            src={user?.photoURL}
            alt=""
          />
          {user?.displayName && (
            <div className="text-xl  font-sans font-bold text-white bg-gray-900 min-w-fit px-6  pt-[12px] align-bottom mr-4">
              {user?.displayName}
            </div>
          )}
          <button
            className="bg-red-500 font-bold text-white  w-36 cursor-pointer rounded-xl h-12"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
