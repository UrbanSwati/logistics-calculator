import { defineStore } from "pinia";

export const useRoundTripStore = defineStore({
  id: "roundTrip",
  state: () => ({
    dryFuelConsumption: 0,
    wetFuelConsumption: 0,
    fuelPrice: 0,
    tonPrice: 0,
    tonsPerLoad: 0,
    expenses: [{ description: '', amount: 0 }],
    dryDistance: 0,
    wetDistance: 0
  }),
  actions: {
    addNewExpense(expense) {
        this.expenses.push({ description: expense.description, amount: expense.amount });
    },
    removeExpense(index){
        this.expenses.value.splice(index, 1);
    }
  },
  getters: {
    totalFixedExpenses: (state) => state.expenses.reduce((sum, expense) => sum + expense.amount, 0),
    totalRoundTripDistance: (state) => state.dryDistance + state.wetDistance,
    dryFuelCosts: (state) => {
      return (state.dryDistance / 100) * state.dryFuelConsumption * state.fuelPrice;
    },
    wetFuelCosts: (state) => {
      return (state.wetDistance / 100) * state.dryFuelConsumption * state.fuelPrice;
    },
    totalFuelCosts: (state) => {
      return state.wetFuelCosts + state.dryFuelCosts;
    },
    totalTravelCosts: (state) => {
      return state.totalFuelCosts + state.totalFixedExpenses;
    },
    grossIncome: (state) => {
      return state.tonPrice * state.tonsPerLoad;
    },
    netIncome: (state) => {
      return state.grossIncome - state.totalTravelCosts;
    }
  }
});