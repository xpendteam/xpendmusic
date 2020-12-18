<template>
    <div class="container-2 pt" style="--pt: 2rem">
        <div
            v-for="article of articles.slice(0, 1)"
            :key="article.slug"
            class="grid md:grid-2 gap-10"
        >
            <div class="center-y">
                <div>
                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                        <h1>{{ article.title }}</h1>
                        <p>{{ article.description.slice(0, 125) }}...</p>
                    </NuxtLink>
                    <p
                        class="blog-act"
                    >{{ $moment(article.createdAt).format('l')}} • {{ $moment(article.createdAt).fromNow()}}</p>
                    <p>
                        <nuxt-link
                            :to="'/blog/autor/' + article.aid"
                            class="autor-blg"
                        >{{ article.author.name }}</nuxt-link>
                    </p>
                </div>
            </div>
            <div class>
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    <img class="img-post-blog" :src="srcimg + article.img" />
                </NuxtLink>
            </div>
        </div>
        <h1>Publicaciones recientes</h1>
        <div class="grid grid-1 md:grid-4 gap-10">
            <div v-for="article of articles.slice(1)" :key="article.slug">
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    <img class="img-post-blog" :src="srcimg + article.img" />
                </NuxtLink>
                <div>
                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                        <h2>{{ article.title }}</h2>
                    </NuxtLink>
                    <p>
                        <nuxt-link
                            :to="'/blog/autor/' + article.aid "
                            class="autor-blg"
                            v-text="getAuthorName(article.aid)"
                        ></nuxt-link>
                    </p>
                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                        <p>{{ article.description.slice(0, 125) }}...</p>
                    </NuxtLink>
                    <p
                        class="blog-act"
                    >{{ $moment(article.createdAt).format('l')}} • {{ $moment(article.createdAt).fromNow()}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            srcimg: "/media/image/blog/",
            site: {
                titulo: "Blog - Xpend Music",
                img: "https://xpendmusic.com/assets/img/og-image.png",
                descripcion:
                    "Un lugar donde podrás encontrar un gran variedad de articulos relacionados con la música.",
            },
        };
    },
    async asyncData({ $content, params, $axios }) {
        var articles = await $content("blog", params.slug)
            .only([
                "title",
                "description",
                "img",
                "slug",
                "author",
                "createdAt",
                "aid",
            ])
            .sortBy("createdAt", "asc")
            .fetch();
        articles = articles.slice().reverse();
        const authors = await $axios.$get("/data/authors/index.json");
        return {
            articles,
            authors,
        };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("es", options);
        },
        getAuthorName(id) {
            var data = "";
            this.authors.forEach((author) => {
                if (author.id === id) {
                    data = author.name
                }
            });

            return data
        },
    },
    head() {
        return {
            title: this.site.titulo,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.site.descripcion,
                },
                { property: "og:title", content: this.site.titulo },
                { property: "og:image", content: this.site.img },
                { property: "og:description", content: this.site.descripcion },
                { name: "twitter:card", content: "summary" },
                { name: "twitter:title", content: this.site.titulo },
                { name: "twitter:site", content: "@xpendmusic" },
                { name: "twitter:description", content: this.site.descripcion },
                { name: "twitter:image", content: this.site.img },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
@import "~/assets/styles/pages/blog/index.scss";
</style>