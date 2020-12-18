<template>
    <div class="container x-mt-2">
        <div class="x-center">
            <img class="user-img" :src="artist.image" />
        </div>
        <h1 class="xf-1 x-center xf-blanco">{{artist.name}}</h1>
        <p class="x-center xf-gris x-e">
            <span class="fa fa-map-marker" title="País"></span>
            {{artist.country}}
        </p>
        <br />
        <span class="art-bio">
            <div v-html="artist.biografia"></div>
        </span>
        <br />
        <p>
            <span v-for="(network, index) in social_networks" :key="index">
                <a
                    :href="network.url"
                    class="xf-blanco"
                    :class="'fa fa-'+network.name"
                    target="_blank"
                ></a>&nbsp;&nbsp;
            </span>
        </p>
        <br />
        <h2>Lo último de {{artist.name}}:</h2>
		<br>
        <FourReleases :releases="releases"></FourReleases>
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
<style>
.user-img {
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 6px solid #943fff;
}
.art-bio br {
    content: " ";
    margin: 2em;
    display: block;
    font-size: 40%;
}
.art-bio strong {
    font-weight: 700;
}
</style>