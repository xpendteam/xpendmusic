<template>
    <div class="grid grid-2 gap-8">
        <div>
            <nuxt-link :to="'/releases/'+releaseItem.id">
                <img
                    class="portadas_main"
                    :src="releaseItem.image"
                    :alt="releaseItem.nombre"
                    :title="'Escuchar ' + releaseItem.name"
                />
            </nuxt-link>
        </div>
        <div class="cont-release">
            <h5 class="d-release">{{releaseItem.year}}</h5>
            <div class="a-release">
                <span v-for="(artist, index) in releaseItem.artists" :key="index">
                    <span v-if="releaseItem.artists.length != 1">
                        <span v-if="index != releaseItem.artists.length - 1">
                            <nuxt-link class="link-release" :to="artist.key">{{artist.name}}</nuxt-link>,
                        </span>
                        <span v-else>
                            <nuxt-link class="link-release" :to="artist.key">{{artist.name}}</nuxt-link>
                        </span>
                    </span>
                    <span v-else>
                        <nuxt-link class="link-release" :to="artist.key">{{artist.name}}</nuxt-link>
                    </span>
                </span>
            </div>
            <nuxt-link :to="'/releases/'+releaseItem.id">
                <h1 v-if="releaseItem.name.length < 21 " class="t-release">{{releaseItem.name}}</h1>
                <h1 v-else class="t-release" v-text="releaseItem.name.slice(0,20) + '...'"></h1>
            </nuxt-link>
            <p class="r-btn">
                <span v-for="(service, index) in releaseItem.services.slice(0,4)" :key="index">
                    <a :href="service.url" target="_blank" title="Disponible en Spotify">
                        <i :class="'fab fa-'+ service.name"></i>
                    </a>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["releaseItem"],
};
</script>
<style>
.portadas_main {
    border-radius: 2%;
}
.d-release {
    font-size: 0.8rem;
    letter-spacing: 5px;
    color: rgba(255, 255, 255, 0.5);
}
.a-release {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
}
.t-release {
    font-size: 1.6rem;
    margin: 0;
}
.cont-release {
    position: relative;
}
.r-btn {
    position: absolute;
    bottom: 0.3rem;
    margin: 0;
}
.r-btn i {
    letter-spacing: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.5);
}
.r-btn i:hover {
    color: #fff;
}
.link-release {
    color: #fff !important;
}
.link-release:hover {
    text-decoration: underline;
}
.afont {
    font-size: 1.2rem !important;
}
@media only screen and (max-width: 600px) {
    .t-release {
        font-size: 1.1rem;
    }
    .a-release {
        font-size: 0.8rem;
    }
    .d-release {
        font-size: 0.7rem;
    }
}
</style>