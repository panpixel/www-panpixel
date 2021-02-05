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
                    <span>O nas</span>
                </n-link>
               
            </li>

            <li class="lavel-1">
                <n-link to="/realizacje">
                    <span>Realizacje</span>
                </n-link>
                
            </li>

            <li class="lavel-1">
                <n-link to="/filmowanie">
                    <span>Filmowanie</span>
                </n-link>
         
            </li>
            <li class="lavel-1">
                <n-link to="/fotografia">
                    <span>Fotografia</span>
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
    .mega__list {
        display: flex;
        li {
            flex-basis: 25%;
        }
    }
</style>