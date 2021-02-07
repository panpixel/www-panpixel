<template>
    <div class="main-container">

        <PanpixelHeader />
        <PanpixelMobileMenu />
        <PanpixelHero />
        <PanpixelAboutHome />
        <PanpixelVideoService />
        <PortfolioFilmy addClass="pt--130 pb--30 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80" /> 
        <PortfolioFotografia addClass="pt--30 pb--100 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80" /> 
        <PortfolioStronyWWW addClass="pt--30 pb--100 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80" /> 
          <div class="brook-gradation-area ptb--0 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line">
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
        <PanpixelTestimonial />
        <PanpixelFooterTwo />

    </div>
</template>

<script>

    export default {
        components: {
            PanpixelHeader: () => import('@/components/PanpixelHeader'),
            PanpixelMobileMenu: () => import('@/components/PanpixelMobileMenu'),
            PanpixelHero: () => import('@/components/PanpixelHero'),
            PanpixelAboutHome: () => import('@/components/PanpixelAboutHome'),
            PanpixelVideoService: () => import('@/components/PanpixelVideoService'),
            PortfolioFilmy: () => import('@/components/sections/PortfolioFilmy'),
            PortfolioFotografia: () => import('@/components/sections/PortfolioFotografia'),
            PortfolioStronyWWW: () => import('@/components/sections/PortfolioStronyWWW'),
            PanpixelProcesRealizacji: () => import('@/components/PanpixelProcesRealizacji'),
            PanpixelTestimonial: () => import('@/components/sections/PanpixelTestimonial'),
            
            PanpixelFooterTwo: () => import('@/components/PanpixelFooterTwo'),
        },
         
        mounted () {
            document.body.classList.add('template-color-20', 'template-font-1')
        },

        head() {
            return {
                title: 'filmy reklamowe ⋆ fotografia reklamowa ⋆ tworzenie stron www'
            }
        },
    };
</script>