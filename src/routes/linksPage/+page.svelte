<script>
    import {similarBoats, linkPageData} from '$lib/data.js';
    import { goto } from '$app/navigation';

    const formatPrice = (price) => `$${price.toLocaleString().replace(/,/g, ' ')}`;
</script>

<div class="container">
    <main>
        <section class="boat-section">
            <div class="main-image-container">
              <img src={linkPageData.img} alt={linkPageData.name} class="boat-image" />
            </div>
            <div class="main-info-container">
              <h1 class="boat-name">{linkPageData.boat_make}</h1>
              <p class="boat-length">{linkPageData.length} ft / {linkPageData.year}</p>
              <p class="boat-price">{formatPrice(linkPageData.price)}</p>
              <p class="boat-description">{linkPageData.description}</p>
              <button on:click={() => goto('/survey')} class="survey-button">Open Survey</button>
             
            <h2 class="survey-fee">Survey access fee is 10$</h2>
            </div>
          </section>
      <h2 class=similar-category>Similar Category</h2>
      <div class="cards-container" id="similar-boats-container">
        {#each similarBoats as boat}
        <div class="card-info">
            <img src={boat.img} alt={boat.name} />
            <h2>{boat.boat_make}</h2>
            <p>{boat.length} ft</p>
            <div class="location-year">
              <p>{boat.location.city}, {boat.location.state}</p>
              <p>{boat.year}</p>
            </div>
            <p>{formatPrice(boat.price)}</p>
          </div>
        
      {/each}
      </div>
    </main>
  </div>