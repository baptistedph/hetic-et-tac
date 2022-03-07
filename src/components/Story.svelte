<script>
  import Title from './shared/Title.svelte'
  import Text from './shared/Text.svelte'
</script>

<div id="notre-histoire" class="story-container">
  <div class="story-content">
    <Title size="md" color="blue">Notre histoire</Title>
    <Text color="blue" marginTop="20"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
      sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem
      ipsum dolor sit amet,<br /><br />consectetur adipiscing elit ut aliquam,
      purus sit amet luctus venenatis, Lectus magna fringilla urna, porttitor
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
      sit amet luctus venenatis, lectus magna fringilla urna, porttitor</Text
    >
    <Text marginTop="20" color="blue" align="right"
      >Frédéric - Le directeur</Text
    >
  </div>
</div>

<style lang="scss">
  @import '../scss/variables.scss';

  .story-container {
    padding: 0 24px;
    display: flex;
    justify-content: center;
    margin-top: 80px;

    .story-content {
      max-width: 700px;
    }
  }

  @media (min-width: $screen-lg) {
    .story-container {
      padding: 0 90px;
    }
  }
</style>
