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
                                <h3 class="heading heading-h3 line-height-1-42">Producent mebli</h3>
                                <div class="portfolio-content mt--75 mb--75 mt_md--40 mb_md--40 mt_sm--40 mb_sm--40">
                                    <h5 class="heading heading-h6">Fotografia przemysłowa</h5>
                                    <div class="desc mt--20">
                                        <p class="bk_pra">Sesja zdjęciowa dla firmy Ventix, wykonana w siedzibie</p>
                                    </div>
                                </div>
                                <!-- Start Details List -->
                                <div class="portfolio-details-list">

                                    <div class="details-list">
                                        <label>Data</label>
                                        <span>wrzesień 2020</span>
                                    </div>

                                    <div class="details-list">
                                        <label>Klient</label>
                                        <span>Ventix ⋆ instalacje sanitarne</span>
                                    </div>

                                    <div class="details-list">
                                        <label>Kategoria</label>
                                        <span>
                                            <n-link to="">fotografia przemysłowa</n-link>
                                        </span>
                                    </div>

                                    <div class="details-list">
                                        <label>Awards</label>
                                        <span>2015 Cambridge Impressive Design 2016 Best Design of the Year</span>
                                    </div>

                                </div>
                                <!-- End Details List -->

                                <!-- Start Portfolio Share -->
                                <div class="portfolio-share pt--70 pt_md--40 pt_sm--40">
                                    <h6 class="heading heading-h6">SHARE</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8 mt_md--40 mt_sm--40 pl--100 pl_md--15 pl_sm--15 pr_md--15 pr_sm--15">
                        <div class="portfolio-right portfolio-details-gallery text-center text-md-right">
                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image mb--50">
                               <img class="w-100" src="/img/fotografia.produktowa/fotografia-przemyslowa-instalacje.sanitarne.Ventix.jpg" alt="Ventix - instalacje przemysłowe">
                                <div class="cation-text ptb--20 bg_color--5 text-center">
                                    <p class="bk_pra">Ventix - instalacje przemysłowe</p>
                                </div>
                            </div>
                            <!-- End Portfolio Image -->

                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image mb--50">
                                <img class="w-100" src="/img/fotografia.produktowa/002.fotografia-przemyslowa-instalacje.sanitarne.Ventix.jpg" alt="Ventix - instalacje przemysłowe">
                                <div class="cation-text ptb--20 bg_color--5 text-center">
                                    <p class="bk_pra">Ventix - instalacje przemysłowe</p>
                                </div>
                            </div>
                            <!-- End Portfolio Image -->

                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image">
                                <img class="w-100" src="/img/portfolio/big-image/caption-3.jpg" alt="portfolio">
                                <div class="cation-text ptb--20 bg_color--5 text-center">
                                    <p class="bk_pra">Produkcja mebli biurowych</p>
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

        <FooterTwo />

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
            FooterTwo: () => import('@/components/FooterTwo'),
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