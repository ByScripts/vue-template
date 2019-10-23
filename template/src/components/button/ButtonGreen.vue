<script>
  import ButtonBase from './ButtonBase';

  export default {
    name: 'ButtonGreen',
    extends: ButtonBase
  };
</script>

<style lang="scss" scoped src="../../assets/button.scss"/>

<style lang="scss" scoped>
  .base-button {
    background-color: $buttonGreenColor;

    &.outlined {
      border-color: $buttonGreenColor;
      color: $buttonGreenColor;
    }
  }
</style>
