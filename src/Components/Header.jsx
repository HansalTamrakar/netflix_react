import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";

import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
      }
    });
    //Unsuscribe when un mounts
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute w-full z-30 px-8 py-2 bg-gradient-to-b from-black  flex justify-between">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="h-12 border border-black rounded-full cursor-pointer mr-9 "
            src={user?.photoURL}
            alt=""
          />
          {user?.displayName && (
            <div className="text-xl  font-sans font-bold text-white bg-gray-900 min-w-fit px-6  pt-[12px] align-bottom mr-4">
              {user?.displayName}
            </div>
          )}

          <button
            className="bg-red-500 font-bold text-white  w-36 cursor-pointer rounded-xl"
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
