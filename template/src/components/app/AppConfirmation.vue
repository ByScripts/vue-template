<!--
Emitted events: confirm, cancel
-->
<template>
  <div class="app-confirmation">
    <FontAwesomeIcon class="icon" size="5x" :icon="$icons.warning" />
    <SectionTitle light center v-text="message" />
    <div class="buttons">
      <ButtonGrey
        :icon="$icons.cancel"
        :busy="busy"
        icon-to-left
        outlined
        @click="$emit('cancel')"
      >
        Annuler
      </ButtonGrey>
      <ButtonGreen
        :icon="$icons.confirm"
        :busy="busy"
        outlined
        @click="$emit('confirm')"
      >
        Valider
      </ButtonGreen>
    </div>
  </div>
</template>

<script>
  import ButtonGrey from '../button/ButtonGrey';
  import ButtonGreen from '../button/ButtonGreen';
  import SectionTitle from './AppTitle';

  export default {
    name: 'AppConfirmation',
    components: { SectionTitle, ButtonGreen, ButtonGrey },
    props: {
      message: {
        type: String,
        required: true,
      },
      busy: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .app-confirmation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
    z-index: 2100;

    hr {
      width: 14rem;
      border: none;
    }
  }

  .icon {
    color: $errorColor;
    margin-bottom: 4rem;
  }

  .buttons {
    display: flex;
    width: 40rem;
    margin: 0 auto;
    justify-content: space-between;

     button {
       width: 19rem;
     }
  }
</style>
