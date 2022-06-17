import React from "react";

export interface ISettingsContext {
  workMinutes: number;
  setWorkMinutes: (min: number) => void;
  relaxMinutes: number;
  setRelaxMinutes: (min: number) => void;
}

const defaultSettings: ISettingsContext = {
  workMinutes: 45,
  setWorkMinutes: (workMin) => {},
  relaxMinutes: 15,
  setRelaxMinutes: (relaxMin) => {},
};

export const SettingsContext =
  React.createContext<ISettingsContext>(defaultSettings);
