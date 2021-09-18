<template>
        <el-main>
            <h3 class="subtitle-style" style="padding-bottom: 15px;">Preguntas frecuentes</h3>
            <el-collapse accordion v-model="activeNames">
                <el-collapse-item name="1">
                    <template slot="title" >
                        <span  class="span-title-height el-collapse-title"> ¿Qué es y cómo funciona la frecuencia anual de interés?</span>
                        <i class="header-icon el-icon-information"></i>
                    </template>
                    <div class="alert-info-content">
                        <el-alert :closable="false"
                                  title="Número de veces al año que se agrega el interés al capital (interés compuesto), ejemplos:"
                                  type="info"
                                  show-icon>
                        </el-alert>
                    </div>
                    <div class="table-sizes">
                        <el-table
                                :data="quetion1"
                                header-align="center"
                                border
                                style="width: 100%">
                            <el-table-column
                                    align="center"
                                    prop="type"
                                    label="Tipo de interés"
                                    width="auto">
                            </el-table-column>
                            <el-table-column
                                    align="center"
                                    prop="description"
                                    label="Tiempo"
                                    width="auto">
                            </el-table-column>
                            <el-table-column
                                    align="center"
                                    prop="times"
                                    label="Repeticiones al año"
                                    width="auto">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <el-collapse accordion>
                <el-collapse-item name="2" >
                    <template slot="title" >
                        <span  class="span-title-height el-collapse-title"> ¿Cómo funcionan las aportaciones adicionales?</span> <i class="header-icon el-icon-information"></i>
                    </template>
                    <div class="alert-info-content">
                        <el-alert :closable="false"
                                  title="Son depósitos adicionales a lo que invertiste inicialmente,
                                                    la frecuencia del depósito es la misma que la que definas en
                                                    “Frecuencia anual de interés compuesto”.  Por ejemplo, si tus
                                                    depósitos adicionales son de $100 entonces:"
                                  type="info"
                                  show-icon>
                        </el-alert>
                    </div>
                    <div class="table-sizes">
                        <el-table
                                :data="quetion2"
                                header-align="center"
                                border
                                style="width: 100%;" >
                            <el-table-column
                                    prop="type"
                                    label="Tipo de interés"
                                    align="center"
                                    width="auto">
                            </el-table-column>
                            <el-table-column
                                    prop="description"
                                    label="Tiempo"
                                    align="center"
                                    width="auto">
                            </el-table-column>
                            <el-table-column
                                    prop="total"
                                    label="Total depositado al año"
                                    align="center"
                                    width="auto">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-main>
</template>

<script>
    export default {
        name: "ElFaqSection",
        data() {
            return {
                quetion1: [
                    {
                        type: 'Anual',
                        description: 'Genera interés una vez al año.',
                        times: '1'
                    }, {
                        type: 'Mensual',
                        description: 'Genera interés cada mes.',
                        times: '12 '
                    }, {
                        type: 'Quincenal',
                        description: 'Genera interés cada quince dias.',
                        times: '24',
                    }, {
                        type: 'Semanal',
                        description: 'Genera interés cada 7 dias.',
                        times: '52'

                    }, {
                        type: 'Diario',
                        description: 'Genera interés cada día.',
                        times: '365'
                    }
                ],
                quetion2: [
                    {
                        type: 'Anual',
                        description: 'Genera interés una vez al año.',
                        total: '1 X 100 = $100 anuales'
                    }, {
                        type: 'Mensual',
                        description: 'Genera interés cada mes.',
                        total: '12 X 100 = $1,200 anuales'
                    }, {
                        type: 'Quincenal',
                        description: 'Genera interés cada quince dias.',
                        total: '24 X 100 = $2,400 anuales'
                    }, {
                        type: 'Semanal',
                        description: 'Genera interés cada 7 dias.',
                        total: '52 X 100 = $5,200 anuales'

                    }, {
                        type: 'Diario',
                        description: 'Genera interés cada día.',
                        total: '365 X 100 = $36,500 anuales'
                    }
                ],
                activeNames: ['1']
            }
        }
    }
</script>

<style scoped>
    .alert-info-content > .el-alert--info.is-light {
        width: 65%;
        margin-bottom: 1rem;
    }

    @media (max-width: 700px) {
        .alert-info-content > .el-alert--info.is-light {
            width: 100%;
        }
        .span-title-height {
            line-height: 20px;
            padding: 10px;

        }

    }
</style>
<style>

    .cell {
        font-size: 12px;
    }
    .el-collapse-title {
        font-size: 14px;
        font-weight: bold;
        color: gray;

    }

    .table-sizes {
        width: 65%;
    }

    @media (max-width: 700px) {
        .table-sizes {
            width: 100%;
        }

        .el-collapse-title {
            font-size: 14px;
            font-weight: bold;
            color: gray;

        }
    }
</style>