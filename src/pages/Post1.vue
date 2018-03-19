<template>
    <v-app id="inspire">
        <v-container fluid grid-list-sm>
            <v-layout row wrap>
                <v-flex d-flex xs12 order-xs5>
                    <v-layout column>
                        <v-flex d-flex>
                            <v-card color="blue-grey" dark tile flat>
                                <v-card-text
                                        v-text="lorem">
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex d-flex>
                            <v-card color="brown" dark tile flat>
                                <v-card-text
                                        v-text="lorem">
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex d-flex xs12 sm7>
                    <v-layout row wrap>
                        <v-flex d-flex>
                            <v-card color="indigo lighten-2" dark tile flat>
                                <v-card-text
                                        v-text="lorem.slice(0, 70)">
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex d-flex>
                            <v-layout row>
                                <v-flex
                                        d-flex
                                        v-for="n in 2"
                                        :key="n"
                                >
                                    <v-card
                                            color="amber lighten-2"
                                            tile
                                            flat
                                    >
                                        <v-card-text
                                                v-text="lorem.slice(0, 40)">
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex d-flex xs12 sm2 child-flex>
                    <v-card color="orange lighten-2" tile flat>
                        <v-card-text
                                v-text="lorem.slice(0, 90)">
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm3>
                    <v-card color="red lighten-2" dark tile flat>
                        <v-card-text
                                v-text="lorem.slice(0, 100)">
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam.Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.`,
      items: [
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg'
        }
      ],
    }),

    props: {
      source: {
        type: String,
        default: 'http://www.baidu.com'
      },

    }
  }
</script>

<style>
    .container {
        background: #fff;
        width:900px;
    }
</style>