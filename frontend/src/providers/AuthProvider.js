import React from "react";
import { UsersAPI } from "../services/users";

const AuthContext = React.createContext({
  user: {name: ""},
  token: "",
  onAuth: async () => {},
  onRegister: async () => {},
  onLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [token, setToken] = React.useState("");

  const onSaveUser = () => {
    const userName = localStorage.getItem("@metaverse/user");
    const userToken = localStorage.getItem("@metaverse/token");

    if (userName) setUser({ name: userName });
    if (userToken) setToken(userToken);
  };

  const resetUserData = () => {
    setUser({});
    setToken("");
  };

  const onAuth = async (values) => {
    return await UsersAPI.login(values)
      .then((response) => {
        localStorage.setItem("@metaverse/user", response.data.login);
        localStorage.setItem("@metaverse/token", response.data.token);
        onSaveUser();
        alert("Sucesso!! Logando...");
      })
      .catch(() =>
        alert(
          "Infelizmente, você não pôde efetuar login. Por favor, tente novamente mais tarde."
        )
      );
  };

  const onRegister = async (values) => {
    return await UsersAPI.registerClient(values)
      .then(
        async () =>
          await onAuth({
            email: values.email,
            password: values.password,
          })
      )
      .catch(() =>
        alert(
          "Infelizmente, você não pôde se registrar. Por favor, tente novamente mais tarde."
        )
      );
  };

  const onLogout = () => {
    localStorage.removeItem("@metaverse/user");
    localStorage.removeItem("@metaverse/token");
    resetUserData();
  };

  React.useEffect(() => {
    onSaveUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, onAuth, onLogout, onRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context)
    throw new Error("AuthProvider is necessary in order to use useAuth");

  return context;
};
