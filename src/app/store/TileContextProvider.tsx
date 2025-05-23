'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

type TileContextType = {
  isTileView: boolean;
  setIsTileView: (val: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
};

const TileContext = createContext<TileContextType | undefined>(undefined);

export const TileContextProvider = ({ children }: { children: ReactNode }) => {
  const [tileView, setTileView] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const value = {
    isTileView: tileView,
    setIsTileView: (newVal: boolean) => {
      setTileView(newVal);
    },
    isMenuOpen: menuOpen,
    setIsMenuOpen: (newValue: boolean) => {
      setMenuOpen(newValue);
    },
  };

  return <TileContext.Provider value={value}>{children}</TileContext.Provider>;
};
export const useTileContext = () => {
  const context = useContext(TileContext);
  if (!context) {
    throw new Error('useTileContext must be used within a TileContextProvider');
  }
  return context;
};
