<template>
    <article class="container-2 pt" style="--pt: 2rem">
        <div class="grid md:grid-2 gap-10">
            <div class="center-y">
                <div>
                    <h1>{{ article.title }}</h1>
                    <p
                        class="blog-act"
                    >{{ $moment(article.createdAt).format('l')}} • {{ $moment(article.createdAt).fromNow()}}</p>
                    <p>
                        <nuxt-link
                            :to="'/blog/autor/' + article.aid "
                            class="autor-blg"
                        >{{ author.name }}</nuxt-link>
                    </p>
                </div>
            </div>
            <div class>
                <img class="img-post-blog" :src="srcimg + article.img" />
            </div>
        </div>
        <p
            class="blog-act"
        >Artículo actualizado por última vez el {{ formatDate(article.updatedAt) }} • {{ $moment(article.updatedAt).fromNow()}}</p>
        <ul>
            <li v-for="link of article.toc" :key="link.id">
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
        </ul>

        <nuxt-content :document="article" />

        <prev-next :prev="prev" :next="next" />
    </article>
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
        const article = await $content("blog", params.slug).fetch();

        const [prev, next] = await $content("blog")
            .only(["title", "slug"])
            .sortBy("createdAt", "asc")
            .surround(params.slug)
            .fetch();

        const author = await $axios.$get("/data/authors/"+article.aid+".json");

        return {
            article,
            prev,
            next,
            author
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
            title: this.article.title + " - Xpend Music",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.article.description,
                },
                { property: "og:title", content: this.article.title },
                { property: "og:image", content: this.article.img },
                {
                    property: "og:description",
                    content: this.article.description,
                },
                { name: "twitter:card", content: "summary" },
                { name: "twitter:title", content: this.article.title },
                { name: "twitter:site", content: "@xpendmusic" },
                {
                    name: "twitter:description",
                    content: this.article.description,
                },
                { name: "twitter:image", content: this.article.img },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
@import "~/assets/styles/pages/blog/index.scss";
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
blockquote {
    border-left: 0.5rem solid #7d62ff;
    margin: 1.3rem 10px;
    padding: 0.3rem 10px;
}
.icon.icon-link {
    background-image: url("https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_1280.png");
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
}
.blog-img {
    width: 100%;
    border-radius: 15px;
}
h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
</style>