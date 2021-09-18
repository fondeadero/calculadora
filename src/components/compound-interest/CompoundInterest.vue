<template>
  <el-container style="border: 1px solid #eee">
    <el-main>
      <el-row>
        <el-col>
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
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row :gutter="12">
        <div class="subtitle-style">
          <h3>Resultados</h3>
        </div>
        <el-col :span="6" :xs="24" style="text-align: center; margin-bottom: 10px;">
          <el-result-card id="principal" title="Depósito inicial" icon-shape="el-icon-wallet" :value="currentStrategy.principal"></el-result-card>
        </el-col>
        <el-col :span="6" :xs="24" style="text-align: center; margin-bottom: 10px;">
          <el-result-card id="deposits"  title="Depósitos adicionales acumulados" icon-shape="el-icon-coin" :value="currentStrategy.deposits"></el-result-card>
        </el-col>
        <el-col :span="6" :xs="24" style="text-align: center; margin-bottom: 10px;">
          <el-result-card id="interest" title="Interés acumulado" icon-shape="el-icon-data-line" :value="currentStrategy.interests"></el-result-card>
        </el-col>
        <el-col :span="6" :xs="24" style="text-align: center; margin-bottom: 10px;">
          <el-result-card id="total" title="Total" icon-shape="el-icon-money" :value="currentStrategy.total"></el-result-card>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row style="padding-bottom: 0; margin-bottom: 0">
        <el-col>
          <div class="subtitle-style">
            <h3>Resultados por año</h3>
          </div>
          <el-table style="padding: 15px;" :data="tableMetrics" height="40rem" v-loading="loading">
            <el-table-column style="background-color: #00aced" prop="years" label="Años"></el-table-column>
            <el-table-column prop="principal" label="Depósito inicial" class="hidden-sm-only"></el-table-column>
            <el-table-column prop="deposits" label="Depósitos adicionales acumulados"></el-table-column>
            <el-table-column prop="interests" label="Interés acumulado"></el-table-column>
            <el-table-column prop="total" label="Total"></el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-faq-section></el-faq-section>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>

import ChartSetUp from "./ChartSetUp";
import ElFaqSection from "./ElFaqSection";
import ElResultCard from "../../views/layouts/ElResulCard";

export default {
  name: 'CompoundCharts',
  components: {
    ElResultCard,
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
            backgroundColor: '#4CBB9F',
            data: handleData['interests']
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
    calculateTotalCompoundInterest(time = 0, defaultReturn = 0) {
      let vm = this;
      let compound = (vm.inputs.principal * (Math.pow(1 + vm.realRate / vm.inputs.compound, vm.inputs.compound * time))).toFixed(2);
      if (isNaN(Number(compound))) {
        return defaultReturn;
      }
      return compound;
    },
    calculateFutureValue(time = 0, defaultReturn = 0) {
      let vm = this;
      let future = (vm.inputs.pmt * (((Math.pow(1 + vm.realRate / vm.inputs.compound, vm.inputs.compound * time)) - 1) / (vm.realRate / vm.inputs.compound))).toFixed(2);
      if (isNaN(Number(future))) {
        return defaultReturn;
      }
      return future;
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
      if (!rate) {
        rate = 0;
      }
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
  padding-bottom: 50px;
  color: gray;
}

.el-table__row {
  text-align: center;
}

.cell {
  text-align: center;
}

</style>