import React from "react";

export interface ISettingsContext {
  workMinutes: number;
  setWorkMinutes: (min: number) => void;
  relaxMinutes: number;
  setRelaxMinutes: (min: number) => void;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultSettings: ISettingsContext = {
  workMinutes: 45,
  setWorkMinutes: (workMin) => {},
  relaxMinutes: 15,
  setRelaxMinutes: (relaxMin) => {},
  setShowSettings: () => {},
};

export const SettingsContext =
  React.createContext<ISettingsContext>(defaultSettings);
