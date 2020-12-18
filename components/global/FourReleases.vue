<template>
    <div>
        <div v-if="releases.length == 0" class="grid grid-1 md:grid-2 lg:grid-4 gap-10">
            <div v-for="(n, index) in 4" :key="index">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 24 24"
                    class="release-skeleton"
                >
                    <path d="M24 0h-24v24h24v-24z" />
                </svg>
                <div class="release-skeleton-bottom"></div>
            </div>
        </div>
        <div v-else class="grid grid-1 md:grid-2 lg:grid-4 gap-10">
            <div v-for="(release, index) of releases" :key="index">
                <nuxt-link :to="'/releases/'+release.id">
                    <lazy-component>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 24 24"
                            class="release-skeleton"
                            :style="'background-image: url('+release.image+'); animation: none;'"
                        >
                            <path d="M24 0h-24v24h24v-24z" />
                        </svg>
                    </lazy-component>
                </nuxt-link>
                <div class="releases-links center">
                    <div>
                        <span v-for="(service, index) in release.services" :key="index">
                            <a
                                class="r-btn"
                                :href="service.url"
                                target="_blank"
                                title="Disponible en Spotify"
                            >
                                <i :class="'fab fa-'+ service.name"></i>
                            </a>
                        </span>
                        <a
                            class="r-btn"
                            :href="release.url"
                            target="_blank"
                            title="Mas Plataformas"
                        >
                            <i class="fas fa-plus-circle"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["releases"],
};
</script>

<style lang="scss">
$skeleton-color: #131416;

.release-skeleton {
    fill: transparent;
    border-radius: 2%;
    background: $skeleton-color;
    animation: skeleton 2s infinite ease-out alternate;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: 0.2s;
}
@media only screen and (min-width: 768px) {
    .release-skeleton:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
}
.release-skeleton-bottom {
    fill: transparent;
    border-radius: 5px;
    background: $skeleton-color;
    animation: skeleton 2s infinite ease-out alternate;
    height: 40px;
}
@keyframes skeleton {
    0% {
        background: $skeleton-color;
    }
    40%,
    100% {
        background: darken($skeleton-color, 20%);
    }
}
</style>