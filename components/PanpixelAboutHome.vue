<template>
    <div class="brook-about-area bg_color--1 ptb--120 ptb-md--80 ptb-sm--80">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="about-inner authenthick-about pr--30">
                        <h6 class="heading headin-h6 theme-color letter-spacing-3 wow move-up">PRODUKCJA FILMOWA I FOTOGRAFICZNA</h6>
                        <div class="bkseparator--30"></div>
                        <h3 class="heading heading-h3 heading-font line-height-1-5 wow move-up">
                            KOMUNIKUJEMY SIĘ POPRZEZ OBRAZ 
                        </h3>

                        <div class="bkseparator--40"></div>
                        <p class="bk_pra font-18 line-height-1-6 dark-2 heading-font1 wow move-up">
                        Wykorzystujemy takie formy przekazu jak:
                        </p>
                   <div class="bkseparator--10"></div>   
                   <div class="col-lg-12 col-md-6 col-sm-6 col-12">
                        <div class="bk-list--2 move-up wow">
                            <div class="list-header with-ckeck" v-for="list in lists" :key="list.i">
                                <div class="marker"></div>
                                <div class="title-wrap">
                                    <h6 class="heading heading-h3">{{ list.title }}</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                     <div class="bkseparator--10"></div> 
                         <p class="bk_pra font-18 line-height-1-6 dark-2 heading-font1 wow move-up">
                        Za pomocą obrazu i dźwięku wzbogaconego o odpowiedni tekst, skutecznie docieramy do określonej grupy odbiorców. 
                        Projektujemy i tworzymy narzędzia marketingowe, podnoszące sprzedaż i prestiż.
                        </p>
                        
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-thumb text-center text-lg-right mt_md--40 mt_sm--40 floating">
                        <img src="/img/about/panpixel-onas.jpg" alt="Panpixel Wideo Produkcje">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
       
        data () {
            return {
                lists: [
                    {
                        title: 'Filmy reklamowe',
                        marker: 1,
                    },
                    {
                        title: 'Spoty reklamowe ',
                        marker: 2,
                    },
                    {
                        title: 'Fotografia reklamowa',
                        marker: 3,
                    },
                    {
                        title: 'Strony internetowe',
                        marker: 4,
                    }
                
                ]               
            }
        },

      
    };
</script>