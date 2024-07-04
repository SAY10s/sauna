import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SaunaConfigStateInterface {
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

// const initialState: SaunaConfigStateInterface = {
//   currentConfigStepId: 0,
//
//   model: null,
//
//   glazing: null,
//   facade: null,
//   interiorFinish: null,
//   bench: null,
//   stove: null,
//   lighting: null,
//
//   accessories: null,
// };

const initialState: SaunaConfigStateInterface = {
  currentConfigStepId: 8,

  model: "Model 1",

  glazing: "Lustro Weneckie",
  facade: "Blacha T-12",
  interiorFinish: "Antisol Brązowy",
  bench: "Antisol Grafitowy",
  stove: "Marmur",
  lighting: "Antisol Grafitowy",

  accessories: "Bez akcesoriów",
};

const SaunaConfigSlice = createSlice({
  name: "saunaConfig",
  initialState,
  reducers: {
    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
    },
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
      if (state.currentConfigStepId < 8) state.currentConfigStepId += 1;
    },
    previousStep: (state) => {
      if (state.currentConfigStepId > 0) state.currentConfigStepId -= 1;
    },
  },
});

export const {
  setModel,
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
