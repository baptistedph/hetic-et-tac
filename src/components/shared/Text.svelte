<script>
  export let color = 'gray'
  export let marginTop = 0
  export let align = 'left'
  export let size = 'md'
  export let hover = false
</script>

<p
  style="margin-top: {marginTop}px; text-align: {align};"
  class:gray={color === 'gray'}
  class:blue={color === 'blue'}
  class:white={color === 'white'}
  class:md={size === 'md'}
  class:sm={size === 'sm'}
  class:lg={size === 'lg'}
  class:hover
>
  <slot />
</p>

<style lang="scss">
  @import '../../scss/variables.scss';

  p {
    line-height: 1.5em;

    &.md,
    &.sm {
      font-size: $xsm;
    }

    &.lg {
      font-size: $sm;
    }

    &.gray {
      color: $white-70;
    }

    &.blue {
      color: $blue-50;
    }

    &.white {
      color: $white;
    }
  }

  @media (min-width: $screen-lg) {
    p {
      &.sm {
        font-size: $xsm;
      }

      &.md {
        font-size: $sm;
      }

      &.lg {
        font-size: $md;
      }

      &.hover {
        transition: opacity 200ms;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
</style>
