<template>
  <div class="container">
    wellcome
    <button type="button" class="btn btn-primary" @click="jumpToLogin">login</button>
    <button type="button" class="btn btn-primary" @click="jumpToRegist">regist</button>
  </div>
</template>

<script>
    export default {
      methods: {
        jumpToLogin( ){router.push({ name: 'login.home'})},
        jumpToRegist(){router.push({ name: 'regist.home'})}
      },
    }
</script>

