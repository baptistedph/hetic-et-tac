<script>
  import Title from './shared/Title.svelte'
  import Text from './shared/Text.svelte'
  import Button from './shared/Button.svelte'
  import Wrapper from './shared/Wrapper.svelte'
  import { onDestroy, onMount } from 'svelte'

  const desktop = window.innerWidth > 1024

  let burgerImage

  let speed = desktop ? 0.35 : 0.1

  const parallax = () => {
    burgerImage.style.transform = `translate3d(0, ${
      window.scrollY * speed
    }px, 0)`
  }

  const discoverScroll = () => {
    window.scrollTo(0, window.innerHeight * 0.8)
  }

  onMount(() => {
    window.addEventListener('scroll', parallax)
  })

  onDestroy(() => {
    window.removeEventListener('scroll', parallax)
  })
</script>

<div class="hero-container">
  <div class="background" />
  <Wrapper>
    <div class="hero-content">
      <Title>Hetic & Tac</Title>
      <Text marginTop={desktop ? 0 : 12}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</Text
      >
      <Button on:click={discoverScroll} marginTop={desktop ? 50 : 40} invert
        >Découvrir</Button
      >
    </div>
    <img bind:this={burgerImage} src="/images/burger.png" alt="burger hero" />
  </Wrapper>
</div>

<style lang="scss">
  @import '../scss/variables.scss';

  .hero-container {
    min-height: min(100vh, 1200px);
    padding: 0 24px;
    position: relative;
    padding-top: 140px;

    .background {
      position: absolute;
      height: 80%;
      width: 100%;
      left: 0;
      top: 0;
      background-color: $black;
      z-index: -1;
      clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    }

    .hero-content {
      max-width: 700px;
      position: relative;
      z-index: 20;
    }

    img {
      width: min(100%, 500px);
      position: absolute;
      right: -20%;
      top: 80%;
      z-index: 10;
    }
  }

  @media (min-width: $screen-md) {
    .hero-container {
      padding: 0 90px;
      display: flex;
      align-items: center;

      .hero-content {
        margin-top: 0;
      }

      img {
        width: min(100%, 700px);
        right: -30%;
        top: -50%;
      }
    }
  }

  @media (min-width: $screen-xl) {
    .hero-container {
      img {
        right: -200px;
      }
    }
  }
</style>
