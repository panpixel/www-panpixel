<template>
    <div class="main-container">

        <HeaderElement />

        <PanpixelMobileMenu />

        <SearchPopup />

        <ContactUsBreadcrumb />

        <ContactModern />

        <PanpixelFooterTwo />

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
            PanpixelFooterTwo: () => import('@/components/PanpixelFooterTwo'),
        },

       head: {
    title: 'Kontakt | skuteczne filmy reklamowe',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Skontakuj się z nami'
      }
    ],
  },
    };
</script>