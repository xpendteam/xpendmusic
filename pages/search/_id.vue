<template>
    <div class="container">
        <br />
        <div
            class="x-center"
            v-if="releases.length === 0 && sessions.length === 0 && artists.length === 0"
        >
            <h3
                class="x-center xf-gris search-title"
            >No se encontraron resultados de busqueda para: '{{$route.params.id}}'</h3>
        </div>
        <div v-else>
            <h3
                class="x-center xf-gris search-title"
            >Resultados de busqueda para: '{{$route.params.id}}'</h3>
        </div>

        <div v-if="releases.length > 0" class="x-center">
            <h1 class="search-title text-center">'{{$route.params.id}}' en Musica:</h1>
            <FourReleases :releases="releases" :grid="'grid grid-2 md:grid-3 lg:grid-6 gap-8'"></FourReleases>
        </div>

        <div v-if="sessions.length > 0" class="x-center">

            <h1 class="search-title text-center">'{{$route.params.id}}' en Sessions:</h1>

            <div class="grid grid-2 md:grid-3 lg:grid-6 gap-8">
                <div v-for="(session, index) of sessions" :key="index">
                    <nuxt-link :to="'/sessions/#'+session.item.slug">
                        <lazy-component>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 24 24"
                                class="release-skeleton"
                                :style="'background-image: url('+session.item.pictures.extra_large+'); animation: none;'"
                            >
                                <path d="M24 0h-24v24h24v-24z" />
                            </svg>
                        </lazy-component>
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div v-if="artists.length > 0" class="x-center">
            <h1 class="search-title text-center">'{{$route.params.id}}' en Artistas</h1>
            <div class="grid grid-1 md:grid-2 lg:grid-6 gap-10">
                <div v-for="(artista, index) of artists" :key="index">
                    <nuxt-link :to="artista.item.key">
                        <img class="artist-img" v-bind:src="artista.item.image" />
                    </nuxt-link>
                    <p class="text-center">
                        <nuxt-link :to="artista.item.key" class="artist-name">{{artista.item.name}}</nuxt-link>
                    </p>
                </div>
            </div>
        </div>

        <div v-if="articles.length > 0">
            <h1 class="search-title text-center">'{{$route.params.id}}' en Articulos</h1>
            <div class="grid grid-1 md:grid-4 gap-10">
                <div v-for="(article, index) of articles" :key="index">
                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.item.slug } }">
                        <img class="img-post-blog" :src="srcimg + article.item.img" />
                    </NuxtLink>
                    <div>
                        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.item.slug } }">
                            <h2>{{ article.item.title }}</h2>
                        </NuxtLink>
                        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.item.slug } }">
                            <p>{{ article.item.description.slice(0, 125) }}...</p>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "Search",
    created: function () {
        this.getData();
    },
    data() {
        return {
            srcimg: "/media/image/blog/",
            releases: [],
            sessions: [],
            artists: [],
            articles: [],
            search: "!" + this.$route.params.id,
            site: {
                titulo: "Resultados de busqueda",
                img: "https://xpendmusic.com/assets/img/og-image.png",
                descripcion: "Resultados de busqueda",
            },
        };
    },
    async asyncData({ $content }) {
        const dataarticles = await $content("blog")
            .only(["title", "img", "description", "slug", "author"])
            .fetch();

        return { dataarticles };
    },
    mounted() {
        this.searchArticles();
    },
    methods: {
        getData: function () {
            axios
                .get("https://cdn.xpendmusic.com/api/releases/")
                .then((response) => {
                    this.searchReleases(response.data);
                });
            axios
                .get(
                    "https://api.mixcloud.com/xpendmusic/playlists/xpend-sessions/cloudcasts/"
                )
                .then((response) => {
                    this.searchSessions(response.data.data);
                });
            axios
                .get("https://cdn.xpendmusic.com/api/artists/")
                .then((response) => {
                    this.searchArtists(response.data);
                });
        },
        searchReleases: function (data) {
            const releases = data;
            const options = {
                keys: ["name", "year", "artists.name"],
            };
            const fuse = new Fuse(releases, options);
            var releaseData = [];
            var searchReleases = fuse.search(this.search);
            searchReleases.forEach((release) => {
                releaseData.push(release.item);
            });
            this.releases = releaseData;
        },
        searchSessions: function (data) {
            const sessions = data;
            const options = {
                keys: ["name", "tags.name"],
            };
            const fuse = new Fuse(sessions, options);
            this.sessions = fuse.search(this.search);
        },
        searchArtists: function (data) {
            const artists = data;
            const options = {
                keys: ["name"],
            };
            const fuse = new Fuse(artists, options);
            this.artists = fuse.search(this.search);
        },
        searchArticles: function () {
            const artists = this.dataarticles;
            const options = {
                keys: ["title", "author.name"],
            };
            const fuse = new Fuse(artists, options);
            this.articles = fuse.search(this.search);
        },
    },
    head() {
        return {
            title: this.$route.params.id + " - Xpend Music",
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
@import "~/assets/styles/pages/artistas/index.scss";

@mixin truncate($font-size, $line-height, $lines-to-show) {
    display: block; // Fallback for non-webkit
    display: -webkit-box;
    max-width: 400px;
    height: $font-size * $line-height * $lines-to-show; // Fallback for non-webkit
    font-size: $font-size;
    line-height: $line-height;
    -webkit-line-clamp: $lines-to-show;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Musica */
.d-release {
    font-size: 0.8rem;
    letter-spacing: 5px;
    color: rgba(255, 255, 255, 0.5);
}
.a-release {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
}
.t-release {
    font-size: 1.6rem;
}
.cover-container {
    display: inline-block !important;
}
.cover1 {
    float: left;
    position: relative;
    width: 50% !important;
}
.cover2 {
    text-align: initial !important;
    position: relative;
    float: left;
    width: 50% !important;
    height: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
}
.r-btn i {
    letter-spacing: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.5);
}
.r-btn i:hover {
    color: #fff;
}
.afont {
    font-size: 1.2rem !important;
}
.search-title {
    padding-top: 20px;
}
@media only screen and (max-width: 768px) {
    .search-title {
        padding-top: 20px;
        font-size: 1.3rem;
    }
    .t-release {
        font-size: 1.1rem;
    }
    .a-release {
        font-size: 0.8rem;
    }
    .d-release {
        font-size: 0.7rem;
    }
    .cover2 {
        margin-top: 20px;
    }
}
.main-post {
    margin-bottom: 30px;
}
.main-post__title {
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 8px;
}
.main-post__description {
    color: rgb(150, 150, 150);
    font-size: 0.8em;
    line-height: 1.1;
}
.main-post__date {
    font-size: 0.7rem;
}
.main-post__img {
    border-radius: 5px;
    transition: opacity 150ms ease-in-out;
}
.main-post__img:hover {
    opacity: 70%;
}
.autor-blg {
    padding: 8px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    background: rgba(60, 60, 60, 0.398);
    border-radius: 50px;
}
.img-post-blog {
    border-radius: 4px;
}
</style>