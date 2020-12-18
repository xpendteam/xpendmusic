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
        {{year}}
        <div class="grid grid-1 md:grid-2">
            <span v-for="(release, index) of searchReleases" :release-item="release" :key="index">
                <Release :release-item="release" class="cover-container"></Release>
            </span>
        </div>
        <div>
            <span v-if="releases_number > releases_length"></span>
            <span v-else class="block center">
                <div>
                    <no-ssr>
                        <LoadAnimation
                            :mensaje="'Cargando...'"
                            style="display: none"
                            id="cargar-mas"
                        />
                    </no-ssr>
                    <a
                        @click="moreData(); getData()"
                        class="x-btn"
                        style="cursor: pointer"
                    >Cargar Mas</a>
                </div>
            </span>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    components: {
        LoadAnimation: () => import("~/components/LoadAnimation.vue"),
    },
    name: "Musica",
    created: function () {
        this.getData();
    },
    data() {
        return {
            releases_number: 10,
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
                .get(
                    `https://cdn.xpendmusic.com/api/releases/max-results/${this.releases_number}/`
                )
                .then((response) => {
                    const loadmore = document.getElementById("cargar-mas");
                    this.releases = response.data;
                    loadmore.style.display = "none";
                });
            axios
                .get(`https://cdn.xpendmusic.com/api/releases/length/`)
                .then((response) => {
                    this.releases_length = response.data.len_releases;
                });
        },
        moreData: function () {
            var loadmore = document.getElementById("cargar-mas");
            this.releases_number = this.releases_number + 10;
            loadmore.style.display = "block";
        },
        yearData: function () {
            while (this.releases_number < this.releases_length) {
                this.releases_number = this.releases_number + 10;
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
        searchReleases: function () {
            return this.releases.filter((item) =>
                item.year.toUpperCase().includes(this.year)
            );
        },
    },
};
</script>}
<style scoped>
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: var(--xpend-bg-2);
    background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
    display: none;
}
/* Custom Select */
.select {
    position: relative;
    display: flex;
    width: 15em;
    height: 2em;
    line-height: 2em;
    background: var(--xpend-bg-2);
    overflow: hidden;
    border-radius: 0.25em;
}
select {
    flex: 1;
    padding: 0 0.5em;
    color: #fff;
    cursor: pointer;
}
/* Arrow */
.select::after {
    content: "\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: var(--xpend-bg-2);
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: 0.25s all ease;
    -o-transition: 0.25s all ease;
    transition: 0.25s all ease;
}
/* Transition */
.select:hover::after {
    color: var(--xpend-primary);
}
</style>