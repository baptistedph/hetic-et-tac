<script>
  import Title from './shared/Title.svelte'
  import Text from './shared/Text.svelte'
  import Slides from './Slides.svelte'
  import Wrapper from './shared/Wrapper.svelte'
</script>

<Wrapper>
  <div id="nos-burgers" class="burgers-container">
    <div class="burger-header">
      <Title size="md" color="blue">Nos burgers</Title>
      <Text color="blue" marginTop="28"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.</Text
      >
    </div>
    <div class="slider-container">
      <Slides />
      <div class="shadow" />
      <img src="/images/arrow-white.svg" alt="arrow right" />
    </div>
  </div>
</Wrapper>

<style lang="scss">
  @import '../scss/variables.scss';

  .burgers-container {
    position: relative;
    margin-top: 80px;

    .burger-header {
      margin-bottom: 40px;
      padding: 0 24px;
    }

    .slider-container {
      height: 200px;
      position: relative;

      img {
        position: absolute;
        right: 24px;
        top: 50%;
        width: 30px;
        transform: translateY(-50%);
      }

      .shadow {
        position: absolute;
        width: 100px;
        height: 100%;
        right: 0;
        top: 0;
        background-image: linear-gradient(to right, transparent, $black-70);
      }
    }
  }

  @media (min-width: $screen-lg) {
    .burgers-container {
      display: flex;
      align-items: center;
      overflow: hidden;
      gap: 100px;
      margin-top: 190px;
      justify-content: space-between;

      .burger-header {
        padding-left: 90px;
        max-width: 500px;
        margin-bottom: 0;
        padding-right: 0;
      }

      .slider-container {
        height: 350px;
        overflow: auto;

        img {
          width: 50px;
          right: 90px;
        }
      }
    }
  }

  @media (min-width: calc($max-width + 180px)) {
    .burgers-container {
      padding-right: 90px;
    }
  }
</style>
