<template>
    <div class="main-container">

        <PanpixelHeaderBG />
        <PanpixelMobileMenu />
        <PanpixelBanerOnas />
        <PanpixelWhatWeDo />
        <PanpixelOnasSkill />
        <PanpixelFlexibleSlider />

        <div class="brook-gradation-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line">
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

        <TestimonialTwo />

        <BrandLogoCarousel />

        <CallToAction />

        <PanpixelFooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            PanpixelHeaderBG: () => import('@/components/PanpixelHeaderBG'),
            PanpixelMobileMenu: () => import('@/components/PanpixelMobileMenu'),
            PanpixelBanerOnas : () => import('@/components/PanpixelBanerOnas'),
            PanpixelWhatWeDo: () => import('@/components/PanpixelWhatWeDo'),
            PanpixelOnasSkill: () => import('@/components/PanpixelOnasSkill'),
            PanpixelFlexibleSlider: () => import('@/components/PanpixelFlexibleSlider'),
            PanpixelProcesRealizacji: () => import('@/components/PanpixelProcesRealizacji'),
            TestimonialTwo: () => import('@/components/sections/TestimonialTwo'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            CallToAction: () => import('@/components/CallToAction'),
            PanpixelFooterTwo: () => import('@/components/PanpixelFooterTwo'),
        },

        mounted () {
            document.body.classList.add('template-color-20', 'template-font-3')
        },

        head() {
            return {
                title: 'Filmowanie ⋆ spot reklamowy, film promocyjny, videomarketing || Jaworzno, Katowice'
            }
        },
    };
</script>