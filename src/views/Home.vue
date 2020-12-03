<template>
    <div class="home">
        <ckyForm v-model="formData" :formDesc="formDesc"></ckyForm>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ckyForm from '@/components/cky-form'

    export default {
        name: 'Home',
        data() {
            return {
                formData: {
                    name: '18',
                    title: '宸范县妇幼保健计划生育服务中心',
                    hospitalRecord: '入院记录',
                    office: '内儿科',
                    bedNo: '10',
                    hospitalNo: '5155525'
                },
                formDesc: {
                    inline: true,
                    flex: 'flex',
                    gutter: 10,
                    labelPosition: 'left',
                    labelWidth: '',
                    flexType: 'flex',
                    size: 'mini',
                    class: 'foo',//全局样式可对象,可数组
                    formList: [
                        {
                            filId: 'name',
                            label: '姓名',
                            type: 'input',
                            width: 8,
                            labelWidth: '80px',
                            isShowLabel: true,
                            required: true,
                            class: '',////单个el-item样式
                            //设置具体表单属性功能
                            attr: {
                                //此处arrts为具体组件的v-bind属性
                                attrs: {
                                    maxLength: 10,
                                    disabled: false,
                                    readonly: false,
                                },
                                on: {
                                    change: (val) => {
                                        console.log(val)
                                    }
                                },
                                slots: {
                                    // 第一个参数是渲染函数，第二个参数是作用域插槽的数据
                                    prefix(h) {
                                        return h('i', {class: 'el-input__icon el-icon-search'})
                                    },
                                },
                                style: {
                                    color: 'red'
                                },
                            }

                        },
                        {
                            filId: 'title',
                            label: '标题',
                            type: 'text',
                            width: 24,
                            labelWidth: '0',
                            isShowLabel: false,
                            required: false,
                            attr: {
                                on: {},
                                style: {
                                    color: 'black',
                                    textAlign: 'center',
                                    fontSize: '30px',
                                    fontWeight: 'bold'
                                },
                            }

                        },
                        {
                            filId: 'hospitalRecord',
                            type: 'text',
                            width: 24,
                            attr: {
                                style: {
                                    textAlign: 'center',
                                    fontSize: '20px',
                                    fontWeight: '600'
                                },
                            }
                        },
                        {
                            filId: 'office',
                            label: '科室:',
                            type: 'text',
                            labelWidth: '45px',
                            isShowLabel: true,
                            width: 8,
                            attr: {
                                style: {
                                    textAlign: 'left',
                                    fontSize: '16px',
                                },
                            }
                        },
                        {
                            filId: 'bedNo',
                            type: 'text',
                            label: '床号:',
                            width: 8,
                            labelWidth: '45px',
                            isShowLabel: true,
                            attr: {
                                style: {
                                    textAlign: 'left',
                                    fontSize: '16px',
                                },
                            }
                        },
                        {
                            filId: 'hospitalNo',
                            type: 'text',
                            label: '住院号:',
                            width: 8,
                            labelWidth: '60px',
                            isShowLabel: true,
                            attr: {
                                style: {
                                    textAlign: 'left',
                                    fontSize: '16px',
                                },
                            }
                        },
                        {
                            type: 'divide',
                            class: 'foo',//单个el-item样式
                            attr: {
                                style: {
                                    margin: '10px 0'
                                },
                                attrs: {
                                    contentPosition: 'left'
                                },
                                slots: {
                                    prefix(h) {
                                        return h('span')
                                    },
                                }
                            }
                        },
                    ],
                    rules: {
                        name: [
                            {required: true, message: '请输入活动名称', trigger: 'blur'},
                        ]
                    }
                }
            }
        },
        watch: {
            formData: {
                handler(newVal) {
                    // console.log(newVal)
                },
                deep: true
            }
        },
        components: {
            ckyForm,

        }
    }
</script>

<style>
    .foo /deep/ .el-form-item {
        margin-bottom: 0px !important;

    }
    .foo /deep/ .el-divider--horizontal {
        margin: 10px 0;
    }
</style>
