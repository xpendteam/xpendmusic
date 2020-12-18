<template>
    <div class="x-center container">
        <h1 class="x-mt-2">ARTISTAS</h1>
        <div class="grid grid-1 md:grid-2 lg:grid-4 gap-10">
            <div v-for="(artista, index) of artistas" :key="index">
                <router-link :to="artista.key">
                    <img class="artistas_main" v-bind:src="artista.image" />
                </router-link>
                <p>
                    <router-link :to="artista.key" class="xf-2 xf-blanco">{{artista.name}}</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
var urlDataXpend = "https://cdn.xpendmusic.com/api/artists/";

export default {
    name: "Musica",
    created: function () {
        this.getData();
    },
    data() {
        return {
            artistas: [],
            site: {
                titulo: "Artistas - Xpend Music",
                img: "https://xpendmusic.com/assets/img/og-image.png",
                descripcion:
                    "Todos los artistas que formaron parte de Xpend Music. Future Trials, Frank Alvarez, Justin Ankeens entre otros",
            },
        };
    },
    methods: {
        getData: function () {
            axios.get(urlDataXpend).then((response) => {
                this.artistas = response.data;
            });
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