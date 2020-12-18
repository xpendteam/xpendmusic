<template>
  <div class="container">
    <br />
    <div class="x-center" v-if="releases.length === 0 && sessions.length === 0 && artists.length === 0">
        <h3 class="x-center xf-gris search-title">No se encontraron resultados de busqueda para: '{{$route.params.id}}'</h3>
    </div>
    <div v-else>
        <h3 class="x-center xf-gris search-title">Resultados de busqueda para: '{{$route.params.id}}'</h3>
    </div>

    <div v-if="releases.length > 0" class="x-center">
        <h1 class="search-title">'{{$route.params.id}}' en Musica:</h1>
        <el-row>
        <el-col :xs="24" :sm="12" :lg="12" :xl="6" v-for="(release, index) in releases" :key="index" class="cover-container">
            <div class="cover1">
              <nuxt-link :to="'/releases/'+release.item.id">
                <img class="portadas_main" :src="release.item.image" :alt="release.item.nombre" :title="'Escuchar ' + release.item.name">
              </nuxt-link>
            </div>
            <div class="cover2">
              <h5 class="d-release">{{release.item.year}}</h5>
              <h3 class="a-release">
                <span v-for="(artist, index) in release.item.artists" :key="index">
                  <span v-if="release.item.artists.length != 1">
                    <span v-if="index != release.item.artists.length - 1">
                      <nuxt-link style="color: #fff" :to="artist.key">{{artist.name}}, </nuxt-link>
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
              <a :href="release.item.url" target="_blank"><h1 class="t-release">{{release.item.name}}</h1><br></a>
              <p class="r-btn">
                <span v-for="(service, index) in release.item.services" :key="index">
                  <a :href="service.url" target="_blank" title="Disponible en Spotify"><i :class="'fab fa-'+ service.name"></i></a>
                </span>
                <a :href="release.item.url" target="_blank" title="Mas Plataformas"><i class="fas fa-plus-circle"></i></a>
              </p>
            </div>
        </el-col>
        </el-row>
    </div>

    <div v-if="sessions.length > 0" class="x-center">
        <h1 class="search-title">'{{$route.params.id}}' en Sessions:</h1>
        <el-row>
            <el-col :span="6" v-for="(session, index) in sessions" :key="index">
                <nuxt-link :to="'/sessions/#'+session.item.slug"><img class="portadas_main" :src="session.item.pictures.extra_large" :alt="session.item.name" :title="session.item.name"></nuxt-link>
            </el-col>
        </el-row>
    </div>

    <div v-if="artists.length > 0" class="x-center">
        <h1 class="search-title">'{{$route.params.id}}' en Artistas</h1>
        <div>
            <el-row>
              <el-col :xs="12" :sm="12" :lg="6" :xl="3"  v-for="(artist, index) in artists" :key="index">
                      <router-link :to="artist.item.key">
                      <img class="artistas_main" v-bind:src="artist.item.image">
                      </router-link>
                      <p class="art-titulo"><router-link :to="artist.item.url" class="xf-2 xf-blanco">{{artist.item.name}}</router-link></p><p><router-link :to="artist.item.key" class="boton-bio f-blanco"><span class="fa fa-user"> </span> VER BIOGRAFIA</router-link></p>
              </el-col>
            </el-row>
        </div>
    </div>

    <div v-if="articles.length > 0">
        <h1 class="search-title text-center">'{{$route.params.id}}' en Articulos</h1>
        <div class="grid grid-1 md:grid-4 gap-10">
            <div v-for="(article, index) of articles" :key="index">
              <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.item.slug } }">
                <img class="img-post-blog" :src="srcimg + article.item.img" />
              </NuxtLink>
                <div>
                  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.item.slug } }">
                  <h2>{{ article.item.title }}</h2>
                  </NuxtLink>
                  <p><nuxt-link :to="'/blog/autor/' + article.item.author.name " class="autor-blg">{{ article.item.author.name }}</nuxt-link></p>
                  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.item.slug } }">
                  <p>{{ article.item.description.slice(0, 125) }}...</p>
                  </NuxtLink>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Search",
  created: function () {
    this.getData();
  },
  data() {
    return {
      srcimg: "/media/image/blog/",
      releases: [],
      sessions: [],
      artists: [],
      articles: [],
      search: "!" + this.$route.params.id,
      site: {
        titulo: "Resultados de busqueda",
        img: "https://xpendmusic.com/assets/img/og-image.png",
        descripcion: "Resultados de busqueda",
      },
    };
  },
  async asyncData({ $content }) {
    const dataarticles = await $content("articles").only(['title', 'img', 'description', 'slug', 'author']).fetch();

    return { dataarticles };
  },
  mounted() {
    this.searchArticles();
  },
  methods: {
    getData: function () {
      axios.get("https://cdn.xpendmusic.com/api/releases/").then((response) => {
        this.searchReleases(response.data);
      });
      axios.get("https://api.mixcloud.com/xpendmusic/playlists/xpend-sessions/cloudcasts/").then((response) => {
        this.searchSessions(response.data.data);
      });
      axios.get("https://cdn.xpendmusic.com/api/artists/").then((response) => {
        this.searchArtists(response.data);
      });
    },
    searchReleases: function (data) {
      const releases = data;
      const options = {
        keys: ["name", "year", "artists.name"],
      };
      const fuse = new Fuse(releases, options);
      this.releases = fuse.search(this.search);
    },
    searchSessions: function (data) {
      const sessions = data;
      const options = {
        keys: ["name", "tags.name"],
      };
      const fuse = new Fuse(sessions, options);
      this.sessions = fuse.search(this.search);
    },
    searchArtists: function (data) {
      const artists = data;
      const options = {
        keys: ["name"],
      };
      const fuse = new Fuse(artists, options);
      this.artists = fuse.search(this.search);
    },
    searchArticles: function () {
      const artists = this.dataarticles;
      const options = {
        keys: ["title", "author.name"],
      };
      const fuse = new Fuse(artists, options);
      this.articles = fuse.search(this.search);
    },
  },
  head() {
    return {
      title: this.$route.params.id + " - Xpend Music",
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
<style lang="scss" scoped>
@mixin truncate($font-size, $line-height, $lines-to-show) {
  display: block; // Fallback for non-webkit
  display: -webkit-box;
  max-width: 400px;
  height: $font-size * $line-height * $lines-to-show; // Fallback for non-webkit
  font-size: $font-size;
  line-height: $line-height;
  -webkit-line-clamp: $lines-to-show;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Musica */
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
}
.cover-container {
  display: inline-block !important;
}
.cover1 {
  float: left;
  position: relative;
  width: 50% !important;
}
.cover2 {
  text-align: initial !important;
  position: relative;
  float: left;
  width: 50% !important;
  height: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
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
.search-title {
  padding-top: 20px;
}
@media only screen and (max-width: 768px) {
  .search-title {
    padding-top: 20px;
    font-size: 1.3rem;
  }
  .t-release {
    font-size: 1.1rem;
  }
  .a-release {
    font-size: 0.8rem;
  }
  .d-release {
    font-size: 0.7rem;
  }
  .cover2 {
    margin-top: 20px;
  }
}
.main-post {
  margin-bottom: 30px;
}
.main-post__title {
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 8px;
}
.main-post__description {
  color: rgb(150, 150, 150);
  font-size: 0.8em;
  line-height: 1.1;
}
.main-post__date {
  font-size: 0.7rem;
}
.main-post__img {
  border-radius: 5px;
  transition: opacity 150ms ease-in-out;
}
.main-post__img:hover {
  opacity: 70%;
}
.autor-blg{
  padding: 8px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(60, 60, 60, 0.398);
  border-radius: 50px;
}
.img-post-blog{
  border-radius: 4px;
}
</style>