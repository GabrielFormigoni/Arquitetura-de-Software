<template>
  <div class="form-container">
    <div class="card">
      <h1>Login</h1>
      <input v-model="auth.email" type="email" placeholder="Email" />
      <input v-model="auth.password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      const that = this
      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error) {
          that.snackbarText = error.message
          that.snackbar = true
        })
        .then((user) => {
          // we are signed in
          if (user) {
            that.$router.push('/')
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 6rem 2rem;
    border-radius: 20px;
    border: 2px solid white;

    h1 {
      font-size: 6rem;
      font-weight: 700;
      color: white;
      margin-bottom: 4rem;
    }

    input {
      width: 500px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid #ccc;
      padding: 0 1rem;
      font-size: 1rem;
    }

    button {
      width: 500px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid red;
      color: white;
      padding: 0 1rem;
      font-size: 1rem;
      background-color: red;
      cursor: pointer;
    }
  }
}
</style>
