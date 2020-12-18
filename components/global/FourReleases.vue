<template>
    <div>
        <div v-if="releases.length == 0" :class="grid">
            <div v-for="(n, index) in 6" :key="index">
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
        <div v-else :class="grid">
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
                        <span v-for="(service, index) in release.services.slice(0, 3)" :key="index">
                            <a class="releases-links_btn" :href="service.url" target="_blank">
                                <i :class="'fab fa-'+ service.name"></i>
                            </a>
                        </span>
                        <nuxt-link
                            :to="'/releases/'+release.id"
                            class="releases-links_btn"
                            title="Mas Plataformas"
                        >
                            <i class="fas fa-plus-circle"></i>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["releases", "grid"],
};
</script>

<style lang="scss">
@import "~/assets/styles/main.scss";
@import "~/assets/styles/components/FourReleases.scss";
</style>