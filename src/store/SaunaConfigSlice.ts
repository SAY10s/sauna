import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SaunaConfigStateInterface {
  [key: string]: string | null | number | string[];

  currentConfigStepId: number;

  model: string | null;

  glazing: string | null;
  facade: string | null;
  interiorFinish: string | null;
  bench: string | null;
  stove: string | null;
  lighting: string | null;

  accessories: string[];
}

const initialState: SaunaConfigStateInterface = {
  currentConfigStepId: 0,

  model: "Model 1",

  glazing: "Lustro Weneckie",
  facade: null,
  interiorFinish: null,
  bench: null,
  stove: null,
  lighting: null,

  accessories: [],
};

// const initialState: SaunaConfigStateInterface = {
//   currentConfigStepId: 8,
//
//   model: "Model 1",
//
//   glazing: "Lustro Weneckie",
//   facade: "Blacha T-12",
//   interiorFinish: "Antisol Brązowy",
//   bench: "Antisol Grafitowy",
//   stove: "Marmur",
//   lighting: "Antisol Grafitowy",
//
//   accessories: "Bez akcesoriów",
// };

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

    addAccessory: (state, action: PayloadAction<string>) => {
      state.accessories.push(action.payload);
    },
    removeAccessory: (state, action: PayloadAction<string>) => {
      state.accessories = state.accessories.filter(
        (accessory) => accessory !== action.payload,
      );
    },

    nextStep: (state) => {
      if (state.currentConfigStepId < 8) state.currentConfigStepId += 1;
    },
    previousStep: (state) => {
      if (state.currentConfigStepId > 0) state.currentConfigStepId -= 1;
    },
    chooseStep: (state, action: PayloadAction<number>) => {
      state.currentConfigStepId = action.payload;
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
  addAccessory,
  removeAccessory,
  nextStep,
  previousStep,
  chooseStep,
} = SaunaConfigSlice.actions;

export default SaunaConfigSlice.reducer;
