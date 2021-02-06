<template>
    <div class="contact-modern pb--120 pb_md--80 pb_sm--80">
        <div class="container">
            <div class="row align-items-end">
                <div class="col-lg-6 col-12 pr--50 ptb-md--80 ptb-sm--80">
                    <div class="contact-modern bg_color--18 space_dec--100 pt--120 pb--120 pl--60 pr--60">
                        <div class="inner">
                            <h2 class="heading heading-h2 text-white">Zaczynamy nowy projekt?</h2>

                            <div class="classic-address text-left mt--60">
                                <h4 class="heading heading-h4 text-white">Odwiedź nas w social media</h4>
                                <div class="desc mt--15">
                                    <p class="bk_pra line-height-2-22 text-white">Facebook <br> Instagram</p>
                                </div>
                            </div>

                            <div class="classic-address text-left mt--60">
                                <h4 class="heading heading-h4 text-white">Kontakt</h4>
                                <div class="desc mt--15 mb--30">
                                    <p class="bk_pra line-height-2-22 text-white">wojtek@panpixel.studio <br>(+48) 790 583 100</p>
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
                        <form class="form-style--1 wow move-up" name="kontakt" action="/" method="POST" netlify netlify-honeypot="bot-field">
                            
                            <input type="hidden" name="form-name" value="kontakt" />
                            <div class="row">

                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <span class="form-icon far fa-user"></span>
                                        <input name="con_name" type="text" placeholder="Kto ? *">
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <span class="form-icon far fa-envelope"></span>
                                        <input name="con_email" type="text" placeholder="adres e-mail *">
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="input-box">
                                        <span class="form-icon fas fa-mobile-alt"></span>
                                        <input name="con_phone" type="text" placeholder="Telefon kontaktowy">
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="input-box">
                                        <textarea name="con_message" placeholder="Wiadomość"></textarea>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="form-action">
                                        <div class="form-description">
                                            Jesteśmy otwarci na każdą współpracę, czekamy <br> na Twoją wiadomość.
                                        </div>
                                        <div class="form-submit">
                                            <input type="submit" value="Wyślij">
                                            <p class="form-messege"></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>