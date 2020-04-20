<template>
    <div class="control has-icons-left has-icons-right">
        <input @blur="isInputActive = false" @focus="isInputActive = true" class="input is-medium" type="text" v-model="displayValue">
        <span class="icon is-left">
                <i style="font-size: 100%"  class="fa fa-dollar"></i>
        </span>
    </div>
</template>

<script>
    export default {
        name: "ElCurrencyFormat",
        props: ['value'],
        data: function() {
            return {
                isInputActive: false
            }
        },
        computed: {
            displayValue: {
                get: function() {
                    if (this.isInputActive) {
                        // Cursor is inside the input field. unformat display value for user
                        return this.value.toString()
                    } else {
                        console.log('asfasf');
                        // User is not modifying now. Format display value for user interface
                        return this.value.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
                    }
                },
                set: function(modifiedValue) {
                    // Recalculate value after ignoring "$" and "," in user input
                    let newValue = parseFloat(modifiedValue.replace(/[^\d.]/g, ""))
                    // Ensure that it is not NaN
                    if (isNaN(newValue)) {
                        newValue = ''
                    }
                    // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
                    // $emit the event so that parent component gets it
                    this.$emit('input', newValue)
                }
            }
        }
    }
</script>
<style>


</style>