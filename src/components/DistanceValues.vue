<template>
    <div class="row">
        <h2>Distance</h2>

        <div class="mb-3">
        <label for="basic-url" class="form-label">Dry Distance Travel</label>
        <div class="input-group">
            <input type="number" class="form-control" v-model="dryDistance" aria-describedby="basic-addon3 basic-addon4">
            <span class="input-group-text">km</span>
        </div>
        <div class="form-text" id="basic-addon4">The distance the vehicle will travel with no-load</div>
        </div>

        <div class="mb-3">
        <label for="basic-url" class="form-label">Wet Distance Travel</label>
        <div class="input-group">
            <input type="number" class="form-control" v-model="wetDistance" aria-describedby="basic-addon3 basic-addon4">
            <span class="input-group-text">km</span>
        </div>
        <div class="form-text" id="basic-addon4">The distance the vehicle will travel with load</div>
        </div>

        <div class="mb-3">
        <label for="basic-url" class="form-label">Total Distance</label>
        <div class="input-group">
            <input type="number" class="form-control" :value="totalRoundTripDistance" aria-describedby="basic-addon3 basic-addon4" disabled>
            <span class="input-group-text">km</span>
        </div>
        </div>

    </div>    

</template>

<script setup>
import { useRoundTripStore } from "../stores/roundTrip";
import { storeToRefs } from 'pinia';

const roundTripStore = useRoundTripStore();
const { dryDistance, wetDistance, totalRoundTripDistance } = storeToRefs(roundTripStore);

</script>
