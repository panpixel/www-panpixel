<template>
    <div class="main-container">

        <HeaderElement />

        <PanpixelMobileMenu />

        <SearchPopup />

        <ContactUsBreadcrumb />

        <ContactModern />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            PanpixelMobileMenu: () => import('@/components/PanpixelMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            ContactUsBreadcrumb: () => import('@/components/ContactUsBreadcrumb'),
            ContactModern: () => import('@/components/sections/ContactModern'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        head() {
            return {
                title: 'Kontakt || Skuteczne filmy reklamowe'
            }
        },
    };
</script>