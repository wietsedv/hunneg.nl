<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return typeof route.params.amount === 'string' && /^\d+$/.test(route.params.amount)
  }
})

const route = useRoute();

const price = 6;
const amount =  Number.parseInt(Array.isArray(route.params.amount) ? route.params.amount[0] : route.params.amount);

const totalPrice = price * amount;

navigateTo(`https://bunq.me/hunneg/${totalPrice}/${amount} ${amount === 1 ? "pot" : "potten"} hunneg/ideal`, {external: true})
</script>
