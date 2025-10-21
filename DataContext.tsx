import React, { createContext, useState, ReactNode } from 'react';
import { menuItems as defaultMenuItems, wines } from './constants'; // rename import to avoid conflict

type AppDataContextType = {
  menuItems: any[];
  drinks: any[];
  populateAll: () => void;
  clearAll: () => void;
};

export const AppDataContext = createContext<AppDataContextType>({
  menuItems: [],
  drinks: [],
  populateAll: () => {},
  clearAll: () => {},
});

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [drinks, setDrinks] = useState<any[]>([]);

  const populateAll = () => {
    setMenuItems(defaultMenuItems); // use imported menuItems
    setDrinks(wines);
  };

  const clearAll = () => {
    setMenuItems([]);
    setDrinks([]);
  };

  return (
    <AppDataContext.Provider value={{ menuItems, drinks, populateAll, clearAll }}>
      {children}
    </AppDataContext.Provider>
  );
};
