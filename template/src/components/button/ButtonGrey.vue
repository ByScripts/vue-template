<script>
  import ButtonBase from './ButtonBase';

  export default {
    name: 'ButtonGrey',
    extends: ButtonBase,
  };
</script>

<style lang="scss" scoped src="../../assets/button.scss"/>

<style lang="scss" scoped>
  .base-button {
    background-color: $buttonGreyColor;

    &.outlined {
      border-color: $buttonGreyColor;
      color: $buttonGreyColor;
    }
  }
</style>

