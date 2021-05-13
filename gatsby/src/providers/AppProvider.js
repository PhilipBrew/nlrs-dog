import React, { useState, useContext } from 'react';

import { defaultOrderForm } from '../hooks/defaults';

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

const AppProvider = ({ children }) => {
  const [order, setOrder] = useState(defaultOrderForm);
  const [activeLoginTab, setActiveLoginTab] = useState('Login');

  return (
    <AppContext.Provider
      value={{
        order,
        setOrder,
        activeLoginTab,
        setActiveLoginTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
