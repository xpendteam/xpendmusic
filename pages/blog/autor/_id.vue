<template>
    <div class="container-2">
        <h1>{{author.name}}</h1>
        <h3>Aquí hay una lista de artículos de {{ author.name }}:</h3>
        <br />
        <div class="grid grid-1 md:grid-4 gap-10">
            <div v-for="article of articles" :key="article.slug">
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    <img class="img-post-blog" :src="srcimg + article.img" />
                </NuxtLink>
                <div>
                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                        <h2>{{ article.title }}</h2>
                        <p>{{ article.description.slice(0, 125) }}...</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            srcimg: "/media/image/blog/",
            site: {
                titulo: "Contacto - Xpend Music",
                img: "https://xpendmusic.com/assets/img/og-image.png",
                descripcion: "Ponte en contacto con nosotros.",
            },
        };
    },
    async asyncData({ $content, params, $axios }) {
        const articles = await $content("blog")
            .where({ aid: params.id })
            .without("body")
            .sortBy("createdAt", "asc")
            .fetch();
        const author = await $axios.$get("/data/authors/"+params.id+".json");
        return {
            articles, author
        };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("es", options);
        },
    },
    head() {
        return {
            title: "Autor: " + this.author.name + " - Xpend Music",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Autor del Blog de Xpend Music",
                },
                { property: "og:title", content: this.author.name },
                {
                    property: "og:image",
                    content: this.author.image,
                },
                {
                    property: "og:description",
                    content: "Autor del Blog de Xpend Music",
                },
                { name: "twitter:card", content: "summary" },
                {
                    name: "twitter:title",
                    content: this.author.name,
                },
                { name: "twitter:site", content: "@xpendmusic" },
                {
                    name: "twitter:description",
                    content: "Autor del Blog de Xpend Music",
                },
                {
                    name: "twitter:image",
                    content: this.author.image,
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
@import "~/assets/styles/pages/blog/index.scss";
</style>