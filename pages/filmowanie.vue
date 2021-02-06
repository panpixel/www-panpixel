<template>
    <div class="main-container">

        <HeaderAbout />

        <PanpixelMobileMenu />

        <SearchPopup />

        <div class="brook-breadcrumb-area pt--130 pb--170 bg_color--1 breadcrumb-title-bar">
            <div class="container-fluid plr--150 plr_md--50 plr_sm--50">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-left">
                            <h1 class="heading heading-h1 line-height-1-5"><span class="theme-color">Tworzymy</span><br>skuteczne filmy reklamowe.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-service-list-area">
            <div class="bk-service-list d-block d-md-flex mb--70 align-items-center wow move-up" v-for="service in data.serviceList" :key="service.i">
                <div class="thumb">
                    

                    <script :src="service.video" async></script>
                    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                  
                    <div :class="service.tail" style="height: 100%; position: relative; width: 100%;">
                    <div class="wistia_swatch" style="height: 100%; left: 0; opacity: 0; overflow: hidden; position: absolute; top: 0; transition: opacity 200ms; width: 100%;">

                    </div>
                    </div>
                

                </div>
                <div class="content plr--130 plr_md--50 plr_sm--40">
                    <h3 class="heading heading-h3">{{ service.title }}</h3>
                    <div class="bkseparator--15"></div>
                    <p class="bk_pra" v-html="service.desc"></p>
                </div>
            </div>
        </div>

        <CallToAction />

        <FooterTwo />

    </div>
</template>

<script>
    import data from '../data/service.json';
    export default {
        components: {
            HeaderAbout: () => import('@/components/HeaderAbout'),
            PanpixelMobileMenu: () => import('@/components/PanpixelMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            CallToAction: () => import('@/components/CallToAction'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

mounted () {
            document.body.classList.add('template-color-20', 'template-font-3')
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