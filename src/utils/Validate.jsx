import React from "react";

export const checkValidate = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(
    email
  );
  const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
