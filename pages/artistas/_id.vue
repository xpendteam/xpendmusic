<template>
    <div class="container">
        <div class="row mt" style="--mt:2rem">
            <div class="col-100 lg:col-20 center pd">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 24 24"
                    class="artist-image"
                    :style="'background-image: url('+artist.image+'); animation: none;'"
                >
                    <circle cx="12" cy="12" r="12" />
                </svg>
            </div>
            <div class="col-100 lg:col-80 pl text-center lg:text-left center lg:left lg:center-y" style="--pl:1rem">
                <div>
                    <h1 class="xf-1 x-center xf-blanco">{{artist.name}}</h1>
                    <p class="x-center xf-gris x-e">
                        <span class="fa fa-map-marker" title="País"></span>
                        {{artist.country}}<br>
                        <span v-for="(network, index) in social_networks" :key="index">
                            <a
                                :href="network.url"
                                class="xf-blanco"
                                :class="'fa fa-'+network.name"
                                target="_blank"
                            ></a>&nbsp;&nbsp;
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <br />
        <span class="art-bio">
            <div v-html="artist.biografia"></div>
        </span>
        <br />
        <br />
        <h2>Lo último de {{artist.name}}:</h2>
        <br />
        <FourReleases :releases="releases.slice(0,6)" :grid="'grid grid-2 lg:grid-3 lg:grid-6 gap-8'"></FourReleases>
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
            artist: [],
            releases: [],
            social_networks: [],
        };
    },
    asyncData({ params, error }) {
        return axios
            .get(`https://cdn.xpendmusic.com/api/artists/${params.id}`)
            .then((res) => {
                return { artist_data: res.data };
            })
            .catch((e) => {
                error({ statusCode: 404, message: "Artist not found" });
            });
    },
    methods: {
        getData: function () {
            axios
                .get(
                    `https://cdn.xpendmusic.com/api/artists/${this.$route.params.id}`
                )
                .then((response) => {
                    this.artist = response.data;
                    this.releases = response.data.releases;
                    this.social_networks = response.data.social_networks;
                });
        },
    },
    head() {
        return {
            title: this.artist_data.name + " - Xpend Music",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Productor de Musica - Biografia, albumes y lanzamientos. Artista de Xpend Music - " +
                        this.artist_data.country,
                },
                {
                    property: "og:title",
                    content: this.artist_data.name + " - Xpend Music",
                },
                { property: "og:image", content: this.artist_data.image },
                {
                    property: "og:description",
                    content:
                        "Productor de Musica - Biografia, albumes y lanzamientos. Artista de Xpend Music - " +
                        this.artist_data.country,
                },
                { name: "twitter:card", content: "summary" },
                {
                    name: "twitter:title",
                    content: this.artist_data.name + " - Xpend Music",
                },
                { name: "twitter:site", content: "@xpendmusic" },
                {
                    name: "twitter:description",
                    content:
                        "Productor de Musica - Biografia, albumes y lanzamientos. Artista de Xpend Music - " +
                        this.artist_data.country,
                },
                { name: "twitter:image", content: this.artist_data.image },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
.art-bio br {
    content: " ";
    margin: 2em;
    display: block;
    font-size: 40%;
}
.art-bio strong {
    font-weight: 700;
}
.artist-image {
    fill: transparent;
    width: 70%;
    background: $secondary-bg;
    border-radius: 50%;
    background-size: cover;
    animation: skeleton 1s infinite ease-in alternate;
    @include lg {
        width: 100%;
    }
}
@keyframes skeleton {
    0% {
        background: $secondary-bg;
    }
    40%,
    100% {
        background: darken($secondary-bg, 20%);
    }
}
</style>