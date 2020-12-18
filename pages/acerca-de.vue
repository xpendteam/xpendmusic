<template>
    <div class="about container x-mt-2">
        <p>
            <strong>Xpend Music</strong> es un sello discográfico independiente, fundado por
            <strong>
                <nuxt-link to="/artistas/frankalvarez">Frank Alvarez</nuxt-link>
            </strong> en el año 2017. Este sello esta enfocado en el genero de la
            <strong>Musica Electronica</strong>, principalmente en el
            <strong>Future Bass</strong> y
            <strong>Melodic Dubstep</strong>.
        </p>
        <h2 id="historia">Historia</h2>
        <p>
            Todo inicio como un comunidad de fanáticos de la música electrónica para después convertirse en
            <strong>EFF Records</strong>. En sus inicios era un canal de YouTube que subía música de varios productores que recién comenzaban en adestrarse a la producción musical y a la vez también ya era un sello discográfico independiente, que llego a firmar con algunos artistas, entre ellos están,
            <strong>
                BoXXter, Black Wind,
                <nuxt-link to="/artistas/justinankeens">Dargeon</nuxt-link>, Cycloone y
                <nuxt-link to="/artistas/frankalvarez">Frank Alvarez</nuxt-link>
            </strong>.
        </p>
        <p>
            El 18 de Febrero del 2020
            <strong>EFF Records</strong> paso a ser
            <strong>Xpend Music</strong>, esto por el el significado que tenia
            <strong>EFF</strong> (ELECTRO FRIENDS FOREVER ), no era el adecuado, ya que ese nombre hacia referencia una comunidad de fanáticos y no a un sello discográfico.
        </p>
        <p>
            Actualmente
            <strong>Xpend Music</strong> es una división de
            <a href="http://dafkerecords.com/">
                <strong>DAFKE Records</strong>
            </a> y hasta el momento se firmaron mas de 10 lanzamientos oficiales, entre ellos un EP de parte de
            <nuxt-link to="/artistas/justinankeens">
                <strong>Justin Ankeens</strong>
            </nuxt-link>.
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Acercade: [],
            site: {
                titulo: "Acerca de - Xpend Music",
                img: "https://xpendmusic.com/assets/img/og-image.png",
                descripcion:
                    "¿Que es Xpend Music?. Xpend Music es un sello discográfico independiente, fundado por Frank Alvarez en el año 2017. Esta discográfica esta enfocada en el genero de la Musica Electronica, principalmente en el Future Bass y Melodic.",
            },
        };
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