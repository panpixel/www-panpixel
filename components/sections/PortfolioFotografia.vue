<template>
    <div class="bk-portfolio-with-caption-area" :class="addClass">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-section-title text-center mb--60">
                        <h6 class="heading headin-h3 theme-color letter-spacing-3 font-blod">FOTOGRAFIA REKLAMOWA, STUDIUM PRZYPADKÓW</h6>
                        <div class="bkseparator--40"></div>
                        <h2 class="heading heading-h2 heading-font">Fotografia produktowa</h2>
                    </div>
                </div>
            </div>
            <div class="row mtn--30">
                <div class="col-lg-4 col-sm-6 mt--30" v-for="portfolio in data.portfolioItems.slice(0,3)" :key="portfolio.id">
                    <PanpixelStudioFotoCenterCaption :portfolio="portfolio" />
                </div>
            </div>
        </div>

        <!-- Separator -->
        <div class="vc_row-separator square bottom" v-show="seperator">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="90px" fill="#0038E3" height="90px" viewBox="0 0 100 100"
                preserveAspectRatio="none">
                <rect x="33.3333%" y="0" width="66.6667" height="66.6667"></rect>
                <rect x="0" y="66.6667%" width="33.3333%" height="33.3333%"></rect>
            </svg>
        </div>

    </div>
</template>

<script>
    import data from '../../data/portfoliofoto.json';

    export default {
        props: ["addClass", "seperator"],

        components: {
            PanpixelStudioFotoCenterCaption: () => import('@/components/PanpixelStudioFotoCenterCaption'),
        },

        data () {
            return {
                data
            }
        }
    };
</script>