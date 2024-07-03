import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SaunaConfigStateInterface {
  [key: string]: string | null | number;

  currentConfigStepId: number;

  model: string | null;

  glazing: string | null;
  facade: string | null;
  interiorFinish: string | null;
  bench: string | null;
  stove: string | null;
  lighting: string | null;

  accessories: string | null;
}

const initialState: SaunaConfigStateInterface = {
  currentConfigStepId: 0,

  model: "Model 1",

  glazing: "pink",
  facade: null,
  interiorFinish: null,
  bench: null,
  stove: null,
  lighting: null,

  accessories: null,
};

const SaunaConfigSlice = createSlice({
  name: "saunaConfig",
  initialState,
  reducers: {
    setGlazing: (state, action: PayloadAction<string>) => {
      state.glazing = action.payload;
    },
    setFacade: (state, action: PayloadAction<string>) => {
      state.facade = action.payload;
    },
    setInteriorFinish: (state, action: PayloadAction<string>) => {
      state.interiorFinish = action.payload;
    },
    setBench: (state, action: PayloadAction<string>) => {
      state.bench = action.payload;
    },
    setStove: (state, action: PayloadAction<string>) => {
      state.stove = action.payload;
    },
    setLighting: (state, action: PayloadAction<string>) => {
      state.lighting = action.payload;
    },

    setAccessories: (state, action: PayloadAction<string>) => {
      state.accessories = action.payload;
    },

    nextStep: (state) => {
      if (state.currentConfigStepId < 7) state.currentConfigStepId += 1;
    },
    previousStep: (state) => {
      if (state.currentConfigStepId > 0) state.currentConfigStepId -= 1;
    },
  },
});

export const {
  setGlazing,
  setBench,
  setInteriorFinish,
  setStove,
  setLighting,
  setFacade,
  setAccessories,
  nextStep,
  previousStep,
} = SaunaConfigSlice.actions;

export default SaunaConfigSlice.reducer;
