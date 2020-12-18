<template>
    <div class="container">
        <div class="release center mt" style="--mt: 1.5rem">
            <div class="release-img">
                <div class="center">
                    <div style="width: 250px">
                        <a :href="release.url" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 24 24"
                                class="release-skeleton"
                                :style="'background-image: url('+release.image+'); animation: none;'"
                                :alt="release.nombre"
                                :title="'Escuchar ' + release.name"
                            >
                                <path d="M24 0h-24v24h24v-24z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="release-body mt" style="--mt: 10px">
                    <div class="release-body__type text-center">
                        <span v-if="release.type == 'album'">Álbum</span>
                        <span v-else-if="release.type == 'ep'">EP</span>
                        <span v-else>Sencillo</span>
                        • {{release.year}}
                    </div>
                    <div class="release-body__artists text-center">
                        <span v-for="(artist, index) in release.artists" :key="index">
                            <span v-if="release.artists.length != 1">
                                <span v-if="index != release.artists.length - 1">
                                    <nuxt-link style="color: #fff" :to="artist.key">{{artist.name}}</nuxt-link>, 
                                </span>
                                <span v-else>
                                    <nuxt-link style="color: #fff" :to="artist.key">{{artist.name}}</nuxt-link>
                                </span>
                            </span>
                            <span v-else>
                                <nuxt-link style="color: #fff" :to="artist.key">{{artist.name}}</nuxt-link>
                            </span>
                        </span>
                    </div>
                    <a class="block text-center" :href="release.url" target="_blank">
                        <h1 class="t-release">{{release.name}}</h1>
                        <br />
                    </a>
                    <p class="release-desc pb mb text-center">Disponible en:</p>
                    <div
                        class="release-services text-center"
                        v-for="(service, index) in release.services"
                        :key="index"
                    >
                        <a :href="service.url" target="_blank" class="release-services__service" v-if="service.name == 'spotify'">
                            <i class="fa fa-spotify"></i> Spotify
                        </a>
                        <a :href="service.url" target="_blank" class="release-services__service" v-else-if="service.name == 'youtube'">
                            <i class="fa fa-youtube"></i> YouTube
                        </a>
                        <a :href="service.url" target="_blank" class="release-services__service" v-else-if="service.name == 'apple'">
                            <i class="fa fa-apple"></i> Apple Music
                        </a>
                        <a :href="service.url" target="_blank" class="release-services__service" v-else-if="service.name == 'deezer'">
                            <i class="fab fa-deezer"></i> Deezer
                        </a>
                        <a :href="service.url" target="_blank" class="release-services__service" v-else-if="service.name == 'amazon'">
                            <i class="fa fa-amazon"></i> Amazon Music
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    created: function () {
        this.getData();
    },
    data() {
        return {
            release: [],
        };
    },
    asyncData({ params, error }) {
        return axios
            .get(`https://cdn.xpendmusic.com/api/releases/${params.id}`)
            .then((res) => {
                return { release_data: res.data };
            })
            .catch((e) => {
                error({ statusCode: 404, message: "Artist not found" });
            });
    },
    methods: {
        getData: function () {
            axios
                .get(
                    `https://cdn.xpendmusic.com/api/releases/${this.$route.params.id}`
                )
                .then((response) => {
                    this.release = response.data;
                });
        },
    },
    head() {
        return {
            title:
                this.release_data.name +
                " by " +
                this.release_data.artists[0].name +
                " - Xpend Music",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Escucha " +
                        this.release_data.name +
                        " de " +
                        this.release_data.artists[0].name,
                },
                {
                    property: "og:title",
                    content:
                        this.release_data.name +
                        " by " +
                        this.release_data.artists[0].name +
                        " - Xpend Music",
                },
                { property: "og:image", content: this.release_data.image },
                {
                    property: "og:description",
                    content:
                        "Escucha " +
                        this.release_data.name +
                        " de " +
                        this.release_data.artists[0].name,
                },
                { name: "twitter:card", content: "summary" },
                {
                    name: "twitter:title",
                    content:
                        this.release_data.name +
                        " by " +
                        this.release_data.artists[0].name +
                        " - Xpend Music",
                },
                { name: "twitter:site", content: "@xpendmusic" },
                {
                    name: "twitter:description",
                    content:
                        "Escucha " +
                        this.release_data.name +
                        " de " +
                        this.release_data.artists[0].name,
                },
                { name: "twitter:image", content: this.release_data.image },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
@import "~/assets/styles/pages/releases/id.scss";
</style>