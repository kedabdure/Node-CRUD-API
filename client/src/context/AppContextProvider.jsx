/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [userData, setUserData] = useState(false)

  axios.defaults.withCredentials = true

  const getAuthState = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`)
      if (data.success) {
        setIsLoggedin(true)
        getUserData()
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getUserData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/data`)
      data.success ? setUserData(data.userData) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const value = {
    backendUrl,
    isLoggedin, setIsLoggedin,
    userData, setUserData,
    getUserData,
  }

  useEffect(() => {
    getAuthState()
  }, [])

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
