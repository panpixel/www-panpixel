<template>
    <div class="brook-hero-number-slider-area position-relative">
        <div class="brook-element-carousel number-dot">
            <swiper :options="swiperOption">
                <div class="swiper-slide" v-for="slide in sliders" :key="slide.id">
                    <div class="hero-item bg-image" :style="{backgroundImage:`url(${slide.bgImage})`}">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="hero-content-2 center">
                                        <h6>{{ slide.subHeading }}</h6>
                                        <h3>{{ slide.heading }}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper>
            <!-- Add Pagination 
            <div class="swiper-pagination"></div> 
            -->
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    spaceBetween: 20,
                    autoplay: {
                        delay: 3000,
                    },
                    loop: true,
                    speed: 500,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        },
                    },
                },

                sliders: [
                    {
                        id: 1,
                        heading: "FILMY, SPOTY REKLAMOWE",
                        subHeading: "filmy reklamowe, fotografia, strony internetowe",
                        btnUrl: "/",
                        bgImage: "/img/slider/film-reklamowy-dla-biznesu.jpg"
                    },

                    {
                        id: 2,
                        heading: "WIDEO MARKETING",
                        subHeading: "filmy reklamowe, fotografia, strony internetowe",
                        btnUrl: "/",
                        bgImage: "/img/slider/spot-reklamowy-dla-biznesu.jpg"
                    }
           
                ]
            }
        }
    };
</script>