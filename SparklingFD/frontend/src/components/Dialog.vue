<template>

    <v-dialog v-model="dialog1" max-width="500px">
        <v-card>
            <v-card-title
                    class="korean headline grey lighten-2"
                    primary-title
            >
                분위기
            </v-card-title>
            <v-card-text>
                <v-row wrap style="height: 120px" align="center" justify="center">
                    <vue-slider
                            ref="slider"
                            v-model="value"
                            width="90%"
                            :adsorb="true"
                            :interval="1"
                            :data="range"
                            :marks="true"
                            :process-dragable="true"
                            :height="5"
                            :tooltip="'always'"
                    ></vue-slider>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="red"
                        text
                        @click="cancel"
                >
                    Cancel
                </v-btn>

                <v-btn
                        color="primary"
                        text
                        @click="confirm"
                >
                    Confirm
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import VueSlider from 'vue-slider-component';

    export default {
        name: "Dialog",
        components: { VueSlider },
        data () {
            return {
                value: [0,5],
                range: [0,1,2,3,4,5]
            }
        }

    }
</script>

<style scoped>

    @import '~vue-slider-component/theme/default.css';

</style>