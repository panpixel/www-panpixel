<template>
    <div class="main-container">

        <PanpixelHeaderBG />

        <PanpixelMobileMenu />

        <SearchPopup />

        <div class="brook-breadcrumb-area pt--130 pb--170 bg_color--1 breadcrumb-title-bar">
            <div class="container-fluid plr--150 plr_md--50 plr_sm--50">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-left">
                            <h1 class="heading heading-h1 line-height-1-5">Projektowanie<br><span class="theme-color">stron internetowych</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-service-list-area">
            <div class="bk-service-list d-block d-md-flex mb--70 align-items-center wow move-up" v-for="service in data.serviceList" :key="service.i">
              

                <div class="thumb">
                    <img class="w--100" :src="service.image" :alt="service.alt">
                </div>
               

                <div class="content plr--130 plr_md--50 plr_sm--40">
                    <h3 class="heading heading-h3">{{ service.title }}</h3>
                    <div class="bkseparator--15"></div>
                    <p class="bk_pra">{{ service.desc }}</p>
                </div>
            </div>
        </div>

        <CallToAction />

        <FooterTwo />

    </div>
</template>

<script>
    import data from '../data/strony-www.json';
    export default {
        components: {
            PanpixelHeaderBG: () => import('@/components/PanpixelHeaderBG'),
            PanpixelMobileMenu: () => import('@/components/PanpixelMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            CallToAction: () => import('@/components/CallToAction'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                data
            }
        },

        head() {
            return {
                title: 'Produkcja filmowa || filmy promocyjne, spoty filmowe'
            }
        },
    };
</script>

<style lang="scss">
  .bk-service-list .thumb {
	flex-shrink: 0;
	width: 100%;
}

p.bk_pra {
	margin-bottom: 0;
	word-wrap: break-word;
	max-width: 100%;
	font-weight: 400;
	line-height: 1.58;
	font-size: 18px;
	font-family: "Poppins", sans-serif;
}

.heading {
		font-weight: 900;
}
</style>