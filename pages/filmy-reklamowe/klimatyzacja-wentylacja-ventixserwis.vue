<template>
    <div class="main-container">

        <HeaderBlack />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <div class="brook-portfolio-details">
            <div class="container">
                <div class="row pt--100 pb--80">

                    <div class="col-lg-4">
                        <div class="portfolio-left bk-portfolio-details">
                            <div class="portfolio-main-info">
                                <h3 class="heading heading-h3 line-height-1-42">Serwis urządzeń sanitarnych</h3>
                                <div class="portfolio-content mt--75 mb--75 mt_md--40 mb_md--40 mt_sm--40 mb_sm--40">
                                    <h5 class="heading heading-h6">Produkcja filmu promocyjnego</h5>
                                    <div class="desc mt--20">
                                        <p class="bk_pra">Firma Ventix sp. z o.o.</p>
                                    </div>
                                </div>
                                <!-- Start Details List -->
                                <div class="portfolio-details-list">

                                    <div class="details-list">
                                        <label>Data</label>
                                        <span>grudzień 2020</span>
                                    </div>

                                    <div class="details-list">
                                        <label>Klient</label>
                                        <span>Ventix Serwis ⋆ klimatyzacja wentylacja</span>
                                    </div>

                                    <div class="details-list">
                                        <label>Kategoria</label>
                                        <span>
                                            <n-link to="">Klimatyzacja Wentylacja</n-link>
                                        </span>
                                    </div>

                                    <div class="details-list">
                                        <label>Notatka</label>
                                        <span></span>
                                    </div>

                                </div>
                                <!-- End Details List -->

                                <!-- Start Portfolio Share -->
                               
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8 mt_md--40 mt_sm--40 pl--100 pl_md--15 pl_sm--15 pr_md--15 pr_sm--15">
                        <div class="portfolio-right portfolio-details-gallery text-center text-md-right">
                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image mb--50">
<script src="https://fast.wistia.com/embed/medias/5r1relvxkh.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_5r1relvxkh videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/5r1relvxkh/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>                                <div class="cation-text ptb--20 bg_color--5 text-center">
                                    <p class="bk_pra">Produkcja kanałów wentylacyjnych</p>
                                </div>
                            </div>
                            <!-- End Portfolio Image -->

                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image mb--50">
                                <img class="w-100" src="/img/portfolio/firmy/spot-reklamowy-ventixserwis03.jpg" alt="Ventix Serwis">
                                <div class="cation-text ptb--20 bg_color--5 text-center">
                                    <p class="bk_pra">Wymiana filtrów  w jednostce</p>
                                </div>
                            </div>
                            <!-- End Portfolio Image -->

                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image">
                                <img class="w-100" src="/img/portfolio/firmy/spot-reklamowy-ventixserwis03.jpg" alt="entix Serwis">
                                <div class="cation-text ptb--20 bg_color--5 text-center">
                                    <p class="bk_pra">Bring natural light into your interiors as a design element</p>
                                </div>
                            </div>
                            <!-- End Portfolio Image -->

                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- Portfolio Nav List -->
                        <div class="portfolio-nav-list pt--50 pb--150 pb_md--80 pb_sm--60 pt_md--5 pt_sm--5">
                            <div class="portfolio-page prev">
                                <div class="inner">
                                    <n-link to="">
                                        <p>Prev</p>
                                        <h3 class="heading heading-h3">Awe-inspiring <br> Projects</h3>
                                    </n-link>
                                </div>
                            </div>
                            <div class="portfolio-page next mt_sm--30">
                                <div class="inner">
                                    <n-link to="">
                                        <p>Next</p>
                                        <h3 class="heading heading-h3">B-sharp High-end <br> Audio</h3>
                                    </n-link>
                                </div>
                            </div>
                        </div>
                        <!-- Portfolio Nav List -->
                    </div>
                </div>
            </div>
        </div>

        <PanpixelFooterTwo />

    </div>
</template>

<script>
    import data from '../../data/portfolio.json';

    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            PortfolioItemCenterCaption: () => import('@/components/PortfolioItemCenterCaption'),
            PanpixelFooterTwo: () => import('@/components/PanpixelFooterTwo'),
        },
        
        data () {
            return {
                data
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Film reklamowy ⋆ produkcja kanałów wentylacyjnych'
            }
        },
    };
</script>