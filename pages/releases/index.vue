<template>
    <div class="container">
        <h1 class="x-mt-2 text-center">MUSICA</h1>
        <div class="select">
            <select v-model="year" @change="yearData(); getData()">
                <option value>Todos los lanzamientos</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </select>
        </div>
        <span class="block text-center">{{year}}</span>
        <div class="grid grid-1 md:grid-2 lg:grid-3 gap-10">
            <span v-for="(release, index) of searchReleases" :release-item="release" :key="index">
                <Release :release-item="release" class="cover-container"></Release>
            </span>
        </div>
        <div>
            <span v-if="loadbtn" class="block center">
                <div>
                    <LoadAnimation
                        v-if="loadrelease"
                        :mensaje="'Cargando...'"
                        style="display: block"
                    />
                    <button
                        class="btn-primary"
                        @click="moreData(); getData()"
                        style="cursor: pointer"
                    >Cargar Mas</button>
                </div>
            </span>
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
            loadrelease: true,
            loadbtn: true,
            releases_number: 12,
            year: "",
            releases: [],
            releases_length: null,
            site: {
                titulo: "Musica - Xpend Music | Todos los lanzamientos",
                img: "https://xpendmusic.com/assets/img/og-image.png",
                descripcion:
                    "Escucha todos lo lanzamientos oficiales que realizo Xpend Music. Econtraras artistas cmo Frank Alvarez, Johanndix, Future Trials entre otros.",
            },
        };
    },
    methods: {
        getData: function () {
            axios
                .get(`https://cdn.xpendmusic.com/api/releases/length/`)
                .then((response) => {
                    this.releases_length = response.data.len_releases;
                });
            axios
                .get(
                    `https://cdn.xpendmusic.com/api/releases/max-results/${this.releases_number}/`
                )
                .then((response) => {
                    this.releases = response.data;
                    this.loadrelease = false;
                    if (this.releases_number >= this.releases_length) {
                        this.loadbtn = false;
                    }
                });
        },
        moreData: function () {
            if (
                this.releases_number + 12 < this.releases_length &&
                this.releases_number + 12 != this.releases_length
            ) {
                this.releases_number = this.releases_number + 12;
                this.loadrelease = true;
            } else {
                this.loadrelease = true;
                if (this.releases_length % 2 == 0) {
                    this.releases_number = this.releases_length;
                } else {
                    this.releases_number = parseInt(this.releases_length) + 1;
                }
            }
        },
        yearData: function () {
            this.loadrelease = true;
            if (this.releases_length % 2 == 0) {
                this.releases_number = this.releases_length;
            } else {
                this.releases_number = parseInt(this.releases_length) + 1;
            }
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
    computed: {
        searchReleases: function () {
            return this.releases.filter((item) =>
                item.year.toUpperCase().includes(this.year)
            );
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
@import "~/assets/styles/pages/releases/index.scss";
</style>