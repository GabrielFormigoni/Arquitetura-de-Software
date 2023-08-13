<script>
export default {
  name: 'NavbarComponent',
  methods: {
    logout() {
      this.$fire.auth.signOut()
      this.$router.push('/auth/signin')
    },
  },
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-logo">
        <img src="../assets/imgs/clapperboard.svg" alt="">
        <p>FilmesIA</p>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item" @click="logout">Sair</div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  color: white;
  padding: 1.7rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width:320px) {
    display: block;
  }
}

.separator {
  width: 2px;
  height: 20px;
  background-color: rgb(255, 255, 255, 0.8);
  margin: 0 10px;
}

.navbar-logo{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ba0c0c;
  font-size: 50px;

  @media (max-width:320px) {
    margin-top: 1rem;
  }
}

.navbar-logo p{
  font-family: 'Rubik';
}
.navbar-end {
  display: flex;
  align-items: center;

  @media (max-width:320px) {
    position: absolute;
    left: 80%;
    top: 2%;
  }
}



.navbar-item {
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 500;
  opacity: 0.8;
  cursor: pointer;

  background-color: #ba0c0c;
  color: rgba(255, 255, 255, 0.76);
  padding: 0.5rem 1rem;
  border-radius: 10px;
}

.navbar-item:hover {
  color: white;
  background-color: #f00d0d;
  transition: 500ms;
}
</style>
