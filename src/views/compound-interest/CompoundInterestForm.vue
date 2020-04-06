<template>
    <el-container>
        <el-main>
            <el-container >
                <el-aside>
                    <el-main>
                        <el-row>
                            <el-col class="input-margin">
                                <div class="sub-title subtitle-style">
                                    Depósito inicial
                                    <el-tooltip placement="top-start" effect="dark">
                                        <div slot="content"> Cantidad con la que vas a comenzar a invertir.</div>
                                        <span><i class="el-icon-info"></i></span>
                                    </el-tooltip>
                                </div>
                                <el-currency-format
                                        v-model.number="inputs.principal"
                                        mask-type="currency">
                                </el-currency-format>
                            </el-col>
                            <el-col class="input-margin">
                                <div class="sub-title subtitle-style">
                                    Tasa de interés anual
                                    <el-tooltip placement="top-start" effect="dark" class="tooltip-format">
                                        <div slot="content">Tasa de rendimiento anual que recibes expresada en porcentaje.</div>
                                        <span><i class="el-icon-info"></i></span>
                                    </el-tooltip>
                                    <div id="input-interest">
                                        <el-input  v-model.number="inputs.rate">
                                            <template slot="prepend"><i class="fa fa-percent"></i></template>
                                        </el-input>
                                    </div>

                                </div>
                            </el-col>
                            <el-col class="input-margin">
                                <div class="sub-title subtitle-style">
                                    Años a invertir
                                    <el-tooltip placement="top-start" effect="dark">
                                        <div slot="content">Número de años por los que vas a realizar la inversión.</div>
                                        <span><i class="el-icon-info"></i></span>
                                    </el-tooltip>
                                </div>
                                <el-input-number v-model.number="inputs.time" controls-position="right" :min="0" :max="50"></el-input-number>
                            </el-col>
                            <el-col class="input-margin">
                                <div class="sub-title subtitle-style">
                                    Frecuencia anual de interés
                                    <el-tooltip placement="top-start" effect="dark">
                                        <div class="too" slot="content">Número de veces al año <br> que se agrega el interés  <br> al capital (interés compuesto).</div>
                                        <span><i class="el-icon-info"></i></span>
                                    </el-tooltip>
                                </div>
                                <el-select class="testing" v-model="inputs.compound" placeholder="Select" size="large">
                                    <el-option
                                            v-for="item in cities"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col class="input-margin">
                                <div class="sub-title subtitle-style">
                                    Aportaciones adicionales
                                    <el-tooltip placement="top-start" effect="dark">
                                        <div slot="content">Depósitos adicionales a lo que invertiste  <br>
                                            inicialmente, la frecuencia del depósito <br>
                                            es la misma que la que definas en <br>
                                            "Frecuencia anual de interés".
                                        </div>
                                        <span><i class="el-icon-info"></i></span>
                                    </el-tooltip>
                                </div>
                                <el-currency-format
                                        v-model.number="inputs.pmt"
                                        mask-type="currency">
                                </el-currency-format>
                            </el-col>

                        </el-row>
                    </el-main>
                </el-aside>
                <el-main>
                    <compound-interest :inputs="inputs"></compound-interest>
                </el-main>
            </el-container>
        </el-main>
    </el-container>
</template>

<script>
    import CompoundInterest from "../../components/compound-interest/CompoundInterest";
    import ElCurrencyFormat from "../../components/ElCurrencyFormat";

    export default {
        name: 'CompoundCharts',
        components: {
            ElCurrencyFormat,
           CompoundInterest
        },
        data() {
            return {
                inputs: {
                    principal: 0, //principal investment amount (p)
                    rate:  7, //annual interest rate (r)
                    compound: 1, //number of times that interest is compounded per init t (n)
                    time: 10, //time the money is invested p borrowed (t)
                    pmt:  0, //monthly payment (pmt)
                },
                cities: [{
                    value: 1,
                    label: 'Anualmente'
                }, {
                    value: 12,
                    label: 'Mensualmente'
                }, {
                    value: 24,
                    label: 'Quincenalmente'
                }, {
                    value: 52,
                    label: 'Semanalmente'
                }, {
                    value: 365,
                    label: 'Diariamente'
                }],
                isInputActive: false
            }
        },
        methods: {
            setDefaultValue(inputs) {
                let vm = this;
                for (const property in inputs) {
                    if (typeof vm.inputs[property] !== 'number') {
                        vm.inputs[property] = 0;
                    }
                }
            }
        },
        watch: {
            inputs: {
                handler(inputs) {
                    this.setDefaultValue(inputs);
                },
                deep: true,
            }
        },
        filters: {
            currency: function (value) {
                return (new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })).format(value);
            }
        }
    }
</script>
<style scoped>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
    .input-margin {
        margin-top: 15px;
    }
    .subtitle-style {
        padding-bottom: 5px;
        color: gray;
    }
    .el-icon-info {
        font-size: x-small;
    }

</style>
<style>
    .el-select  {
        width: 180px;
        min-width: 180px;
    }
    #input-interest {
        width: 180px;
        min-width: 180px;
    }
</style>