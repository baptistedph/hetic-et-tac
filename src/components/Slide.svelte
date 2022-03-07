<script>
  export let bgUrl
</script>

<div style="background-image: url({bgUrl})" />

<style lang="scss">
  @import '../scss/variables.scss';

  div {
    min-width: 200px;
    height: 100%;
    background-size: cover;
  }

  @media (min-width: $screen-lg) {
    div {
      min-width: 350px;
    }
  }
</style>
