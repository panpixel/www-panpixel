<template>
    <div class="main-container">

        <PanpixelHeader />
        <PanpixelMobileMenu />
        <PanpixelHero />
        <PanpixelAboutHome />
        <PanpixelVideoService />

  <!-- Start Contagion Area -->
        <div class="brook-contagion-area bg_color--1 pt--110 pt_md--80 pt_sm--60 pb--90 pb_md--55 pb_sm--30">
            <div class="container">
                <div class="row align-items-center">
                    
                     <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                     <!-- Section Title Start -->
                            <div class="brook-section-title-corona mb--50">
                                <h2>Zakres działalności</h2>
                                <p>Przedstaw swoją ofertę w sposób, który najsilniej dociera do odbiorcy, wykorzystując przy tym narzędzi, które dla Ciebie przygotujemy. </p>
                            </div>
                            <!-- Section Title End -->
                    </div>
                    
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div class="contagion-content wow move-up animate">
                           
                            <!-- Single Contagion Start -->
                            <div class="single-contagion mb--30">
                                <div class="contagion-image">
                                    <img src="/img/spot-reklamowy-panpixel.studio.png" alt="spot reklamowy">
                                </div>
                                <div class="contagion-content">
                                    <h3 class="title">Spot Reklamowy</h3>
                                    <p>Wykorzystaj moc wideo i internetu. Spot reklamowy to doskonałe narzędzie do budowania wizerunku firmy.</p>
                                </div>
                            </div>
                            <!-- Single Contagion End -->
                            <!-- Single Contagion Start -->
                            <div class="single-contagion mb--30">
                                <div class="contagion-image rotate-center">
                                    <img src="/img/wirtualny-spacer-panpixel.studio.png" alt="wirtualny spacer">
                                </div>
                                <div class="contagion-content">
                                    <h3 class="title">Wirtualny Spacer</h3>
                                    <p>Zdobądź zaufanie klientów i przyciągnij ich uwagę, tworząc wysokiej jakości wirtualny spacer. Zaproś ich do siedziby firmy i oprowadź po jej wnętrzach.</p>
                                </div>
                            </div>
                            <!-- Single Contagion End -->
                            <!-- Single Contagion Start -->
                            <div class="single-contagion mb--30">
                                <div class="contagion-image">
                                    <img src="/img/projektowanie-stron-www-panpixel.studio.png" alt="projektowanie stron www">
                                </div>
                                <div class="contagion-content">
                                    <h3 class="title">Projektowanie Stron WWW</h3>
                                    <p>Dobra strona internetowa jest podstawowym wyznacznikiem wiarygodności firmy. Naszym zadaniem jest projektowanie i tworzenie stron internetowych w sposób atrakcyjny wizualnie i merytoryczny.</p>
                                </div>
                            </div>
                            <!-- Single Contagion End -->
                        </div> 
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="contagion-content wow move-up animate">
                           
                            <!-- Single Contagion Start -->
                            <div class="single-contagion mb--30">
                                <div class="contagion-image">
                                    <img src="/img/fotografia-reklamowa-panpixel.studio.png" alt="fotografia reklamowa">
                                </div>
                                <div class="contagion-content">
                                    <h3 class="title">Fotografia Reklamowa</h3>
                                    <p>Pozwala budować zaufanie w oczach klienta, wykorzystywana w materiałach marketingowych zwiększa prestiż.</p>
                                </div>
                            </div>
                            <!-- Single Contagion End -->
                            <!-- Single Contagion Start -->
                            <div class="single-contagion mb--30">
                                <div class="contagion-image rotate-center">
                                    <img src="/img/filmowanie-dronem-panpixel.studio.png" alt="Filmowanie Dronem">
                                </div>
                                <div class="contagion-content">
                                    <h3 class="title">Filmowanie Dronem</h3>
                                    <p>Fotografujemy i filmujemy z powietrza, aby zrelacjonować ważne wydarzenie, udokumentować inwestycje. Latamy, aby wykonać niezapomniane ujęcia do filmów promocyjnych i reklamowych. </p>
                                </div>
                            </div>
                            <!-- Single Contagion End -->
                            <!-- Single Contagion Start -->
                            <div class="single-contagion mb--30">
                                <div class="contagion-image">
                                    <img src="/img/seo.png" alt="SEO">
                                </div>
                                <div class="contagion-content">
                                    <h3 class="title">Optymalizacja Stron WWW SEO</h3>
                                    <p>Optymalizacja stron www pod kątem wyszukiwarek internetowych, celem zwiększenia widoczności w organicznych wynikach wyszukiwania na określone słowa kluczowe.</p>
                                </div>
                            </div>
                            <!-- Single Contagion End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Contagion Area -->



        <PortfolioFilmy addClass="pt--130 pb--30 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80" /> 
        <PortfolioFotografia addClass="pt--30 pb--100 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80" /> 
        <PortfolioStronyWWW addClass="pt--30 pb--100 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80" /> 
          
          

        <StartUpStratagy />


        <PanpixelFooterTwo />

    </div>
</template>
<script>

    export default {
        components: {
            PanpixelHeader: () => import('@/components/PanpixelHeader'),
            PanpixelMobileMenu: () => import('@/components/PanpixelMobileMenu'),
            PanpixelHero: () => import('@/components/PanpixelHero'),
            PanpixelAboutHome: () => import('@/components/PanpixelAboutHome'),
            PanpixelVideoService: () => import('@/components/PanpixelVideoService'),
            PortfolioFilmy: () => import('@/components/sections/PortfolioFilmy'),
            PortfolioFotografia: () => import('@/components/sections/PortfolioFotografia'),
            PortfolioStronyWWW: () => import('@/components/sections/PortfolioStronyWWW'),
            PanpixelProcesRealizacji: () => import('@/components/PanpixelProcesRealizacji'),
            
            StartUpStratagy: () => import('@/components/sections/StartUpStratagy'),
            PanpixelFooterTwo: () => import('@/components/PanpixelFooterTwo'),
        }, 
           mounted () {
            document.body.classList.add('template-color-20', 'template-font-3')
        },
      
        head() {
            return {
                title: 'Filmy reklamowe ⋆ Wirtualny spacer ⋆ Tworzenie stron WWW',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Za pomocą obrazu i dźwięku wzbogaconego o odpowiedni tekst, skutecznie docieramy do określonej grupy odbiorców. Tworzymy filmy reklamowe'
                        }]
            }
        }         
    };
</script> 