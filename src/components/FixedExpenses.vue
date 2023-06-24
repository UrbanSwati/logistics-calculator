<template>
        <div class="row">
                <h2>Fixed Expenses</h2>
                <form @submit.prevent="addExpense">
        <div v-for="(expense, index) in expenses" :key="index" class="input-group mb-3">
            <input v-model="expense.description" type="text" placeholder="Description" required class="form-control">
            <input v-model.number="expense.amount" type="number" placeholder="Amount" required class="form-control">
            <button @click="removeExpense(index)" class="btn btn-outline-danger">Remove</button>
        </div>
            <button type="button" @click="addNewExpense" class="btn btn-outline-primary form-control">Add Expense</button>
        </form>
                <div class="input-group mb-3" style="padding-top: 15px;">
                <span class="input-group-text">R</span>
                <input type="number" class="form-control" v-model="totalFixedExpenses" aria-label="Amount (to the nearest ZAR)" disabled>
            </div>
        </div>    

</template>

<script setup>
import { useRoundTripStore } from "../stores/roundTrip";
import { storeToRefs } from 'pinia';

const roundTripStore = useRoundTripStore();
const { expenses, totalFixedExpenses } = storeToRefs(roundTripStore)

const addNewExpense = () => {
    expenses.value.push({ description: '', amount: 0 });
};

const removeExpense = (index) => {
    expenses.value.splice(index, 1);
};



</script>
