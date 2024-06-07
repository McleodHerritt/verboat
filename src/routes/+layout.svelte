<script>
  import '../styles/reset.css';
  import '../styles/styles.css';
  import '../styles/linkPage.css';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  </script>
  
  <Header title="My SvelteKit App" />
  
  <slot />

  <Footer />
  