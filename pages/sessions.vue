<template>
    <div>
        <h1 class="text-center py" style="--py: 25px">SESSIONS</h1>
        <section class="container sessions">
            <input
                class="searchButton"
                type="text"
                placeholder="Buscar"
                v-model="name"
                @input="name = $event.target.value.toUpperCase()"
            />
            <br />
            <br />
            <div v-if="searchSession == 0">
                <div v-for="(n, index) in 4" :key="index">
                    <div class="line"></div>
                </div>
            </div>
            <div v-else>
                <div v-for="(session, index) in searchSession" :key="index">
                    <div class="line">
                        <span :id="session.slug"></span>
                        <iframe
                            class="mixcloud__inframe"
                            width="100%"
                            height="120"
                            :src="'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fxpendmusic%2F'+session.slug+'%2F'"
                            frameborder="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
var urlDataXpend =
    "https://api.mixcloud.com/xpendmusic/playlists/xpend-sessions/cloudcasts/";

export default {
    name: "Sessions",
    created: function () {
        this.getData();
    },
    data() {
        return {
            sessions: [],
            name: "",
            site: {
                titulo: "Sessions - Xpend Music",
                img: "https://xpendmusic.com/assets/img/og-image.png",
                descripcion: "Escucha todas las sesiones de Xpend Music",
            },
        };
    },
    methods: {
        async getData() {
            const get = await axios.get(urlDataXpend).then((response) => {
                this.sessions = response.data.data;
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
        searchSession: function () {
            return this.sessions.filter((item) =>
                item.name.toUpperCase().includes(this.name)
            );
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
@import "~/assets/styles/pages/sessions.scss";
</style>