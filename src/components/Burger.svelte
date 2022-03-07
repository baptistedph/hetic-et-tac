<script>
  export let opened

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  const toggle = () => {
    dispatch('toggle')
  }
</script>

<div class:opened class="burger-container" on:click={toggle}>
  <div />
</div>

<style lang="scss">
  @import '../scss/variables.scss';

  .burger-container {
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;

    &.opened {
      div {
        background-color: transparent;

        &::before {
          transform: rotate(45deg);
          margin-top: 0;
        }

        &::after {
          transform: rotate(-45deg);
          margin-top: 0;
        }
      }
    }

    div {
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: $white-70;
      top: 50%;
      transform: translateY(-50%);
      transition: background 200ms;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: $white-70;
        top: 50%;
        transform: translateY(-50%);
        transition-property: margin-top, transform;
        transition-duration: 200ms;
      }

      &::before {
        margin-top: -10px;
      }

      &::after {
        margin-top: 10px;
      }
    }
  }

  @media (min-width: $screen-lg) {
    .burger-container {
      display: none;
    }
  }
</style>
