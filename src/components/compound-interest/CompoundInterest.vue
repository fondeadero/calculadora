<template>
    <el-container style="border: 1px solid #eee">
        <el-container>
            <el-main>
                <div class="subtitle-style">
                    <h3>
                        Calculadora de interés compuesto
                        <el-tooltip placement="top-start" effect="dark">
                            <div slot="content">
                                Interés compuesto es el interés generado sobre los intereses al reinvertirlos. <br>
                                Esta calculadora asume que cada año tus ganancias serán reinvertidas <br>
                                y no se hará ningún retiro.
                            </div>
                            <span><i class="el-icon-info" style="font-size: 0.8rem;"></i></span>
                        </el-tooltip>
                    </h3>


                </div>
                <chart-set-up :chart-data="datacollection"></chart-set-up>

                <el-divider></el-divider>

                <el-main>
                    <div class="subtitle-style">
                        <h3>Resultados</h3>
                    </div>
                    <el-row :gutter="12">
                        <el-col :span="6" style="text-align: center;">
                            <el-card shadow="hover" id="principal">
                                <div slot="header" class="clearfix" style="display: block;">
                                    <span style="display: block;">
                                        <h3 class="subtitle-style">
                                            Depósito inicial
                                        </h3>
                                    </span>
                                    <span style="display: block;">
                                        <el-icon class="icon el-icon-wallet icon"  type="text"></el-icon>
                                    </span>
                                </div>
                                <div class="high">
                                    {{ currentStrategy.principal}}
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="6" style="text-align: center;">
                            <el-card shadow="hover" id="deposits">
                                <div slot="header" class="clearfix" style="display: block;">
                                    <span style="display: block;">
                                        <h3 class="subtitle-style">
                                            Depósitos adicionales acumulados</h3>
                                    </span>
                                    <span style="display: block;">
                                        <el-icon class="icon el-icon-coin icon"  type="text"></el-icon>
                                    </span>
                                </div>
                                <div class="high">
                                    {{currentStrategy.deposits}}
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="6" style="text-align: center;">
                            <el-card shadow="hover" id="interest">
                                <div slot="header" class="clearfix" style="display: block;">
                                    <span style="display: block;">
                                        <h3 class="subtitle-style">
                                             Interés acumulado
                                        </h3>
                                    </span>
                                    <span style="display: block;">
                                        <el-icon class="icon el-icon-data-line icon"  type="text"></el-icon>
                                    </span>
                                </div>
                                <div class="high">
                                    {{ currentStrategy.interests}}
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="6" style="text-align: center;">
                            <el-card shadow="hover" id="total">
                                <div slot="header" class="clearfix" style="display: block;">
                                    <span style="display: block;">
                                        <h3 class="subtitle-style">
                                            Total
                                        </h3>
                                    </span>
                                    <span style="display: block;">
                                        <el-icon class="icon el-icon-money icon"  type="text"></el-icon>
                                    </span>
                                </div>
                                <div class="high">
                                    {{ currentStrategy.total}}
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-main>


                <el-divider></el-divider>

                <el-container style="padding-bottom: 0; margin-bottom: 0">
                    <el-main>
                        <div class="subtitle-style">
                            <h3>Resultados por año</h3>
                        </div>
                            <el-table  class="align-table-content" :data="tableMetrics" height="40rem" v-loading="loading">
                                <el-table-column prop="years" label="Años"></el-table-column>
                                <el-table-column prop="principal" label="Depósito inicial"></el-table-column>
                                <el-table-column prop="deposits" label="Depósitos adicionales acumulados"></el-table-column>
                                <el-table-column prop="interests" label="Interés acumulado"></el-table-column>
                                <el-table-column prop="total" label="Total"></el-table-column>
                            </el-table>

                    </el-main>
                </el-container>

                <el-divider></el-divider>

              <el-container>
                  <el-faq-section></el-faq-section>
              </el-container>

            </el-main>
        </el-container>
    </el-container>

</template>

<script>
   import ChartSetUp from "../ChartSetUp";
   import ElFaqSection from "../../views/compound-interest/ElFaqSection";

    export default {
        name: 'CompoundCharts',
        components: {
            ChartSetUp,
            ElFaqSection
        },
        props: ['inputs'],
        data() {
            return {
                // instantiating datacollection with null
                datacollection: {},
                realRate: 0, //rate/100
                compoundInterest: 0,
                featureValue: 0,
                metrics: {
                    'years': [],
                    'principal': [],
                    'deposits': [],
                    'interests': [],
                    'total': []
                },
                tableMetrics: [{}],
                categories: [],
                currentStrategy: {
                    'principal': 0,
                    'deposits': 0,
                    'interests': 0,
                    'total': 0
                },
                loading: false,
                activeNames: ['1']
            }
        },
        methods: {
            fillData(years = [], handleData = [0]) {
                this.datacollection = {
                    // Data for the y-axis of the chart
                    labels: years,
                    datasets: [
                        {
                            label: 'Depósito inicial',
                            backgroundColor: '#1C81A2',
                            data: handleData['principal']
                        }, {
                            label: 'Depósitos adicionales acumulados',
                            backgroundColor: '#23A1CD',
                            data: handleData['deposits']
                        },
                        {
                            label: 'Interés acumulado',
                            backgroundColor: '#68F1BB',
                            data: handleData['interests']
                        },
                        {
                            label: 'Total',
                            backgroundColor: '#4CBB9F',
                            data: handleData['total']
                        }
                    ]
                }
            },
            buildChart() {
                let vm = this;

                vm.clearMetrics();

                vm.loading = true;
                let compoundInterest = 0;
                let futureValue = 0;

                for (let years = 1; years <= vm.inputs.time; years++) {
                    vm.categories.push(years === 1 ? years + ' año' : years + ' años');
                    vm.metrics.principal.push(vm.inputs.principal);

                    let deposited = years * vm.inputs.compound * vm.inputs.pmt;

                    vm.metrics.deposits.push(deposited);

                    compoundInterest = vm.calculateTotalCompoundInterest(years);
                    futureValue = vm.calculateFutureValue(years);

                    let total = Number(compoundInterest) + Number(futureValue);
                    vm.metrics.interests.push((total - deposited - vm.inputs.principal).toFixed(2));
                    vm.metrics.total.push(total.toFixed(2));
                }

                this.fillData(vm.categories, vm.metrics);
            },
            clearMetrics() {
                let vm = this;
                vm.metrics = {
                    'principal': [],
                    'deposits': [],
                    'interests': [],
                    'total': []
                };
                vm.categories = [];
            },
            calculateTotalCompoundInterest(time = 0) {
                let vm = this;
                return (vm.inputs.principal * (Math.pow(1 + vm.realRate / vm.inputs.compound, vm.inputs.compound * time))).toFixed(2);
            },
            calculateFutureValue(time = 0) {
                let vm = this;
                return (vm.inputs.pmt * (((Math.pow(1 + vm.realRate / vm.inputs.compound, vm.inputs.compound * time)) - 1) / (vm.realRate / vm.inputs.compound))).toFixed(2);
            },
            hasMetricsEmptyData(defaultResponse = false) {
                let vm = this;
                for (const property in vm.metrics) {
                    if (vm.metrics[property].length === 0) {
                        defaultResponse = true;
                        break;
                    }
                }
                return defaultResponse;
            },
            sortToTable() {
                let vm = this;
                vm.tableMetrics = [];
                for (let years = 0; years < vm.inputs.time; years++) {
                    vm.tableMetrics.push({
                        'years': years + 1,
                        'principal': vm.currencyFormat(vm.metrics.principal[years]),
                        'deposits': vm.currencyFormat(vm.metrics.deposits[years]),
                        'interests': vm.currencyFormat(vm.metrics.interests[years]),
                        'total': vm.currencyFormat(vm.metrics.total[years])
                    });
                }
                vm.loading = false;
            },
            currencyFormat(value) {
                return (new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })).format(value);
            }
        },
        watch: {
            'inputs.rate': function (rate) {
                this.realRate = (rate / 100);
            },
            inputs: {
                handler() {
                    this.buildChart();
                },
                deep: true,
            },
            metrics: {
                handler() {
                    if (this.hasMetricsEmptyData()) {
                        return true;
                    }
                    this.sortToTable();
                },
                deep: true,
            },
            tableMetrics: {
                handler() {
                    this.currentStrategy.principal = this.tableMetrics[this.tableMetrics.length - 1].principal ?? 0;
                    this.currentStrategy.deposits = this.tableMetrics[this.tableMetrics.length - 1].deposits ?? 0;
                    this.currentStrategy.interests = this.tableMetrics[this.tableMetrics.length - 1].interests ?? 0;
                    this.currentStrategy.total = this.tableMetrics[this.tableMetrics.length - 1].total ?? 0;
                },
                deep: true,
            }
        },
        mounted() {
            let vm = this;
            vm.realRate = vm.inputs.rate / 100;
            vm.fillData();
        }
    }
</script>
<style scoped>
    .icon {
        font-size: 5rem;
        color: gray;
    }
    .high {
        font-weight: bolder;
        font-size: 1.5rem;
    }
</style>
<style>
    #principal div.el-card__body {
        background: #1C81A2;
        opacity: 0.8;
    }
    #deposits div.el-card__body {
        background: #23A1CD;
        opacity: 0.8;
    }
    #interest div.el-card__body {
        background: #68F1BB;
        opacity: 0.8;
    }
    #total div.el-card__body {
           background: #4CBB9F;
        opacity: 0.8;
    }
    .subtitle-style {
        padding-bottom: 5px;
        color: gray;
    }
    .el-table__row {
        text-align: center;
    }

</style>