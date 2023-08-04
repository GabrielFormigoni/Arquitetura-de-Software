<script>
export default {
  name: 'HeroComponent',
}
</script>

<template>
  <div class="hero">
    <img src="../assets//imgs/movieHero.jpg" alt="hero img" />
    <div class="text-container">
      <div class="text">
        <div class="mini-heading">Now Streaming</div>
        <h1><span>Now </span>Streaming</h1>
        <a href="#movie-grid" class="button">Ver Filmes</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  height: 300px;
  position: relative;

  @media (min-width: 750px) {
    height: 400px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text {
    color: white;
    padding: 0 16px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .mini-heading {
      font-size: 1rem;
      font-weight: 500;
      color: rgb(177, 14, 14);

      @media screen and (min-width: 750px) {
        font-size: 1.5rem;
      }
    }

    h1 {
      font-size: 3rem;
      font-weight: 200;
      margin-bottom: 1rem;

      @media screen and (min-width: 750px) {
        font-size: 4rem;
      }

      span {
        font-weight: 700;
      }
    }

    .button {
      font-size: 20px;
      align-self: flex-start;
    }
  }
}
</style>
