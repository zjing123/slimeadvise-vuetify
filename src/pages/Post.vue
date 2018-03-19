<template>
    <v-app id="inspire">
        <v-container
                grid-list-md
                justify-center
                fluid
                tag="section"
        >
            <v-layout row wrap>
                <v-flex page>
                    <v-layout row wrap>
                        <v-flex d-flex xs12 sm7 md7>
                            <v-carousel>
                                <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
                            </v-carousel>
                        </v-flex>
                        <v-flex d-flex xs12 sm5 md5>
                            <v-card color="white lighten-2" flat>
                                <v-card-text
                                        v-text="lorem">
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex>
                    <div>Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam.

                        Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</div>
                </v-flex>
            </v-layout>
        </v-container>
        <v-footer height="auto">
            <v-card
                    flat
                    tile
                    class="indigo lighten-1 white--text text-xs-center"
            >
                <v-card-text>
                    <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            icon
                            class="mx-3 white--text"
                    >
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </v-card-text>
                <v-card-text class="white--text">
                    &copy;2018 — <strong>Vuetify</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
  import VContent from 'vuetify/src/components/VGrid/VContent'

  export default {
    components: {VContent},
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
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
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
        padding-bottom:0px !important;
    }
    .page {
        max-width:900px;
        margin:auto;
        background: #fff;
        padding-bottom:0px !important;
    }
    .flex .layout {
        margin-bottom: 0px !important;
    }
</style>