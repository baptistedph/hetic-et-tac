<script>
  import Text from './shared/Text.svelte'
  import Burger from './Burger.svelte'
  import Wrapper from './shared/Wrapper.svelte'
  import { fade } from 'svelte/transition'
  import { slug } from '../lib/slug'
  import { links as linksStore } from '../stores/links.js'
  import { onDestroy } from 'svelte'

  const desktop = window.innerWidth > 1024

  let opened = desktop

  let links

  const unsubscribe = linksStore.subscribe(l => {
    links = l
  })

  const toggle = () => {
    if (!desktop) {
      opened = !opened
    }
  }

  onDestroy(() => unsubscribe())
</script>

<nav>
  <Wrapper>
    <div>
      <h1>Logo</h1>
      {#if opened}
        <ul transition:fade={{ duration: 200 }}>
          {#each links as link}
            <li>
              <a on:click={toggle} href="#{slug(link)}"
                ><Text hover color="gray" size="sm">{link}</Text></a
              >
            </li>
          {/each}
        </ul>
      {/if}
      <Burger {opened} on:toggle={toggle} />
    </div>
  </Wrapper>
</nav>

<style lang="scss">
  @import '../scss/variables.scss';

  nav {
    position: fixed;
    width: 100%;
    background-color: $black;
    z-index: 99;
    gap: 40px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;

      h1 {
        font-size: $md;
        text-transform: uppercase;
        font-weight: 500;
        color: $white-70;
        line-height: 1.2em;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 30px;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: $black;
        z-index: -1;
        padding: 100px 24px;

        a {
          text-decoration: none;
        }
      }
    }
  }

  @media (min-width: $screen-lg) {
    nav {
      div {
        padding: 30px 90px;

        ul {
          flex-direction: row;
          gap: 20px;
          position: relative;
          height: auto;
          width: auto;
          padding: 0;
          z-index: 0;
        }
      }
    }
  }

  @media (min-width: $screen-xl) {
    nav {
      div {
        ul {
          gap: 40px;
        }
      }
    }
  }

  @media (min-width: calc($max-width + 180px)) {
    nav {
      div {
        padding: 30px 0;
      }
    }
  }
</style>
