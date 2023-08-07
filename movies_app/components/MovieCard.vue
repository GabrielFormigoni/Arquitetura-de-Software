<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>

<template>
  <div class="movie">
    <div class="movie-img">
      <img
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :alt="movie.title"
      />
      <p class="review">
        {{ movie.vote_average.toFixed(1) }}
      </p>
      <p class="overview">
        {{ movie.overview.slice(0, 230) }}
        <span v-if="movie.overview.length > 230">...</span>
      </p>
    </div>
    <div class="movie-info">
      <p class="movie-title">{{ movie.title }}</p>
      <p class="movie-release">
        Estreia:
        {{
          new Date(movie.release_date).toLocaleString('pt-br', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })
        }}
      </p>
      <NuxtLink :to="`/movies/${movie.id}`" class="button button-light">
        Ver Detalhes
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-img {
  position: relative;
  max-height: 450px;
  max-width: 300px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    .review {
      transform: translateY(0);
    }

    .overview {
      transform: translateY(0);
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .review {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 0 0 10px 0;
    color: white;
    transform: translateY(-100%);
    transition: all 0.3s ease-in-out;
  }

  .overview {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px;
    font-size: 14px;
    line-height: 1.5;
    color: white;
    transform: translateY(100%);
    transition: all 0.3s ease-in-out;
  }
}

.movie-info {
  margin-top: 10px;

  .movie-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    color: white;
  }

  .movie-release {
    font-size: 14px;
    color: rgb(129, 122, 122);
    margin-bottom: 10px;
  }
}
</style>
