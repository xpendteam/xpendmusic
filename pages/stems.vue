<template>
    <div class="container">
        <br>
        <input
            class="searchButton"
            type="text"
            placeholder="Buscar"
            v-model="nombre"
            @input="nombre = $event.target.value.toUpperCase()"
        />
        <div v-for="stem of searchStems" :key="stem">
            <section class="stem" :id="stem.id">
                <h1 class="xf-2 xf-b upper" :id="stem.id">{{stem.name}}</h1>
                <div class="xf-4 xf-gris">
                    {{stem.genre}} | {{stem.bpm}} | {{stem.key}}
                    <br />
                    <span class="xf-3">Artista: {{stem.artist}}</span>
                </div>
                <br />
                <span class="art-bio">
                    <div v-html="stem.descripcion"></div>
                </span>
                <br />
                <a class="stems-btn" :href="stem.url" target="_blank">Descargar Stems</a>
                <br />
                <br />
            </section>
        </div>
    </div>
</template>
<script>
import axios from "axios";
var urlArtistas =
    "https://raw.githubusercontent.com/xpedn/xpedn.github.io/master/dt/stems.json";
export default {
    name: "Stems",
    created: function () {
        this.getStems();
    },
    data() {
        return {
            stems: [],
            nombre: "",
            site: {
                titulo: "Stems - Xpend Music",
                img: "https://xpendmusic.com/assets/img/og-image.png",
                descripcion:
                    "Encuentra algunos Stems de parte de los artistas de Xpend Music",
            },
        };
    },
    methods: {
        getStems: function () {
            axios.get(urlArtistas).then((response) => {
                this.stems = response.data;
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
    computed: {
        searchStems: function () {
            return this.stems.filter((item) =>
                item.name.toUpperCase().includes(this.nombre)
            );
        },
    },
};
</script>
<style scoped>
.stem {
    background: var(--xpend-bg-2);
    padding: 30px;
    margin-bottom: 15px;
    border-radius: 15px;
    line-height: 18px;
}
.stems-btn {
    background: #943fff;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    color: #ffffff;
}
.stems-btn:hover {
    background: #000;
    color: #fff !important;
}
.searchButton {
    width: 30%;
    border: none;
    padding: 6px 8px;
    outline: none;
    color: #8a8a8a;
    border-radius: 4px;
}
.searchButton:focus {
    color: var(--xpend-primary);
}
@media only screen and (max-width: 760px) {
    .searchButton {
        width: 100%;
    }
}
</style>