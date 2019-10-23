<script>
  import ButtonBase from './ButtonBase';

  export default {
    name: 'ButtonRed',
    extends: ButtonBase
  };
</script>

<style lang="scss" scoped src="../../assets/button.scss"/>

<style lang="scss" scoped>
  .base-button {
    background-color: $buttonRedColor;

    &.outlined {
      border-color: $buttonRedColor;
      color: $buttonRedColor;
    }
  }
</style>
