<script>
  import Title from './shared/Title.svelte'
  import Text from './shared/Text.svelte'
  import Wrapper from './shared/Wrapper.svelte'
</script>

<Wrapper>
  <div id="nos-restaurants" class="restaurants-container">
    <div class="restaurants-header">
      <Title size="md" color="blue">Nos restaurants</Title>
      <Text color="blue" marginTop="20"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.</Text
      >
    </div>
    <iframe
      title="Our restaurants"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47720.41492780665!2d2.3488845559181573!3d48.85865242912484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2sfr!4v1646605500288!5m2!1sen!2sfr"
      allowfullscreen=""
      loading="lazy"
    />
  </div>
</Wrapper>

<style lang="scss">
  @import '../scss/variables.scss';

  .restaurants-container {
    margin-top: 80px;
    padding: 0 24px;

    .restaurants-header {
      max-width: 500px;
    }

    iframe {
      width: 100%;
      height: 300px;
      margin-top: 40px;
      border-radius: 8px;
    }
  }

  @media (min-width: $screen-lg) {
    .restaurants-container {
      padding: 0 90px;
      display: flex;
      gap: 100px;
      margin-top: 190px;

      iframe {
        margin-top: 0;
        height: 450px;
      }
    }
  }
</style>
