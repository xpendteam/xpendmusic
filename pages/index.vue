<template>
    <div>
        <div class="main-destacado container">
            <div>
                <section class="text-center mt" id="musica">
                    <h1>ÚLTIMOS LANZAMIENTOS</h1>
                    <br />
                    <FourReleases :releases="releases" :grid="'grid grid-2 md:grid-3 lg:grid-6 gap-8'"></FourReleases>
                    <p class="text-center pt" style="--pt: 20px">
                        <nuxt-link
                            class="btn-primary btn-sm"
                            role="button"
                            to="/releases"
                        ><span class="fa fa-music"></span> VER MAS</nuxt-link>
                    </p>
                </section>
            </div>
        </div>
        <section class="text-center pt" style="--pt: 20px" id="sessions">
            <h1 class="pb">XPEND SESSIONS</h1>
            <div v-if="sessions.length == 0" class="grid grid-2 lg:grid-4 gap-20">
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
            <div v-else class="grid grid-2 lg:grid-4 gap-20">
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
                <nuxt-link class="btn-primary btn-sm" role="button" to="/sessions">VER TODOS</nuxt-link>
            </p>
        </section>
        <section id="videos" class="container">
            <h1 class="text-center">VIDEOS</h1>
            <p
                class="xf-2 xf-gris text-center"
            >Mira los últimos videos que se publicaron en nuestro canal de YouTube</p>
            <br />
            <div v-if="videos == 0" class="grid grid-1 md:grid-2 lg:grid-4 gap-5">
                <div v-for="(n, index) in 4" :key="index">
                    <div class="youtube-container">
                        <svg
                            class="youtube-video-img"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="-204.63833333333235 -40.999999999999886 1284.0000000000002 723.9999999999999"
                            width="100%"
                        >
                            <defs>
                                <path
                                    d="M-203.64 -40L1076.36 -40L1076.36 680L-203.64 680L-203.64 -40Z"
                                    id="cSO6LWgP4"
                                />
                            </defs>
                            <g>
                                <use xlink:href="#cSO6LWgP4" opacity="1" fill-opacity="1" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div v-else class="grid grid-1 md:grid-2 lg:grid-4 gap-5">
                <div v-for="(video, index) of videos.slice(0,4)" :key="index">
                    <div class="youtube-container">
                        <a :href="video.link" target="_blank" title="Ver video">
                            <lazy-component>
                                <svg
                                    class="youtube-video-img"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="-204.63833333333235 -40.999999999999886 1284.0000000000002 723.9999999999999"
                                    width="100%"
                                    :style="`background-image: url(https://img.youtube.com/vi/${getYtId(video.guid)}/maxresdefault.jpg); animation: none;`"
                                >
                                    <defs>
                                        <path
                                            d="M-203.64 -40L1076.36 -40L1076.36 680L-203.64 680L-203.64 -40Z"
                                            id="cSO6LWgP4"
                                        />
                                    </defs>
                                    <g>
                                        <use xlink:href="#cSO6LWgP4" opacity="1" fill-opacity="1" />
                                    </g>
                                </svg>
                            </lazy-component>
                        </a>
                        <span v-html="video.title"></span>
                    </div>
                </div>
            </div>
            <p class="text-center pt" style="--pt: 20px">
                <a
                    href="https://www.youtube.com/c/XPENDMUSIC/videos"
                    target="_blank"
                    class="btn-primary btn-sm"
                    role="button"
                >
                    <span class="fa fa-youtube-play"></span> VER MAS
                </a>
            </p>
            <br />
        </section>
    </div>
</template>
<script>
import axios from "axios";

export default {
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            this.getData();
        });
    },
    data() {
        return {
            loading: true,
            releases: [],
            videos: [],
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
        getData() {
            this.$nextTick(() => {
                // Releases
                axios
                    .get(
                        "https://cdn.xpendmusic.com/api/releases/max-results/6/"
                    )
                    .then((response) => {
                        this.releases = response.data;
                    });
                // Sessions
                axios
                    .get(
                        "https://api.mixcloud.com/xpendmusic/playlists/xpend-sessions/cloudcasts/"
                    )
                    .then((response) => {
                        this.sessions = response.data.data;
                        terminarCargar();
                    });
                // Videos
                axios
                    .get(
                        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUC6O1ckBUm4GzuTUbnWkcdlw"
                    )
                    .then((response) => {
                        this.videos = response.data.items;
                    });
                const terminarCargar = () => {
                    this.$nuxt.$loading.finish();
                    this.loading = false;
                };
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
                { property: "og:description", content: this.site.descripcion },
                { property: "og:title", content: this.site.titulo },
                { property: "og:image", content: this.site.img },
                { name: "twitter:image", content: this.site.img },
                { name: "twitter:card", content: "summary" },
                { name: "twitter:site", content: "@xpendmusic" },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
@import "~/assets/styles/pages/index.scss";
</style>