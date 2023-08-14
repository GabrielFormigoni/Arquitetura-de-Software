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
        <p>MoviesRec</p>
      </div>
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
}

.navbar-logo p{
  font-family: 'Rubik';
  margin-left: 8px;
}
.navbar-end {
  display: flex;
  align-items: center;
}



.navbar-item {
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 500;
  opacity: 0.8;
  cursor: pointer;
}

.navbar-item:hover {
  color: #ba0c0c;
  scale: 1.05;
  transition: ease-in-out;
}
</style>
