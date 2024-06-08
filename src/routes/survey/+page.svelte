<script>
    import { onMount } from 'svelte';
    import { surveyData } from '$lib/data.js';
    import { writable } from 'svelte/store';
  
    export let editable = false;
  
    let boatDetails = writable(surveyData[0]);
  
    const formatPrice = (price) => `$${parseInt(price).toLocaleString().replace(/,/g, ' ')}`;
  
    let functionalEquipments = [];
  
    $: functionalEquipments = Object.keys($boatDetails.sections?.hull?.['Functional Equinment'] || {}).map(key => ({
      key,
      step: $boatDetails.sections.hull['Functional Equinment'][key].steps[0] || '',
      images: $boatDetails.sections.hull['Functional Equinment'][key].images || []
    }));
  
    function updateStep(sectionKey, value) {
      boatDetails.update(details => {
        if (details.sections.hull['Functional Equinment'][sectionKey]) {
          details.sections.hull['Functional Equinment'][sectionKey].steps[0] = value;
        }
        return details;
      });
      functionalEquipments = functionalEquipments.map(equip => 
        equip.key === sectionKey ? { ...equip, step: value } : equip
      );
    }
  </script>
  
  <div class="container">
    <div class="survey-header">
        <h1>VerBoat.com</h1>
        <img src="/images/homePage/VerboatLogo02.png" alt="VerBoat Logo" class="survey-logo"/>
        <h1>Boat Inspection</h1>
    </div>
    <main>
      <section class="boat-section">
        <div class="main-info-container">
          {#if editable}
            <input type="text" bind:value={$boatDetails.boat_make} placeholder="Boat Make" class="input-field" />
            <input type="text" bind:value={$boatDetails.boat_model} placeholder="Boat Model" class="input-field" />
            <input type="text" bind:value={$boatDetails.length} placeholder="Length" class="input-field" />
            <input type="text" bind:value={$boatDetails.year} placeholder="Year" class="input-field" />
            <input type="text" bind:value={$boatDetails.price} placeholder="Price" class="input-field" />
            <input type="text" bind:value={$boatDetails.city} placeholder="City" class="input-field" />
            <input type="text" bind:value={$boatDetails.owner_contact} placeholder="Owner Contact" class="input-field" />
            <input type="text" bind:value={$boatDetails.created_at} placeholder="Created At" class="input-field" />
  
            {#each functionalEquipments as { key, step, images } (key)}
              <textarea
                bind:value={step}
                on:input={(e) => updateStep(key, e.target.value)}
                placeholder="{key} Description"
                class="textarea-field"></textarea>
              {#if images.length > 0}
                <div class="images-container">
                  {#each images as image}
                    <img src={image} alt="{key} image" class="functionalEquipment__image"/>
                  {/each}
                </div>
              {:else}
                <div class="images-placeholder">
                  <p>No images available</p>
                </div>
              {/if}
            {/each}
          {:else}
            <h1 class="boat-name">{$boatDetails.boat_make} {$boatDetails.boat_model}</h1>
            <p class="boat-length">{$boatDetails.length} ft / {$boatDetails.year}</p>
            <p class="boat-price">{formatPrice($boatDetails.price)}</p>
            <p class="boat-city">City: {$boatDetails.city}</p>
            <p class="boat-owner">Owner Contact: {$boatDetails.owner_contact}</p>
            <p class="boat-created-at">Created At: {$boatDetails.created_at}</p>
            <h2 class="section-title">Boat Hull</h2>
  
            <h3>Functional Equipment</h3>
            <div class="survey-section-container">
                {#each functionalEquipments as { key, step, images } (key)}
                <div class="survey-images-container">
            {#if images.length > 0}
                  {#each images as image}
                    <img src={image} alt="{key} image" class="functionalEquipment__image"/>
                  {/each}
              {:else}
                <div class="images-placeholder">
                  <img src="https://placehold.co/700x500" alt="{key} image" class=""/>
                </div>
              {/if}  
            <p class="functionalEquipment__key">{key}</p>
              <p class="functionalEquipment__step">{step}</p>
              
              </div>
            {/each}
        </div>
        {/if}
        </div>
      </section>
    </main>
  </div>

  