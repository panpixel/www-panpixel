<template>
    <div class="contact-modern pb--120 pb_md--80 pb_sm--80">
        <div class="container">
            <div class="row align-items-end">
                <div class="col-lg-6 col-12 pr--50 ptb-md--80 ptb-sm--80">
                    <div class="contact-modern bg_color--18 space_dec--100 pt--120 pb--120 pl--60 pr--60">
                        <div class="inner">
                            <h2 class="heading heading-h2 text-white">Zaczynamy nowy projekt?</h2>

                            <div class="classic-address text-left mt--60">
                                <h4 class="heading heading-h4 text-white">Visit our studio at</h4>
                                <div class="desc mt--15">
                                    <p class="bk_pra line-height-2-22 text-white">2005 Stokes Isle Apt. 896, <br> Vacaville 10010, USA</p>
                                </div>
                            </div>

                            <div class="classic-address text-left mt--60">
                                <h4 class="heading heading-h4 text-white">Kontakt</h4>
                                <div class="desc mt--15 mb--30">
                                    <p class="bk_pra line-height-2-22 text-white">do@panpixel.com <br> (+48) 790 583 100</p>
                                </div>
                                <div class="social-share social--transparent text-white">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                   
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12 pl--50">
                    <div class="contact-form">
                        <form id="contact-form" name="kontakt" method="POST" data-netlify="true">
                            <div class="row">
                                <div class="col-lg-12">
                                    <input name="con_name" type="text" placeholder="Name *">
                                </div>

                                <div class="col-lg-12 mt--30">
                                    <input name="con_email" type="text" placeholder="Email *">
                                </div>

                                <div class="col-lg-12 mt--30">
                                    <input type="text" name="con_phone" placeholder="Phone number">
                                </div>

                                <div class="col-lg-12 mt--30">
                                    <textarea name="con_message" placeholder="Your message"></textarea>
                                </div>

                                <div class="col-12 mt--30">
                                    <div class="check-box">
                                        <input type="checkbox" name="check" id="check">
                                        <label for="check">Zgoda.</label>
                                    </div>
                                </div>
                                <div data-netlify-recaptcha="true">
                                </div>
                                <div class="col-lg-12 mt--30">
                                    <input type="submit" value="Wyślij">
                                    <p class="form-messege"></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>