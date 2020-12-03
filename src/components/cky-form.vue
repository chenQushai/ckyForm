<template>
    <div>
        <el-row :gutter="formDesc.gutter" justify="center" :type="formDesc.flex">
            <el-form ref="form"
                     :label-position="formDesc.labelPosition"
                     :label-width="formDesc.labelWidth"
                     :rules="formDesc.rules"
                     :size="formDesc.size"
                     :model="formData">
                <el-col
                    :class="formDesc.class"
                    :span="formItem.width"
                    :key="formItem.filId"
                    v-for="(formItem) in formDesc.formList">
                    <el-form-item
                          :class="formItem.class"
                          :label="formItem.isShowLabel ? formItem.label : null"
                          :label-width="formItem.labelWidth || null"
                          :prop="formItem.required ? formItem.filId : null"
                            >
                        <component
                                :is="`cky-${formItem.type}`"
                                v-if="formItem.vif !== false"
                                :value.sync="formData[formItem.filId]"
                                :attr="formItem.attr"
                        >
                        </component>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-row>


    </div>


</template>

<script>
    export default {
        name: "cky-form",
        data() {
            return {}
        },
        props: {
            // 表单描述
            formDesc: {
                type: Object,
                required: true
            },
            formData: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        model: {
            prop: 'formData',
            event: 'input'
        },
        created() {

        },
        components: {},
        methods: {
            handleChange(field, val) {
                this.$set(this.formData, field, val)
                // this.$emit('input', this.formData)
            },
            //给组件绑定上值
            setValue(filId, val) {
                console.log("父组件:" + val)
                this.handleChange(filId, val)
            },
            show() {
                console.log(45)
            }
        },
        computed: {
            getEventName(on) {
                console.log(on)
            }
        }

    }
</script>

<style scoped>

</style>