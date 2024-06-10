<script>
    import { onMount } from 'svelte';
    import { surveyData } from '$lib/data.js';
    import { writable } from 'svelte/store';
  
    export let editable = true;
  
    let boatDetails = writable(surveyData[0]);
  
    const formatPrice = (price) => `$${parseInt(price).toLocaleString().replace(/,/g, ' ')}`;
  
    let hullSections = [];
  
    $: hullSections = Object.entries($boatDetails.sections?.hull || {}).map(([sectionKey, sectionValue]) => ({
      sectionKey,
      items: Object.entries(sectionValue || {}).map(([key, value]) => ({
        key,
        ...value,
        images: value.images || [],  // Ensure images is an array
        steps: value.steps || []     // Ensure steps is an array
      })),
    }));
  
    function updateStep(sectionKey, itemKey, value) {
      boatDetails.update(details => {
        if (details.sections.hull[sectionKey]?.[itemKey]) {
          details.sections.hull[sectionKey][itemKey].steps[0] = value;
        }
        return details;
      });
      hullSections = hullSections.map(section =>
        section.sectionKey === sectionKey
          ? {
              ...section,
              items: section.items.map(item =>
                item.key === itemKey ? { ...item, steps: [value] } : item
              ),
            }
          : section
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
  
            {#each hullSections as { sectionKey, items } (sectionKey)}
              <h2 class="section-title">{sectionKey}</h2>
              {#each items as { key, steps, images } (key)}
                <textarea
                  bind:value={steps[0]}
                  on:input={(e) => updateStep(sectionKey, key, e.target.value)}
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
            {/each}
          {:else}
            <h1 class="boat-name">{$boatDetails.boat_make} {$boatDetails.boat_model}</h1>
            <p class="boat-length">{$boatDetails.length} ft / {$boatDetails.year}</p>
            <p class="boat-price">{formatPrice($boatDetails.price)}</p>
            <p class="boat-city">City: {$boatDetails.city}</p>
            <p class="boat-owner">Owner Contact: {$boatDetails.owner_contact}</p>
            <p class="boat-created-at">Created At: {$boatDetails.created_at}</p>
            <h2 class="section-title">Boat Hull</h2>
  
            {#each hullSections as { sectionKey, items } (sectionKey)}
              <h3>{sectionKey}</h3>
              <div class="survey-section-container">
                {#each items as { key, steps, images } (key)}
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
                    <p class="functionalEquipment__step">{steps[0]}</p>
                  </div>
                {/each}
              </div>
            {/each}
          {/if}
        </div>
      </section>
      <div class="survey-footer">
       
        <img src="/images/homePage/VerboatLogo02.png" alt="VerBoat Logo" class="survey-logo"/>
       
      </div>
    </main>
  </div>
  