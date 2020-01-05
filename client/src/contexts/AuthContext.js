import React from 'react';

const AuthContext = React.createContext({
  user: undefined,
  message: "TEST",
  authToken: undefined,
  onLogin: () => undefined,
  onLogout: () => undefined
});

export default AuthContext;
