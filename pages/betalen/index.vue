<script setup lang="ts">
const amount = ref(1);
const price = 5.5;

const totalPrice = computed(() => amount.value * price);
const href = computed(
  () =>
    `https://bunq.me/hunneg/${totalPrice.value}/${amount.value} ${amount.value === 1 ? "pot" : "potten"} hunneg/ideal`
);
</script>

<template>
  <div class="max-w-xs mx-auto">
    <div class="my-8 flex bg-white border-gray-400 shadow-sm border-1 rounded-md text-2xl leading-16 overflow-hidden">
      <span v-if="amount == 1" class="flex-3/12"></span>
      <span v-else-if="!Number.isInteger(amount)" class="flex-2/12"></span>
      <span
        v-else
        class="flex-2/12 text-center cursor-pointer select-none hover:bg-gray-100 transition-colors"
        v-on:click="amount -= 1"
        >-</span
      >
      <input class="flex-3/12 text-right w-full outline-0" v-model.number="amount" />
      <span class="flex-5/12 text-left select-none">&nbsp;{{ amount == 1 ? "pot" : "potten" }}</span>
      <span v-if="!Number.isInteger(amount)" class="flex-2/12"></span>
      <span
        v-else
        class="flex-2/12 text-center cursor-pointer select-none hover:bg-gray-100 transition-colors"
        v-on:click="amount += 1"
        >+</span
      >
    </div>

    <a
      v-if="totalPrice > 0"
      class="block text-center bg-green-600 hover:bg-green-700 shadow-sm transition-all text-white rounded-md py-4 px-1 my-8 font-semibold"
      :href
      >€ {{ totalPrice }} betalen met iDEAL</a
    >

    <div class="text-center my-8">
      <span v-for="_ in amount" class="text-4xl">🍯</span>
    </div>
  </div>
</template>
