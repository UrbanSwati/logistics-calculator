<template>
    <div class="row">
        <h2>Constant Values</h2>

        <div class="mb-3">
        <label for="basic-url" class="form-label">Dry Fuel Consumption</label>
        <div class="input-group">
            <input type="number" class="form-control" v-model="dryFuelConsumption" aria-describedby="basic-addon3 basic-addon4">
            <span class="input-group-text">L/100km</span>
        </div>
        <div class="form-text" id="basic-addon4">Fuel consumption when with no-load</div>
        </div>

        <div class="mb-3">
        <label for="basic-url" class="form-label">Wet Fuel Consumption</label>
        <div class="input-group">
            <input type="number" class="form-control" v-model="wetFuelConsumption" aria-describedby="basic-addon3 basic-addon4">
            <span class="input-group-text">L/100km</span>
        </div>
        <div class="form-text" id="basic-addon4">Fuel consumption when with load</div>
        </div>

        <div class="mb-3">
        <label for="basic-url" class="form-label">Fuel price</label>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon3">R</span>
            <input type="number" class="form-control" v-model="fuelPrice" aria-describedby="basic-addon3 basic-addon4">
            <span class="input-group-text">p/l</span>
        </div>
        <div class="form-text" id="basic-addon4">Fuel price per liter</div>
        </div>

        <div class="mb-3">
        <label for="basic-url" class="form-label">Tons per load</label>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon3">R</span>
            <input type="number" class="form-control" v-model="tonsPerLoad" aria-describedby="basic-addon3 basic-addon4">
            <span class="input-group-text">Ton</span>
        </div>
        <div class="form-text" id="basic-addon4">Amount of tons the vehicle can carry per load</div>
        </div>
        <div class="mb-3">
        <label for="basic-url" class="form-label">Price per Ton</label>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon3">R</span>
            <input type="number" class="form-control" v-model="tonPrice" aria-describedby="basic-addon3 basic-addon4">
            <span class="input-group-text">p/Ton</span>
        </div>
        <div class="form-text" id="basic-addon4">Price per ton</div>
        </div>
   
    </div>    

</template>

<script setup>
import { useRoundTripStore } from "../stores/roundTrip";
import { storeToRefs } from 'pinia';

const roundTripStore = useRoundTripStore();
const { dryFuelConsumption, wetFuelConsumption, fuelPrice, tonPrice, tonsPerLoad } = storeToRefs(roundTripStore)

</script>
