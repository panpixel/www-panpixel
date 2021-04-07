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
                                <h3 class="heading heading-h3 line-height-1-42">Producent kratek ochronnych</h3>
                                <div class="portfolio-content mt--75 mb--75 mt_md--40 mb_md--40 mt_sm--40 mb_sm--40">
                                    <h5 class="heading heading-h6">Tworzenie stron WWW</h5>
                                    <div class="desc mt--20">
                                        <p class="bk_pra">Strona dla producenta kratek ochronnych.</p>
                                    </div>
                                </div>
                                <!-- Start Details List -->
                                <div class="portfolio-details-list">

                                    <div class="details-list">
                                        <label>Data</label>
                                        <span>maj 2020</span>
                                    </div>

                                    <div class="details-list">
                                        <label>Klient</label>
                                        <span>Krakiochronne ⋆ producent kratek ochronnych</span>
                                    </div>

                                    <div class="details-list">
                                        <label>Kategoria</label>
                                        <span>
                                            <n-link to="">strony www</n-link>
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
                                <img class="w-100" src="/img/portfolio/firmy/strony-www-kratkiochronne03.jpg" alt="kratkiochronne.pl">

<div class="cation-text ptb--20 bg_color--5 text-center">
                                    
                                    <p class="bk_pra">Kratkiochronne.pl</p>
                                </div>
                            </div>
                            <!-- End Portfolio Image -->

                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image mb--50">
                                <img class="w-100" src="/img/portfolio/firmy/strony-www-kratkiochronne02.jpg" alt="kratkiochronne.pl">
                                <div class="cation-text ptb--20 bg_color--5 text-center">
                                    <p class="bk_pra">Strona produktowa z kratkami ochronnymi</p>
                                </div>
                            </div>
                            <!-- End Portfolio Image -->

                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image">
                                <img class="w-100" src="/img/portfolio/firmy/strony-www-kratkiochronne01.jpg" alt="kratkiochronne.pl">
                                <div class="cation-text ptb--20 bg_color--5 text-center">
                                    <p class="bk_pra">Strona produktowa z kratkami ochronnymi</p>
                                </div>
                            </div>
                            <!-- End Portfolio Image -->

                        </div>
                    </div>
                </div>
            </div>

        
        </div>

        < PanpixelFooterTwo />

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