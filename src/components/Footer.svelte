<script>
  import Title from './shared/Title.svelte'
  import Text from './shared/Text.svelte'
  import { slug } from '../lib/slug'
  import { links as linksStore } from '../stores/links.js'
  import { onDestroy } from 'svelte'
  import Wrapper from './shared/Wrapper.svelte'

  let links

  const unsubscribe = linksStore.subscribe(l => {
    links = l
  })

  onDestroy(() => unsubscribe())
</script>

<Wrapper>
  <footer>
    <nav>
      <Title size="md" color="blue"
        ><span style="text-transform: uppercase;">Logo</span></Title
      >
      <ul>
        {#each links as link, i}
          {#if i < 3}
            <li>
              <a href="#{slug(link)}">
                <Text hover size="sm" color="blue">{link}</Text>
              </a>
            </li>
          {/if}
        {/each}
      </ul>
      <ul>
        {#each links as link, i}
          {#if i > 2}
            <li>
              <a href="#{slug(link)}">
                <Text hover size="sm" color="blue">{link}</Text>
              </a>
            </li>
          {/if}
        {/each}
        <li style="cursor: pointer">
          <Text hover size="sm" color="blue">Mentions légales</Text>
        </li>
      </ul>
    </nav>
    <div>
      <Text size="sm" marginTop="40" color="blue"
        >&copy; 2022 - Hetic & Tac</Text
      >
      <Text size="sm" marginTop="20" color="blue">Réalisé par Baptiste D.</Text>
    </div>
  </footer>
</Wrapper>

<style lang="scss">
  @import '../scss/variables.scss';

  footer {
    margin-top: 80px;
    margin-bottom: 40px;
    padding: 0 24px;

    nav {
      display: flex;
      flex-direction: column;
      gap: 40px;

      ul {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &:first-child {
          margin-top: 40px;
        }

        li {
          a {
            text-decoration: none;
          }
        }
      }
    }
  }

  @media (min-width: $screen-md) {
    footer {
      margin-top: 190px;

      nav {
        flex-direction: row;
        justify-content: space-between;

        + div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 100px;
        }
      }
    }
  }

  @media (min-width: $screen-lg) {
    footer {
      padding: 0 90px;
    }
  }
</style>
