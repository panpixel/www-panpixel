<template>
    <div class="main-container">

        <PanpixelHeaderBG />

        <PanpixelMobileMenu />

        

        <ServiceModernBreadcrumb />

        <ServiceModern />

        <ServiceIconBoxTwo />

        <CallToAction />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            PanpixelHeaderBG: () => import('@/components/PanpixelHeaderBG'),
            PanpixelMobileMenu: () => import('@/components/PanpixelMobileMenu'),
            
            ServiceModernBreadcrumb: () => import('@/components/ServiceModernBreadcrumb'),
            ServiceModern: () => import('@/components/ServiceModern'),
            ServiceIconBoxTwo: () => import('@/components/sections/ServiceIconBoxTwo'),
            CallToAction: () => import('@/components/CallToAction'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        head() {
            return {
                title: 'Wideo content marketing || Panpixel Studio'
            }
        },
    };
</script>