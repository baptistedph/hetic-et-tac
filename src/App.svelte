<script>
  import Navbar from './components/Navbar.svelte'
  import Hero from './components/Hero.svelte'
  import Story from './components/Story.svelte'
  import Burgers from './components/Burgers.svelte'
  import Work from './components/Work.svelte'
  import Restaurants from './components/Restaurants.svelte'
  import Contact from './components/Contact.svelte'
  import Footer from './components/Footer.svelte'
</script>

<div>
  <Navbar />
  <Hero />
  <Story />
  <Burgers />
  <Work />
  <Restaurants />
  <Contact />
  <Footer />
</div>

<style>
  div {
    overflow-x: hidden;
  }
</style>
