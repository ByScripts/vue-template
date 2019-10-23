<template>
  <div class="app-divider">
    <div v-if="!left" class="line"></div>
    <div class="label">
      <slot />
    </div>
    <div v-if="!right" class="line"></div>
  </div>
</template>

<script>
  export default {
    name: 'AppDivider',
    props: {
      left: Boolean,
      right: Boolean,
    },
  };
</script>

<style lang="scss" scoped>
  .app-divider {
    display: flex;
    align-items: center;
  }

  .line {
    flex-grow: 1;
    height: 1px;
    background-color: $textColor;

    &:first-child {
      margin-right: 2rem;
    }

    &:last-child {
      margin-left: 2rem;
    }
  }

  .label {
    font-size: 1.5rem;
    color: $textColor
  }
</style>
