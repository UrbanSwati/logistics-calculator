<template>
    <div class="container">
    <div class="row">
            <div class="col-md-4">
                <fixed-expenses></fixed-expenses>
            </div>
            <div class="col-md-4">
                <distance-values></distance-values>
            </div>
            <div class="col-md-4">
                <constant-values></constant-values>
            </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <round-trip-calculation></round-trip-calculation>
        </div>
    </div>
  </div>
</template>

<script setup>
import FixedExpenses from '../components/FixedExpenses.vue'
import ConstantValues from '../components/ConstantValues.vue'
import DistanceValues from "../components/DistanceValues.vue";
import RoundTripCalculation from "../components/RoundTripCalculation.vue";

</script>
