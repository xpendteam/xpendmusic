<template>
    <div class="grid grid-2">
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
        <div>
            <h5 class="d-release">{{releaseItem.year}}</h5>
            <h3 class="a-release">
                <span v-for="(artist, index) in releaseItem.artists" :key="index">
                    <span v-if="releaseItem.artists.length != 1">
                        <span v-if="index != releaseItem.artists.length - 1">
                            <nuxt-link style="color: #fff" :to="artist.key">{{artist.name}},</nuxt-link>
                        </span>
                        <span v-else>
                            <nuxt-link style="color: #fff" :to="artist.key">{{artist.name}}</nuxt-link>
                        </span>
                    </span>
                    <span v-else>
                        <nuxt-link style="color: #fff" :to="artist.key">{{artist.name}}</nuxt-link>
                    </span>
                </span>
            </h3>
            <a :href="releaseItem.url" target="_blank">
                <h1 class="t-release">{{releaseItem.name}}</h1>
                <br />
            </a>
            <p class="r-btn">
                <span v-for="(service, index) in releaseItem.services" :key="index">
                    <a :href="service.url" target="_blank" title="Disponible en Spotify">
                        <i :class="'fab fa-'+ service.name"></i>
                    </a>
                </span>
                <a :href="releaseItem.url" target="_blank" title="Mas Plataformas">
                    <i class="fas fa-plus-circle"></i>
                </a>
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
.d-release {
    padding-top: 20px;
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