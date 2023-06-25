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
                
        <div class="mb-3" style="padding-top: 12px;">
        <label for="basic-url" class="form-label">Total fixed expenses</label>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon3">R</span>
            <input type="number" class="form-control" v-model="totalFixedExpenses" aria-describedby="basic-addon3 basic-addon4" disabled>
        </div>
        <div class="form-text" id="basic-addon4">Expenses can be toll gates and other things required on each load</div>
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
