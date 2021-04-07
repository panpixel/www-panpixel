<template>
    <div class="main-container">

        <HeaderBlack />

        <PanpixelMobileMenu />

        <SearchPopup />

        <div class="breadcaump-area pt--260 pt_md--200 pt_sm--150 pb--160 pb_sm--100 bg_color--18 breadcaump-title-bar breadcaump-title-white">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcaump-inner text-center">
                            <div class="breadcrumb-insite">
                                <div class="header mb--40 text-center">
                                    <h3 class="heading heading-h3 font-32 text-white">5 sposobów na film reklamowy.</h3>
                                    <div class="post-meta mt--20 text-white bk-hover align-items-center d-flex justify-content-center">
                                        <div class="post-date"></div>
                                        <div class="post-category">
                                            <n-link to="/"></n-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Start Blog Details -->
        <div class="brook-blog-details-area space_dec--100 pt_md--80 pt_sm--80">
            <div class="container">
                <div class="row mb--85">

                    <div class="col-lg-12">
                        <div class="blog-modern-layout">
                            <div class="thumbnail mb--60">
                                <img class="w-100" src="/img/blog/big-img/modern-layout.jpg" alt="Multipurpose">
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 order-2 order-lg-1 mt_md--40 mt_sm--40">
                        <div class="blog-post-return-button">
                            <button><i class="fa fa-arrow-left"></i> Back</button>
                        </div>
                    </div>
                    <div class="col-lg-8 order-1 order-lg-2">
                        <div class="blog-details-wrapper">
                            <article class="blog-post blog-modern-layout">
                                <!-- Start Content -->
                                <div class="content basic-dark2-line-1px pb--50 mb--35">
                                    <div class="inner">
                                        <h5 class="heading heading-h5 line-height-1-95 wow move-up">
                                            Film reklamowy jest ważnym narzędziem do pozyskiwania nowych klientów. Możesz wywołać emocje, zachęcić do reakcji i nawiązać kontakt z potencjalnym klientem znacznie sprawniej niż w jakikolwiek inny 
                                            dostępny sposób. Produkcja filmów reklamowych do internetu nie jest droga i może pozwolić sobie na to każda firma. 
                                        </h5>
                                        <div class="desc mt--45 mb--50">


                                        <!-- Start Single List -->
                                        <div class="bk-list move-up wow">
                                        <div class="list-header">
                                        <div class="marker"></div>
                                        <div class="title-wrap">
                                        <h5 class="heading heading-h5">Wideo Referencje</h5>
                                       <p class="bk_pra wow move-up">Rodzaj referencji w postaci filmu. Materiał wideo zawiera wywiady z ludźmi, którzy mieli do czynienia z Twoją firmą i są z tej współpracy zadowoleni. 
                                        Opowiadają w jaki sposób rozwiązałeś ich problem.</p>
                                       </div>
                                       </div>
                                       </div>
                                       <!-- End Single List -->                          
                                        
                                        </div>
                                    </div>
                                    <div class="thumbnail wow move-up">
                                        <img class="w-100" src="/img/blog/big-img/post-wideo-referencje.jpg" alt="Wideo referencje">
                                    </div>
                                    <div class="desc mt--45">
                                        <p class="bk_pra wow move-up">
                                        Do właściwego określenia celu naszej produkcji, konieczne jest określenie odbiorców, do których chcemy skierować przekaz. Takie informacje jak wiek, płeć, status ekonomiczno-społeczny, 
                                        poziom wykształcenia, preferencje, przekonania itp pomogą nam w tym.
                                        
                                        </p>
                                    </div>

                                    <!-- Start Blockquote -->
                                    <div class="bk-quote-content">
                                        <blockquote class="brook-quote move-up wow">
                                            <div class="quote-text">Produkcja filmów reklamowych do internetu nie jest droga i może pozwolić sobie na to każda firma.</div>
                                        </blockquote>
                                    </div>
                                    <!-- End Blockquote -->
                               
                                </div>
                                <!-- Start Footer -->
                                <div class="blog-footer wow move-up">
                                    <div class="row">
                                        <div class="col-lg-12 col-12">
                                            <div class="post-tag d-flex align-items-center justify-content-center">
                                                <h6 class="heading heading-h6">TAGS:</h6>
                                                <div class="blog-tag-list pl--5">
                                                    <n-link to="/blog/5-sposobow-na-film-reklamowy">filmy reklamowe</n-link>
                                                    <n-link to="/blog/5-sposobow-na-film-reklamowy">spoty reklamowe</n-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- End Blog Details -->

        <!-- Start Pagination Area -->
        <div class="blog-modern-pagination bg_color--18 ptb--110 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="modern-pagination text-center">
                            <n-link to="/">
                                <p class="bk_pra body-color">Next</p>
                                <div class="title mt--25 mb--40">
                                    <h4 class="heading heading-h4 text-white">4 Best Ways to Keep Inspired</h4>
                                </div>
                                <span class="nav-icon fa fa-arrow-right"></span>
                            </n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Pagination Area -->

       

        <PanpixelFooterTwo />

    </div>
</template>

<script>
    import data from '../../data/blog.json'
    
    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            PanpixelMobileMenu: () => import('@/components/PanpixelMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BlogSidebar: () => import('@/components/BlogSidebar'),
            PanpixelFooterTwo: () => import('@/components/PanpixelFooterTwo'),
        },
        
        data () {
            return {
                data,
            }
        },

        mounted () {
            document.body.classList.add('template-color-20', 'template-font-1')
        },

        head() {
            return {
                title: '5 sposobów na film reklamowy',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content:'Filmy to doskonałe narzędzie marketingowe, które angażują odbiorcę.'
                        }]
            }
        },
    };
</script>
<style lang="scss">
.bk-list .list-header .marker::before {

	color: #CE8F4F;
	
}
.bk-list .list-header p.bk_pra {
margin-bottom: 0;
	word-wrap: break-word;
	max-width: 100%;
	font-weight: 400;
	line-height: 1.58;
	font-size: 18px;
	font-family: "Poppins", sans-serif;
}


</style>