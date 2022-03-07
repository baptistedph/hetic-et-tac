<script>
  import Title from './shared/Title.svelte'
  import Text from './shared/Text.svelte'
  import Wrapper from './shared/Wrapper.svelte'

  const email = 'contact@hetic-et-tac.fr'
</script>

<Wrapper>
  <div id="nous-contacter" class="contact-container">
    <div class="contact-box">
      <div class="contact-content">
        <Title size="md">Nous contacter</Title>
        <Text marginTop="20" color="gray"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor.</Text
        >
        <a href="mailto: {email}">
          <Text marginTop="40" color="white" size="lg">{email}</Text></a
        >
      </div>
    </div>
  </div>
</Wrapper>

<style lang="scss">
  @import '../scss/variables.scss';

  .contact-container {
    margin-top: 80px;

    .contact-box {
      background-color: $black;
      padding: 30px;

      .contact-content {
        max-width: 700px;
      }

      a {
        text-decoration: none;
      }
    }
  }

  @media (min-width: $screen-lg) {
    .contact-container {
      padding: 0 90px;
      margin-top: 190px;

      .contact-box {
        border-radius: 8px;
        padding: 40px;
      }
    }
  }
</style>
