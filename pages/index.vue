<template>
    <div class="main-container">

        <HeaderTransparentWithSocial />

        <OffCanvasMobileMenu />

        <HeroAuthenticStudio />

        <AboutAuthenticStudio />

        <VideoService />

        <PortfolioFilmy addClass="pt--130 pb--30 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80" /> 
        <PortfolioFotografia addClass="pt--30 pb--100 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80" /> 


        <ServiceIconBoxWithTitleStleTwo class="pt-0 pb-0" />

        <TestimonialTwo />

        

        <PanpixelFooterTwo />

    </div>
</template>

<script>

    export default {
        components: {
            HeaderTransparentWithSocial: () => import('@/components/HeaderTransparentWithSocial'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroAuthenticStudio: () => import('@/components/HeroAuthenticStudio'),
            AboutAuthenticStudio: () => import('@/components/AboutAuthenticStudio'),
            VideoService: () => import('@/components/VideoService'),
            PortfolioFilmy: () => import('@/components/sections/PortfolioFilmy'),
            PortfolioFotografia: () => import('@/components/sections/PortfolioFotografia'),
            ServiceIconBoxWithTitleStleTwo: () => import('@/components/sections/ServiceIconBoxWithTitleStleTwo'),
            TestimonialTwo: () => import('@/components/sections/TestimonialTwo'),
            
            PanpixelFooterTwo: () => import('@/components/PanpixelFooterTwo'),
        },
         
        mounted () {
            document.body.classList.add('template-color-20', 'template-font-1')
        },

        head() {
            return {
                title: 'filmy reklamowe ⋆ spoty reklamowe ⋆ reklama w internecie ⋆ tworzenie stron www ⋆ fotografia'
            }
        },
    };
</script>