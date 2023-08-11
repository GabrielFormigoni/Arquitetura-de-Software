<script>
export default {
  name: 'NavbarComponent',
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-logo">
        <img src="../assets//imgs/logo.png" alt="hero img" />
      </router-link>
    </div>
    <div class="navbar-end">
      <router-link to="/login" class="navbar-item"> Sign In </router-link>
      <div class="separator" />
      <router-link to="/cadastro" class="navbar-item"> Sign Up </router-link>
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

.navbar-logo img {
  width: 150px;
  height: 35px;
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
}

.navbar-item:hover {
  color: #ba0c0c;
  scale: 1.05;
  transition: ease-in-out;
}
</style>
