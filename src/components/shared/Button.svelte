<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let invert = false
  export let marginTop = 0
</script>

<button
  on:click={() => dispatch('click')}
  style="margin-top: {marginTop}px"
  class:invert
>
  <slot />
  {#if invert}
    <img src="/images/arrow-black.svg" alt="arrow black" />
  {:else}
    <img src="/images/arrow-white.svg" alt="arrow white" />
  {/if}
</button>

<style lang="scss">
  @import '../../scss/variables.scss';

  button {
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: $black;
    color: $white;
    font-size: 0.9rem;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;

    &.invert {
      background-color: $white;
      color: $black;
    }
  }

  @media (min-width: $screen-md) {
    button {
      font-size: 1.2rem;
      padding: 10px 24px;
      font-weight: 500;
      transition-duration: 200ms;
      transition-property: gap, background-color;

      &:hover {
        gap: 30px;
        background-color: $white-70;
      }
    }
  }
</style>
