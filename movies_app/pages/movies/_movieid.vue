<script>
import axios from 'axios'
export default {
  name: 'MoviePage',

  data() {
    return {
      movie: null,
    }
  },
  async fetch() {
    await this.getSingleMovie()
  },
  fetchDelay: 1000,
  methods: {
    async getSingleMovie() {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=d34a122b23be14518dbf126735740a98&language=en-US`
      )

      const response = await data.data
      this.movie = response
    },
  },
}
</script>

<template>
  <Loader v-if="$fetchState.pending" />

  <div v-else class="container single-movie">
    <NuxtLink to="/" class="button">Back</NuxtLink>
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.overview }}</p>
    <img
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :alt="movie.title"
      class="image"
    />
  </div>
</template>

<style lang="scss" scoped>
.text {
  color: red;
}

.image {
  width: 100%;
  height: auto;
}
</style>
