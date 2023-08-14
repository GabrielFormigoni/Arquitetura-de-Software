<template>
  <div class="form-container">
    <div class="card">
      <h1>Login</h1>
      <input v-model="auth.email" type="email" placeholder="Email" />
      <input v-model="auth.password" type="password" placeholder="Password" />
      <button @click="login">Entrar</button>
      <p v-if="snackbar === true" class="error-text">{{ snackbarText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'signin',

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
      this.snackbar = false
      const that = this
      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error) {
          that.snackbar = true
          that.snackbarText = error.message
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
    padding: 6rem 2rem 3rem 2rem;
    border-radius: 20px;
    border: none;
    background-color: rgb(51, 51, 51);

    h1 {
      font-size: 4rem;
      font-weight: 300;
      color: white;
      margin-bottom: 4rem;
      font-family: 'Rubik';

      @media (max-width: 320px) {
        font-size: 3rem;
      }
    }

    input {
      width: 300px;
      height: 40px;
      border-radius: 5px;
      border: none;
      color: white;
      background-color: #211f1f;
      padding: 0 1rem;
      font-size: 1rem;

      &:focus {
        outline: 1px solid #ba0c0c;
      }

      @media (max-width: 320px) {
        width: 200px;
      }
    }

    button {
      width: 300px;
      height: 50px;
      border-radius: 5px;
      border: 1px solid #ba0c0c;
      color: rgba(255, 255, 255, 0.712);
      padding: 0 1rem;
      font-size: 2rem;
      font-weight: bold;
      background-color: #ba0c0c;
      cursor: pointer;
      margin-top: 1rem;

      @media (max-width: 320px) {
        width: 200px;
      }
    }

    button:hover {
      background-color: #df0f0f;
      transition: 500ms;
      color: white;
    }
  }

  .error-text {
    color: white;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
  }
}
</style>
