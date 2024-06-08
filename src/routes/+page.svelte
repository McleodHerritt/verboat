<script>
    import {data} from '$lib/data.js';

    const formatPrice = (price) => `$${price.toLocaleString().replace(/,/g, ' ')}`;
    
</script>


<div class="container">
    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>VerBoat: Your Trusted Platform for Verified Boat Surveys and Sales</h1>
          <p>
            At Verboat, we understand that buying and selling boats is a significant decision. Our mission is to provide a reliable, transparent,
            and user-friendly platform where boat enthusiasts, owners, and buyers can connect with confidence.
          </p>
          <form>
            <input type="text" placeholder="Boat Code" />
            <button>Find Boat</button>
          </form>
        </div>
      </section>
      <section>
        <div class="display-boats">
          <div class="boats-header">
            <h2>Boats</h2>
            <button>Filters</button>
          </div>
          <div class="cards-container" id="cards-container">
            {#each data as boat}
              <a href="/linksPage" class="card">
                <img src={boat.img} alt={boat.boat_make} />
                <div class="card-info">
                  <h2>{boat.boat_make} - {boat.length} ft</h2>
                  <div class="location-year">
                    <p>{boat.location.city}, {boat.location.state}</p>
                    <p>{boat.year}</p>
                  </div>
                  <p>{formatPrice(boat.price)}</p>
                </div>
              </a>
            {/each}
          </div>
          <button class="more-button">More</button>
        </div>
      </section>
    </main>

  </div>



  <style>
    
  </style>