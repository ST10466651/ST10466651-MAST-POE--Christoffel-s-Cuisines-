import React, { createContext, useState, ReactNode } from 'react';
import { menuItems, drinks as drinksConst, food as foodConst } from './constants';

type AppDataContextType = {
  menuItems: any[];
  drinks: any;
  food: any;
  viewAll: boolean;
  populateAll: () => void;
  clearAll: () => void;
  populateMenu: () => void;
  clearMenu: () => void;
  setMenuItems: React.Dispatch<React.SetStateAction<any[]>>;
  setDrinks: React.Dispatch<React.SetStateAction<any>>;
  setFood: React.Dispatch<React.SetStateAction<any>>;
  setViewAll: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppDataContext = createContext<AppDataContextType>({
  menuItems: [],
  drinks: {},
  food: {},
  viewAll: false,
  populateAll: () => {},
  clearAll: () => {},
  populateMenu: () => {},
  clearMenu: () => {},
  setMenuItems: () => {},
  setDrinks: () => {},
  setFood: () => {},
  setViewAll: () => {},
});

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const [menuItemsState, setMenuItems] = useState<any[]>([]);
  const [drinksState, setDrinks] = useState(drinksConst);
  const [foodState, setFood] = useState(foodConst);
  const [viewAll, setViewAll] = useState(false);

  // Populate everything including viewAll
  const populateAll = () => {
    setMenuItems(menuItems);
    setDrinks(drinksConst);
    setFood(foodConst);
    setViewAll(true);
  };

  // Clear everything including viewAll
  const clearAll = () => {
    setMenuItems([]);
    setFood({ starters: [], mains: [], desserts: [], specials: [] });
    setViewAll(false);
  };

  // Only affect menu items/screens
  const populateMenu = () => {
    setFood(foodConst);
    setDrinks(drinksConst);
    setViewAll(true);
  };

  const clearMenu = () => {
    setMenuItems([]);
    setFood({ starters: [], mains: [], desserts: [], specials: [] });
    setViewAll(false);
  };

  return (
    <AppDataContext.Provider
      value={{
        menuItems: menuItemsState,
        drinks: drinksState,
        food: foodState,
        viewAll,
        populateAll,
        clearAll,
        populateMenu,
        clearMenu,
        setMenuItems,
        setDrinks,
        setFood,
        setViewAll,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
