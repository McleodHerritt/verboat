<script>
 import { onMount } from 'svelte';

export const title = "My App";

onMount(() => {
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
  });
});
 
</script>

<header>
  <div class="logo-container">
    <img src="images/homePage/VerboatLogo02.png" alt="Logo" />
    <p>VerBoat</p>
  </div>
  <div class="header-right">
    <nav>
      <ul class="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/addSurvey">Add Survey</a></li>
        <li><a href="aboutus.html">About Us</a></li>
        <li><a href="resources.html">Resources</a></li>
      </ul>
    </nav>
    <button>Login/Sign Up</button>
  </div>
  <button class="menu-toggle">☰</button>
</header>
