<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  layout: 'default',

  data() {
    return {
      movies: [],
      searchedMovies: [],
      searchInput: '',
      genresList: [],
      genreId: '',
    }
  },
  async fetch() {
    await this.getGenresList();
    if (this.searchInput === '') {
      await this.getMovies()
      return
    }
    await this.searchMovies()
  },
  fetchDelay: 2000,
  head() {
    return {
      title: 'Movie App - Latest Movies Info',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Movie App - Latest Movies Info',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'movie, movies, latest movies, latest movies info',
        },
      ],
    }
  },
  methods: {
    async getGenresList() {
      const data = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=d34a122b23be14518dbf126735740a98'
      )
      this.genresList = []
      const response = await data.data.genres

      response.forEach((genre) => {
        this.genresList.push(genre)
      })
    },

    async getMovies() {
      const data = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=d34a122b23be14518dbf126735740a98&language=en-US&page=1'
      )
      this.movies = []
      const response = await data.data.results

      response.forEach((movie) => {
        this.movies.push(movie)
      })
    },

    async searchMovies() {
      const data = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=d34a122b23be14518dbf126735740a98&language=en-US&query=${this.searchInput}&page=1&include_adult=false`
      )

      const response = await data.data.results

      this.searchedMovies = []

      response.forEach((movie) => {
        this.searchedMovies.push(movie)
      })
    },

    async filterByGenre() {
      const data = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d34a122b23be14518dbf126735740a98&with_genres=${this.genreId}`
      )

      const response = await data.data.results

      this.searchedMovies = []

      response.forEach((movie) => {
        this.searchedMovies.push(movie)
      })
    },

    clearSearch() {
      this.searchInput = ''
      this.searchedMovies = []
    },
  },
}
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <Hero />
    <div class="container_flexbox">
      <!-- Search -->
      <div class="search">
        <input
          v-model.lazy="searchInput"
          type="text"
          placeholder="Pesquisar..."
          @keyup.enter="$fetch"
        />
        <button v-show="searchInput !== ''" class="button" @click="clearSearch">
          Clear Search
        </button>
      </div>

      <!-- Filtro por gênero -->
      <div>
        <select v-model="genreId" @click="filterByGenre">
          <option value="">Selecione um gênero</option>
          <option v-for="genre in genresList" :key="genre.id">{{ genre.name }}</option>
        </select>
      </div>
    </div>
    <!-- Loading -->
    <Loader v-if="$fetchState.pending" />

    <!-- Movies -->
    <div v-else class="container movies">
      <!-- All Movies -->
      <div v-if="searchInput === ''" id="movie-grid" class="movies-grid">
        <div v-for="(movie, index) in movies" :key="index">
          <MovieCard :movie="movie" />
        </div>
      </div>

      <!-- Searched Movies -->
      <div v-else id="movie-grid" class="movies-grid">
        <div v-for="(movie, index) in searchedMovies" :key="index">
          <MovieCard :movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container_flexbox {
  display: flex;
  align-items: center;
  gap: 3em;
  max-width: 1400px;
  margin: 32px auto 0 18rem;
}

.search {
  display: flex;

  input {
    width: 200px;
    height: 45px;
    padding: 12px 12px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    outline: none;

    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    border-radius: 0 4px 4px 0;
    outline: none;
  }
}
.movies {
  padding: 32px 0;
}

select {
  height: 45px;
  width: 200px;
  padding: 12px 12px;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
}

.movies-grid {
  display: grid;
  padding: 0 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 28px 16px;

  @media (min-width: 750px) {
    padding: 0 32px;
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
