<template>
    <div class="mt-4 p-5 bg-info text-white rounded">
  <h1>Round trip calculations</h1>
  <div class="row">
    <div class="col-sm-6">
        <h4>Expenses per trip</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Cost Description </th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dry Fuel Costs</td>
                        <td>R{{ dryFuelCosts.toFixed(2) }}</td>
                    </tr>
                    <tr>
                        <td>Wet Fuel Costs</td>
                        <td>R{{ wetFuelCosts.toFixed(2) }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Total Fuel Costs</th>
                        <td>R{{ totalFuelCosts.toFixed(2) }}</td>
                    </tr>
                    <tr>
                        <td>Fixed Expenses</td>
                        <td>R{{ totalFixedExpenses.toFixed(2) }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Total Expenses Costs</th>
                        <td>R{{ totalTravelCosts.toFixed(2) }}</td>
                    </tr>
                </tbody>
            </table>
    </div>
    <div class="col-sm-6">
        <h4>Returns per trip</h4>
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Description </th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">Gross income per load</th>
                        <th scope="col">R{{ grossIncome.toFixed(2) }}</th>
                    </tr>
                    <tr>
                        <td>Total Costs</td>
                        <td>-R{{ totalTravelCosts.toFixed(2) }}</td>
                    </tr>
                    <tr>
                        <th scope="col">Net income per load</th>
                        <th scope="col">R{{ netIncome.toFixed(2) }}</th>
                    </tr>
                </tbody>
            </table>
    </div>
  </div>
  <!-- <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p> -->
</div>
</template>

<script setup>
import { useRoundTripStore } from "../stores/roundTrip";
import { storeToRefs } from 'pinia';

const roundTripStore = useRoundTripStore();
const { dryFuelCosts, totalTravelCosts, totalFuelCosts, totalFixedExpenses, wetFuelCosts, netIncome, grossIncome } = storeToRefs(roundTripStore);

</script>