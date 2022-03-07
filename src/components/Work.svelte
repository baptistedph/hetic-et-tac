<script>
  import Title from './shared/Title.svelte'
  import Text from './shared/Text.svelte'
  import Button from './shared/Button.svelte'
  import Card from './shared/Card.svelte'
  import Wrapper from './shared/Wrapper.svelte'

  const cards = [
    {
      id: 1,
      title: 'Cuisinier',
      subtitle: 'CDI - Paris XV',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    },
    {
      id: 2,
      title: 'Serveur',
      subtitle: 'Alternance - Montreuil',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    },
  ]
</script>

<Wrapper>
  <div id="travailler-avec-nous" class="work-container">
    <div class="work-header">
      <Title size="md" color="blue">Travailler avec nous</Title>
      <Text color="blue" marginTop="20"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.</Text
      >
      <Button marginTop="40">Explorer toutes nos offres</Button>
    </div>
    <div class="cards-container">
      {#each cards as card}
        <Card
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
        />
      {/each}
    </div>
  </div>
</Wrapper>

<style lang="scss">
  @import '../scss/variables.scss';

  .work-container {
    margin-top: 80px;
    padding: 0 24px;

    .work-header {
      max-width: 500px;
    }

    .cards-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 60px;
    }
  }

  @media (min-width: $screen-lg) {
    .work-container {
      display: flex;
      padding: 0 90px;
      gap: 100px;
      margin-top: 190px;

      .cards-container {
        margin-top: 0;
      }
    }
  }
</style>
