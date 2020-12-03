<template>
    <div>
        <el-divider
             :style="attr.style"
             v-on="attr.on"
             v-bind="attr.attrs"
        >
            <template v-for="(render, key) of attr.slots">
                <extend-slot :key="key"  :render="render" />
            </template>
        </el-divider>
    </div>
</template>

<script>
    import ExtendSlot from '../ExtendSlot'

    export default {
        name: "ckyDivide",
        props: {
            attr: {
                type: Object
            }
        },
        components: {
            ExtendSlot
        }
    }
</script>

<style scoped>

</style>