<template>
    <nav class="page_nav">
        <ul class="mainmenu">
            <li class="lavel-1">
                <n-link to="/">
                    <span>Home</span>
                </n-link>
               
            </li>

            <li class="lavel-1">
                <n-link to="/o-nas">
                    <span>O-nas</span>
                </n-link>
               
            </li>

            <li class="lavel-1">
                <n-link to="/realizacje">
                    <span>Realizacje</span>
                </n-link>
                
            </li>

            <li class="lavel-1 with--drop slide--megamenu">
                <n-link to="/filmowanie">
                    <span>Filmowanie</span>
                </n-link>
         <ul class="mega__width--fullscreen">
                    <div class="container">
                        <div class="mega__list">
                                               
                      
 

                    <li class="lavel-2">
                      <n-link to="/wideomarketing"><span>Wideo Marketing</span></n-link>
                    </li>
                    <li class="lavel-2">
                      <n-link to="/film-promocyjny"><span>Film promocyjny</span></n-link>
                    </li>

                </div></div>
                    
          </ul>

            </li>
            <li class="lavel-1">
                <n-link to="/fotografia">
                    <span>Fotografia</span>
                </n-link>
         
            </li>
              <li class="lavel-1">
                <n-link to="/projektowanie-stron-internetowych">
                    <span>Strony-WWW</span>
                </n-link>
         
            </li>
            <li class="lavel-1">
                <n-link to="/blog/wideomarketing">
                    <span>Blog</span>
                </n-link>
               
            </li>

             <li class="lavel-1">                             
                                                           
                <n-link to="/kontakt">
                 <span>Kontakt</span>
                </n-link>
               
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
   
    .mainmenu-wrapper .page_nav ul.mainmenu li.lavel-1 {
	
	position: relative;
}
.mega__width--fullscreen {
	
	padding: 0px 0;
	
	background-color: #fff;
	
}
.mega__width--fullscreen .mega__list li a span:hover {
	color: #000;
}
.mega__width--fullscreen .mega__list li a span {

	color: #000;

}
</style>