<template>
  <a class="app-external-link" :href="to" target="_blank">
    <slot />
  </a>
</template>

<script>
  export default {
    name: 'AppExternalLink',
    props: {
      to: {
        type: String,
        required: true,
      },
    },
  };
</script>
