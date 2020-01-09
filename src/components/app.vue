<template>
    <div>
        <button @click="onClick">{{ button }}</button>
        <assets />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Assets from './assets.vue';

@Component({ components: { assets: Assets } })
export default class App extends Vue {
    private message = 'Hello World!';
    private count = 0;

    private get button(): string {
        return 'Click me [' + this.count + ']';
    }

    private onClick(): void {
        ++this.count;
        window.alert(this.message);
    }
}
</script>

<style lang="scss" scoped>
button {
    width: 200px;
    height: 40px;
    background-color: aquamarine;
}
</style>
