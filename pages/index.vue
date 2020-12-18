<template>
    <div>
        <div class="main-destacado">
            <div class="container">
                <section class="x-center" id="musica">
                    <h1>ÚLTIMOS LANZAMIENTOS</h1>
                    <br />
                    <FourReleases :releases="releases"></FourReleases>
                    <p class="text-center pt" style="--pt: 20px">
                        <nuxt-link
                            class="btn-primary"
                            role="button"
                            to="/musica"
                        >Ver más Lanzamientos</nuxt-link>
                    </p>
                </section>
            </div>
        </div>
        <div class="container">
            <section class="x-center" id="musica">
                <h1 class="pb">XPEND SESSIONS</h1>
                <div v-if="sessions.length == 0" class="grid grid-2 lg:grid-4 gap-10">
                    <div v-for="(n, index) in 4" :key="index">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 24 24"
                            class="release-skeleton"
                        >
                            <path d="M24 0h-24v24h24v-24z" />
                        </svg>
                    </div>
                </div>
                <div v-else class="grid grid-2 lg:grid-4 gap-10">
                    <div v-for="(session, index) of sessions" :key="index">
                        <nuxt-link :to="'/sessions/#'+session.slug">
                            <lazy-component>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 24 24"
                                    class="release-skeleton"
                                    :style="'background-image: url('+session.pictures.extra_large+'); animation: none;'"
                                >
                                    <path d="M24 0h-24v24h24v-24z" />
                                </svg>
                            </lazy-component>
                        </nuxt-link>
                    </div>
                </div>
                <p class="text-center pt" style="--pt: 20px">
                    <nuxt-link class="btn-primary" role="button" to="/sessions">VER TODOS</nuxt-link>
                </p>
            </section>
            <section id="videos" class="pt" style="--pt: 30px">
                <h1 class="text-center">VIDEOS</h1>
                <p
                    class="xf-2 xf-gris text-center"
                >Mira los últimos videos que se publicaron en nuestro canal de YouTube</p>
                <br />
                <div class="grid grid-1 md:grid-2 lg:grid-4 gap-10">
                    <div v-for="(video, index) of videos2.slice(0,4)" :key="index">
                        <div>
                            <a :href="video.link" target="_blank" title="Ver video">
                                <lazy-component>
                                    <img
                                        class="videoyt"
                                        :src="`https://img.youtube.com/vi/${getYtId(video.guid)}/maxresdefault.jpg`"
                                        :alt="video.title"
                                    />
                                </lazy-component>
                            </a>
                            <h4 class="h1-video" v-html="video.title"></h4>
                        </div>
                    </div>
                </div>
                <p class="x-center youtube-btn1">
                    <a
                        href="https://www.youtube.com/c/XPENDMUSIC/videos"
                        target="_blank"
                        class="x-btn"
                        style="background: red"
                    >
                        <span class="fa fa-youtube-play"></span> Ver mas
                    </a>
                </p>
                <br />
            </section>
        </div>
    </div>
</template>
<script>
import axios from "axios";
var urlVideos =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUC6O1ckBUm4GzuTUbnWkcdlw";
var urlReleases = "https://cdn.xpendmusic.com/api/releases/max-results/4/";
var urlSessions =
    "https://api.mixcloud.com/xpendmusic/playlists/xpend-sessions/cloudcasts/";

export default {
    name: "Inicio",
    created: function () {
        this.getVideos();
        this.getReleases();
        this.getSessions();
    },
    // mounted() {
    //     this.$nextTick(() => {
    //         this.$nuxt.$loading.start();

    //         setTimeout(() => this.$nuxt.$loading.finish(), 500);
    //     });
    // },
    data() {
        return {
            releases: [],
            blogs: [],
            videos2: [],
            sessions: [],
            site: {
                titulo:
                    "Xpend Music: Últimos Lanzamientos | Sello Discográfico",
                img: "https://xpendmusic.com/assets/img/og-image.png",
                descripcion:
                    "Sitio oficial de Xpend Music, somos un sello discografico dispuesto en ayudar a nuevos artistas. Estamos enfocados en el genero de la Musica Electronica, principalmente en el Future Bass y Melodic Dubstep. (Unete Ahora)",
            },
        };
    },
    methods: {
        getVideos: function () {
            axios.get(urlVideos).then((response) => {
                this.videos2 = response.data.items;
            });
        },
        getReleases: function () {
            axios.get(urlReleases).then((response) => {
                this.releases = response.data;
            });
        },
        getSessions: function () {
            axios.get(urlSessions).then((response) => {
                this.sessions = response.data.data;
            });
        },
        getYtId: function (myString) {
            return myString.split(":")[2];
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
<style lang="scss">
@import "~/components/styles/default.scss";

.main-destacado {
    padding: 40px 20px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), var(--xpend-bg)),
        url(https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500);
    background-position: center;
}
.videoyt {
    border-radius: 5px;
    width: 100%;
    height: 56.25%;
    transition: opacity 150ms ease-in-out;
    &:hover {
        opacity: 0.5;
    }
}
.releases-links {
    height: 40px;
    padding: 0;
    margin: 0;
}
</style>