<script>
  import Text from './Text.svelte'
  import Button from './Button.svelte'

  const desktop = window.innerWidth > 1024

  export let title
  export let subtitle
  export let description
  export let buttonText = 'Intéressé ?'
</script>

<div>
  <Text size="lg" color="white">{title}</Text>
  <Text>{subtitle}</Text>
  <Text marginTop="20">{description}</Text>
  <Button marginTop={desktop ? 40 : 30} invert>{buttonText}</Button>
</div>

<style lang="scss">
  @import '../../scss/variables.scss';

  div {
    background-color: $black;
    flex: 1;
    min-width: 250px;
    padding: 20px;
    border-radius: 8px;
  }

  @media (min-width: $screen-md) {
    div {
      min-width: 300px;
    }
  }
</style>
