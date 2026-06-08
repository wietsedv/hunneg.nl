<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const price = config.public.price;

const amount = Number(route.params.amount);
const totalPrice = amount * price;

if (amount > 0 && Number.isFinite(totalPrice)) {
  await navigateTo(
    `https://bunq.me/hunneg/?amount=${totalPrice}&paymentMethod=IDEAL`,
    { external: true },
  );
}
</script>
