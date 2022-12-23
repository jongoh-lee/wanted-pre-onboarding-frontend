import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const isUserLoggedIn = !!token;

  const userLogin = (token) => {
    try {
      if (token) {
        localStorage.setItem("token", token);
        setToken(token);
      } else {
        throw new Error("토큰 저장 실패");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  const value = useMemo(
    () => ({
      token: token,
      isLoggedIn: isUserLoggedIn,
      userLogin: userLogin,
      userLogout: userLogout,
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const LogUserIn = () => {
  const { userLogin } = useContext(AuthContext);
  return userLogin;
};

export const LogUserOut = () => {
  const { userLogout } = useContext(AuthContext);
  return userLogout;
};

export const LoginCheck = () => {
  const { token, isLoggedIn } = useContext(AuthContext);
  return { token, isLoggedIn };
};
export default AuthProvider;
