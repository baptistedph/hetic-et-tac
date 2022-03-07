<script>
  import Slide from './Slide.svelte'

  let slidesNumber = 4
</script>

<div class="slides">
  {#each Array(slidesNumber) as _, id}
    <Slide bgUrl="/images/burgers/burger-{id + 1}.jpg" />
  {/each}
</div>

<style lang="scss">
  @import '../scss/variables.scss';

  .slides {
    display: flex;
    gap: 20px;
    overflow: auto;
    padding-left: 24px;
    height: 100%;
  }

  @media (min-width: $screen-lg) {
    .slides {
      padding-left: 0;
    }
  }
</style>
