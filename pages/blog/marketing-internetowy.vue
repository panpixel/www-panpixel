<template>
    <div class="main-wrapper">

        <HeaderElement />

        <PanpixelMobileMenu />

        <SearchPopup />

        <Breadcrumb :items="items" title="Marketing Internetowy" />

        <div class="bk-blog-grid-area pt--100 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60">
            <div class="container">
                <div class="row mtn--50">
                    <div class="col-lg-4 col-sm-6 move-up wow mt--50" v-for="blog in data.blogs.slice(0, 1)" :key="blog.id">
                        <PanpixelBlogPostThree :blog="blog" addClass="grid-simple" />
                    </div>
                </div>

           
            </div>
        </div>

        <PanpixelFooterTwo />
        
    </div>
</template>

<script>
    import data from '../../data/blog.json';

    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            PanpixelMobileMenu: () => import('@/components/PanpixelMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            PanpixelBlogPostThree: () => import('@/components/PanpixelBlogPostThree'),
            PanpixelFooterTwo: () => import('@/components/PanpixelFooterTwo'),
        },

        data () {
            return {
                data,
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Blog',
                        to: "/blog"
                    },
                    {
                        text: 'Marketing Internetowy',
                        active: true
                    }
                ]
            }
        },

        mounted () {
              document.body.classList.add('template-color-20', 'template-font-3')
        },

        head() {
            return {
                title: 'Marketing Internetowy',               
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Sprawdź, jakie korzyści przynosi firmie marketing internetowy. Sposobów dotarcia do potencjalnego klienta jest wiele. Znamy się na kilku. '
                        }]
            }
        },
    };
</script>