<template>
    <div class="row">
        <h2>Constant Values</h2>

        <div class="mb-3">
        <label for="basic-url" class="form-label">Dry Fuel Consumption</label>
        <div class="input-group">
            <input type="text" class="form-control" :value="dryFuelConsumption" aria-describedby="basic-addon3 basic-addon4">
            <span class="input-group-text">L/100km</span>
        </div>
        <div class="form-text" id="basic-addon4">Fuel consumption when with no-load</div>
        </div>

        <div class="mb-3">
        <label for="basic-url" class="form-label">Wet Fuel Consumption</label>
        <div class="input-group">
            <input type="text" class="form-control" :value="wetFuelConsumption" aria-describedby="basic-addon3 basic-addon4">
            <span class="input-group-text">L/100km</span>
        </div>
        <div class="form-text" id="basic-addon4">Fuel consumption when with load</div>
        </div>

        <div class="mb-3">
        <label for="basic-url" class="form-label">Fuel price</label>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon3">R</span>
            <input type="text" class="form-control" :value="fuelPrice" aria-describedby="basic-addon3 basic-addon4">
            <span class="input-group-text">p/l</span>
        </div>
        <div class="form-text" id="basic-addon4">Fuel price per liter</div>
        </div>

        <div class="mb-3">
        <label for="basic-url" class="form-label">Price per Ton</label>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon3">R</span>
            <input type="text" class="form-control" :value="tonPrice" aria-describedby="basic-addon3 basic-addon4">
            <span class="input-group-text">p/Ton</span>
        </div>
        <div class="form-text" id="basic-addon4">Price per liter</div>
        </div>

    </div>    

</template>

<script setup>
import { useRoundTripStore } from "../stores/roundTrip";
import { storeToRefs } from 'pinia';

const roundTripStore = useRoundTripStore();
const { dryFuelConsumption, wetFuelConsumption, fuelPrice, tonPrice } = storeToRefs(roundTripStore)

</script>
