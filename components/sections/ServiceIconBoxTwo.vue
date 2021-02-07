<template>
    <div class="brook-icon-boxes-area bg_color--1 pb_lg--50 ptb--70">
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-lg-7 pl--250 plr_lg--30 plr_md--50 plr_sm--15">
                    <div class="row mtn--50">
                        <div class="col-sm-6 wow move-up mt--50" v-for="service in data.services.slice(0, 4)" :key="service.id">
                            <div class="icon-box text-left no-border">
                                <div class="inner">
                                    <div class="icon">
                                        <i :class="service.icon"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="heading heading-h5">{{ service.heading }}</h5>
                                        <p class="bk_pra">{{ service.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 mt_md--40 mt_sm--40">
                    <div class="thumb">
                        <script src="https://fast.wistia.com/embed/medias/zaqe012nvx.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_zaqe012nvx videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/zaqe012nvx/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';

    export default {
        data () {
            return {
                data
            }
        }
    };
</script>

<style lang="scss">
    .mtn--50 {
        margin-top: -50px;
    }
</style>