<template>
    <div>
        <img src="../assets/asset.png" alt="Big image" />
        <img src="../assets/pixelart.png" alt="Small image" />
        <img src="../assets/owl.jpg" alt="JPG image" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Assets extends Vue {}
</script>
