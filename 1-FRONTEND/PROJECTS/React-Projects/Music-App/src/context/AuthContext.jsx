import { createContext, useState } from "react";

export const AuthStore = createContext()

export const AuthContextProvider = ({ children }) => {


  const registerUser = (newUser) => {

    const users = JSON.parse(localStorage.getItem('registeredUsers')) || []

    const alreadyExists = users.find(user => user.email === newUser.email)

    if (alreadyExists) return {
      success: false,
      message: 'User already exists'
    }

    const updatedUsers = [...users, newUser]
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers))

    return {
      success: true,
      message: 'User registered successfully'
    }
  }



  const exportedValues = {
    registerUser
  }


  return <AuthStore.Provider value={exportedValues}>
    {children}
  </AuthStore.Provider>
}