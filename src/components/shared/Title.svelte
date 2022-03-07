<script>
  export let size = 'lg'
  export let color = 'white'
</script>

{#if size === 'lg'}
  <h2 class:white={color === 'white'} class:blue={color === 'blue'}>
    <slot />
  </h2>
{:else}
  <h3 class:white={color === 'white'} class:blue={color === 'blue'}>
    <slot />
  </h3>
{/if}

<style lang="scss">
  @import '../../scss/variables.scss';

  h2 {
    font-size: $lg;
    font-weight: bold;
    line-height: 1.2em;
  }

  h3 {
    font-size: $md;
    font-weight: medium;
    line-height: 1.3em;
  }

  .white {
    color: $white;
  }

  .blue {
    color: $blue;
  }

  @media (min-width: $screen-lg) {
    h2 {
      font-size: $xl;
    }

    h3 {
      font-size: $lg;
      font-weight: bold;
    }
  }
</style>
