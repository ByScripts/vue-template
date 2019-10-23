<template>
  <component
    :is="component"
    class="button-base"
    :type="typeAttribute"
    :disabled="busy"
    :class="{outlined, small, big, busy, rounded, 'icon-to-left': iconToLeft}"
    :to="toAttribute"
    v-on="$listeners"
  >
    <span><slot /></span>
    <FontAwesomeIcon
      v-if="busy || icon"
      :icon="busy ? $icons.spinner : icon"
      :spin="busy"
      fixedWidth
    />
  </component>
</template>

<script>
  import AppExternalLink from '../app/AppExternalLink';

  export default {
    name: 'BaseButton',
    components: { AppExternalLink },
    props: {
      type: {
        type: String,
        default: 'button',
        validator(value) {
          return [
            'button',
            'submit',
            'reset',
          ].indexOf(value) !== -1;
        },
      },
      icon: {
        type: Object,
      },
      iconToLeft: {
        type: Boolean,
        default: false,
      },
      outlined: {
        type: Boolean,
        default: false,
      },
      small: {
        type: Boolean,
        default: false,
      },
      big: {
        type: Boolean,
        default: false,
      },
      busy: {
        type: Boolean,
        default: false,
      },
      rounded: {
        type: Boolean,
        default: false
      },
      linkTo: {
        type: String,
      },
    },
    computed: {
      component() {
        if (this.linkTo) {
          return this.linkTo.match(/(^|:)\/\//) ? 'AppExternalLink' : 'router-link';
        }

        return 'button';
      },
      toAttribute() {
        if(this.linkTo) {
          return this.linkTo;
        }
      },
      typeAttribute() {
        if (!this.linkTo) {
          return this.type;
        }
      },
    },
  };
</script>
