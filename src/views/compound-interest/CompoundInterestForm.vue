<template>
    <section style="margin-top: 10px;">
        <el-row id="input-container">
            <el-col :md="4" :span="24" style="padding-right: 25px;">
                <el-col class="input-margin">
                    <div class="sub-title subtitle-style">
                        Depósito inicial
                        <el-tooltip effect="dark" placement="top-start">
                            <div slot="content"> Cantidad con la que vas a comenzar a invertir.</div>
                            <span><i class="el-icon-info"></i></span>
                        </el-tooltip>
                    </div>
                    <el-currency-format mask-type="currency" v-model.number="inputs.principal"></el-currency-format>
                </el-col>
                <el-col class="input-margin">
                    <div class="sub-title subtitle-style">
                        Tasa de interés anual
                        <el-tooltip class="tooltip-format" effect="dark" placement="top-start">
                            <div slot="content">Tasa de rendimiento anual que recibes expresada en porcentaje.</div>
                            <span><i class="el-icon-info"></i></span>
                        </el-tooltip>
                        <div id="input-interest">
                            <div class="control has-icons-left has-icons-right">
                                <input type="number" v-model.number="inputs.rate"  class="input is-medium">
                                <span class="icon is-left">
                                    <i style="font-size: 80%" class="fa fa-percent"></i>
                                </span>
                            </div>
                        </div>

                    </div>
                </el-col>
                <el-col class="input-margin">
                    <div class="sub-title subtitle-style">
                        Años a invertir
                        <el-tooltip effect="dark" placement="top-start">
                            <div slot="content">Número de años por los que vas a realizar la inversión.</div>
                            <span><i class="el-icon-info"></i></span>
                        </el-tooltip>
                    </div>
                    <div class="control has-icons-left has-icons-right">
                        <input type="number" :min="0" :max="50" v-model.number="inputs.time" class="input is-medium">
                        <span class="icon is-left"><i style="font-size: 80%" class="fa fa-calendar-o"></i></span>
                    </div>
                </el-col>
                <el-col>
                    <div class="sub-title subtitle-style">
                        Frecuencia anual de interés
                        <el-tooltip effect="dark" placement="top-start">
                            <div class="too" slot="content">Número de veces al año <br> que se agrega el interés <br> al capital (interés compuesto).</div>
                            <span><i class="el-icon-info"></i></span>
                        </el-tooltip>
                    </div>
                    <div class="field">
                        <div class="control has-icons-left">
                            <div class="select is-fullwidth is-medium">
                                <select v-model="inputs.compound">
                                    <option v-for="(option, index) in options" :key="index" :value=option.value  style="font-size: 80%">
                                        {{option.text}}
                                    </option>
                                </select>
                            </div>
                            <div class="icon is-small is-left">
                                <i class="fa fa-clock-o"></i>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col>
                    <div class="sub-title subtitle-style">
                        Aportaciones adicionales
                        <el-tooltip effect="dark" placement="top-start">
                            <div slot="content">Depósitos adicionales a lo que invertiste <br>
                                inicialmente, la frecuencia del depósito <br>
                                es la misma que la que definas en <br>
                                "Frecuencia anual de interés".
                            </div>
                            <span><i class="el-icon-info"></i></span>
                        </el-tooltip>
                    </div>
                    <el-currency-format v-model="inputs.pmt"></el-currency-format>
                </el-col>
            </el-col>
            <el-col :md="20" :span="24">
                <compound-interest :inputs="inputs"></compound-interest>
            </el-col>
        </el-row>
    </section>
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
                    rate: 7, //annual interest rate (r)
                    compound: 1, //number of times that interest is compounded per init t (n)
                    time: 10, //time the money is invested p borrowed (t)
                    pmt: 0, //monthly payment (pmt)
                },
                options: [
                    {value: 1, text: 'Anualmente'},
                    {value: 12, text: 'Mensualmente'},
                    {value: 24, text: 'Quincenalmente'},
                    {value: 52, text: 'Semanalmente'},
                    {value: 365, text: 'Diariamente'}
                ],
                isInputActive: false
            }
        },
        methods: {
        }
    }
</script>
<style scoped>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
    .subtitle-style {
        padding-bottom: 5px;
        color: gray;
    }

    .el-icon-info {
        font-size: x-small;
    }

</style>
<style>
    #input-container {
        padding: 15px;
    }

    .el-col {
        margin-top: 15px;
    }
</style>