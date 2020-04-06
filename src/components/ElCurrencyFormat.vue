<template>
    <div>
        <el-input id="main-input" v-model="displayValue" @blur="handleInputState" @focus="handleInputState" controls-position="right">
            <template slot="prepend"><icon class="fa fa-dollar"></icon></template>
        </el-input>
    </div>
</template>

<script>
    const masks = {
        currency: {
            mask (value) {
                return value.toLocaleString()
            },
            unmask (value) {
                value = parseFloat(value.replace(/[^\d.]/g, ""))
                return isNaN(value)
                    ? 0
                    : value
            },
        },
    }


    export default {
        name: "ElCurrencyFormat",
        props: {
            value: null,
            maskType: String,
        },
        data: function() {
            return {
                inputFocused: false
            }
        },
        methods: {
            handleInputState (event) {
                this.inputFocused = event.type === 'focus'
            },
            unmask (value) {
                return masks[this.maskType].unmask(value)
            },
            mask (value) {
                return masks[this.maskType].mask(value)
            },
        },
        computed: {
            displayValue: {
                get: function() {
                    if (this.inputFocused) {
                        return this.value.toString()
                    } else {
                        return this.mask(this.value)
                    }
                },
                set: function(modifiedValue) {
                    this.$emit('input', this.unmask(modifiedValue))
                }
            }
        }
    }
</script>

<style>
    .el-input div input {
        width: 134px;
        min-width: 134px;
    }

    #main-input {
        width: 134px;
        min-width: 134px;
    }
</style>