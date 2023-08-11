<script>
import axios from 'axios'
export default {
  name: 'MoviePage',
  layout: 'default',

  data() {
    return {
      movie: '',
    }
  },
  async fetch() {
    await this.getSingleMovie()
  },
  head() {
    return {
      title: this.movie.title,
    }
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
  <!-- Loading -->
  <Loader v-if="$fetchState.pending" />

  <!-- Movie Info -->
  <div v-else class="single-movie container">
    <NuxtLink class="button" :to="{ name: 'index' }"> Back </NuxtLink>
    <div class="movie-info">
      <div class="movie-img">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt=""
        />
      </div>
      <div class="movie-content">
        <h1>Título: {{ movie.title }}</h1>
        <p v-if="movie.tagline.length !== 0" class="movie-fact tagline">
          <span>Mote:</span> "{{ movie.tagline }}"
        </p>
        <p class="movie-fact">
          <span>Estreia:</span>
          {{
            new Date(movie.release_date).toLocaleString('pt-br', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })
          }}
        </p>
        <p class="movie-fact">
          <span>Duração:</span> {{ movie.runtime }} minutes
        </p>
        <p class="movie-fact">
          <span>Bilheteria:</span>
          {{
            movie.revenue.toLocaleString('en-us', {
              style: 'currency',
              currency: 'USD',
            })
          }}
        </p>
        <p class="movie-fact"><span>Resumo:</span> {{ movie.overview }}</p>
        <p class="movie-fact"><span>Gêneros:</span></p>
        <li v-for="item in movie.genres" :key="item.id" class="movie-fact">
          {{ item.name }}
        </li>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.single-movie {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;

  .button {
    align-self: flex-start;
    margin-bottom: 32px;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;

    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .movie-img {
      img {
        max-height: 500px;
        width: 100%;

        @media (min-width: 800px) {
          max-height: 700px;
          width: initial;
        }
      }
    }

    .movie-content {
      h1 {
        font-size: 56px;
        font-weight: 400;
      }

      .movie-fact {
        margin-top: 12px;
        font-size: 20px;
        line-height: 1.5;

        span {
          font-weight: 600;
          text-decoration: underline;
        }
      }

      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }
    }
  }
}
</style>
