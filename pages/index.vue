<script setup lang="ts">
// import productImage from "~/assets/foto.jpg";

useHead({
  meta: [
    {
      name: "description",
      content:
        "Hunneg is pure Groningse honing van een kleinschalige imkerij in het Westerkwartier. Onze bijen vliegen in Grootegast en Doezum.",
    },
  ],
  // script: [
  //   {
  //     type: "application/ld+json",
  //     textContent: JSON.stringify({
  //       "@context": "https://schema.org/",
  //       "@type": "Product",
  //       name: "Hunneg Voorjaarshoning 2025",
  //       image: productImage,
  //       description: "Pure voorjaarshoning uit het Groningse Westerkwartier (350 gram)",
  //       brand: {
  //         "@type": "Brand",
  //         name: "Hunneg",
  //       },
  //       offers: {
  //         "@type": "Offer",
  //         priceCurrency: "EUR",
  //         price: "5.00",
  //         priceValidUntil: "2025-12-31",
  //         itemCondition: "https://schema.org/NewCondition",
  //         availability: "https://schema.org/InStock",
  //       },
  //     }),
  //   },
  // ],
});
</script>

<template>
  <p class="my-12 text-center">
    Hunneg is pure Groningse honing van een kleinschalige imkerij in het Westerkwartier. Onze bijen vliegen in
    Grootegast en Doezum.
  </p>
  <img class="my-12 rounded-md shadow-md" src="~/assets/foto.jpg" alt="hunneg voorjaarshoning 2025" />
</template>
