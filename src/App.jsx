import React, { createContext, useState } from 'react';
import {Header, Footer} from "@components"
import { Outlet } from 'react-router-dom';

export const UserContext = createContext();


const App = () => {
  const [user, setUser] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </UserContext.Provider>
  );
};

export default App;