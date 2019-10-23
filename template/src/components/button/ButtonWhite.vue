<script>
  import ButtonBase from './ButtonBase';

  export default {
    name: 'ButtonWhite',
    extends: ButtonBase
  };
</script>

<style lang="scss" scoped src="../../assets/button.scss"/>

<style lang="scss" scoped>
  .base-button {
    background-color: #FFFFFF;

    &.outlined {
      border-color: #FFFFFF;
      color: #FFFFFF;
    }
  }
</style>
