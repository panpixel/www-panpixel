<template>
    <div class="main-container">

        <HeaderBlack />

        <PanpixelMobileMenu />

        <SearchPopup />

    

        <div class="brook-gradation-area ptb--0 ptb-md--80 ptb-sm--60 bg_color--1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bk-title--default text-center">
                            <h5 class="heading heading-h5 theme-color">PROCES REALIZACJI</h5>
                            <div class="bkseparator--30"></div>
                            <h3 class="heading heading-h3">Tak będzie wyglądać realizacja Twojego zlecenia</h3>
                        </div>

                        <PanpixelProcesRealizacji />
                    </div>
                </div>
            </div>
        </div>

    <div class="breadcaump-area pt--130 pb--50 bg_color--1 breadcaump-title-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcaump-inner text-center">
                            <h1 class="heading heading-h1">mniej znaczy więcej, czyli prostota i minimalizm</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1">
            <div class="container-fluid plr--30">
                <div class="row mtn--30">
                    <div class="col-lg-4 col-sm-6 move-up wow mt--30" v-for="portfolio in data.portfolioItems" :key="portfolio.id">
                        <PortfolioItemCenterCaption :portfolio="portfolio" />
                    </div>
                </div>
            </div>
        </div>

        <PanpixelFooterTwo />

    </div>
</template>

<script>
    import data from '../data/portfolio.json';

    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            PanpixelMobileMenu: () => import('@/components/PanpixelMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            PortfolioItemCenterCaption: () => import('@/components/PortfolioItemCenterCaption'),
           PanpixelFooterTwo: () => import('@/components/PanpixelFooterTwo'),
           PanpixelProcesRealizacji: () => import('@/components/PanpixelProcesRealizacji'),
        },
        
        data () {
            return {
                data
            }
        },

        mounted () {
            document.body.classList.add('template-color-20', 'template-font-3')
        },

        head() {
            return {
                title: 'Tworzymy filmy reklamowe ⋆ spoty reklamowe || Realizacje',
                 meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Projektujemy i tworzymy narzędzia marketingowe tj. spot reklamowy, strony www podnoszące skuteczność sprzedaży oraz prestiż przedsiębiorcy.'
                        }]
           
            }
        },
    };
</script>