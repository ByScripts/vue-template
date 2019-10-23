<template>
  <div class="app-loader">
    <p>Chargement en cours...</p>
  </div>
</template>

<script>
  export default {
    name: 'AppLoader',
  };
</script>

<style lang="scss" scoped>
  .app-loader {
    padding: 2rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    color: $primaryColor;

    p {
      margin: 2rem 0 0;
    }
  }
</style>
