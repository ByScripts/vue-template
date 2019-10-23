<template>
  <h3 class="app-title" :class="{light, center}">
    <slot />
  </h3>
</template>

<script>
  export default {
    name: 'AppTitle',
    props: {
      light: {
        type: Boolean,
        default: false,
      },
      center: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .app-title {
    position: relative;
    padding-bottom: 1.2rem;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3.5rem;

    &::after {
      content: "";
      width: 14rem;
      height: 0.5rem;
      background-color: #000000;
      position: absolute;
      left: 0;
      bottom: 0.2rem;
    }

    &.light {
      color: #BBBBBB;
    }

    &.center {
      text-align: center;

      &::after {
        left: 50%;
        margin-left: -7rem;
      }
    }
  }
</style>
