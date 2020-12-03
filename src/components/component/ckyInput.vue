<template>
    <div>
        <el-input
            @input="handleChange"
            v-bind="attr.attrs"
            :style="attr.style"
            v-on="attr.on"
            :value="value"
        >
            <template v-for="(render, key) of attr.slots" v-slot:[key]>
                <extend-slot :key="key" :render="render" />
            </template>
        </el-input>
    </div>
</template>

<script>
    import ExtendSlot from '../ExtendSlot'
    export default {
        name: "ckyInput",
        props: {
            value: {
                type: String,
                default: ''
            },
            model: {
                prop: 'value'
            },
            attr: {
                type: Object,
            }
        },
        created() {

        },
        components: {
            ExtendSlot
        },
        methods: {
            handleChange(val) {
                this.$emit('update:value',val)
            }
        }
    }
</script>

<style scoped>

</style>