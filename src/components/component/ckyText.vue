<template>
    <div
        v-bind="attr.attrs"
        :style="attr.style"
        v-on="attr.on"
    >
        {{value}}
    </div>
</template>

<script>
    import ExtendSlot from '../ExtendSlot'
    export default {
        name: "ckyText",
        props: {
            value: {
                type: String,
                default: ''
            },
            attr: {
                type: Object,
            }
        }
    }
</script>

<style scoped>

</style>