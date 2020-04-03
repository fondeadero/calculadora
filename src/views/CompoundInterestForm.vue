<template>
    <el-container>
        <el-main>
            <el-container>
                <el-aside>
                    <el-main>
                        <el-row>
                            <el-col class="input-margin">
                                <div class="sub-title subtitle-style">Depósito Inicia</div>
                                <el-input-number v-model.number="inputs.principal" controls-position="right"  :min="0"></el-input-number>
                            </el-col>
                            <el-col class="input-margin">
                                <div class="sub-title subtitle-style">Interes</div>
                                <el-input-number v-model.number="inputs.rate" controls-position="right"  :min="0"></el-input-number>
                            </el-col>
                            <el-col class="input-margin">
                                <div class="sub-title subtitle-style">Número de años</div>
                                <el-input-number v-model.number="inputs.time" controls-position="right"  :min="0" :max="50"></el-input-number>
                            </el-col>
                            <el-col class="input-margin">
                                <div class="sub-title subtitle-style">Frecuencia de interés compuesto </div>
                                <el-input-number v-model.number="inputs.compound" controls-position="right"  :min="0"></el-input-number>
                            </el-col>
                            <el-col class="input-margin">
                                <div class="sub-title subtitle-style">Depósitos regulares</div>
                                <el-input-number v-model.number="inputs.pmt" controls-position="right"  :min="0"></el-input-number>
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
    import CompoundInterest from "../components/CompoundInterest";

    export default {
        name: 'CompoundCharts',
        components: {
           CompoundInterest
        },
        data() {
            return {
                inputs: {
                    principal: 0, //principal investment amount (p)
                    pmt: this.pmt > 0 ?? '', //monthly payment (pmt)
                    rate: this.rate > 0 ?? '', //annual interest rate (r)
                    compound: this.compound ?? 12, //number of times that interest is compounded per init t (n)
                    time: this.time ?? 0, //time the money is invested p borrowed (t)
                }
            }
        }
    }
</script>
<style scoped>
    .input-margin {
        margin-top: 15px;
    }
    .subtitle-style {
        padding-bottom: 5px;
        color: gray;
    }
</style>