<script>
export let item;
</script>
<figure class="flex flex-wrap mb-8 p-2 rounded-md">
  <div class="w-full md:w-1/4 md:m-auto">
    <img src={item.image} alt={item.reviewer} class="object-contain align-middle rounded-lg" />
  </div>
  <div class="w-full md:w-3/4 p-8 h-full align-middle m-auto">
    <p class="mb-4">{item.review}</p>
    — <cite>{item.reviewer}</cite>, <cite>{item.title}</cite>
  </div>
</figure>
<style>
figure {
  box-shadow:  2px 2px 10px #293241, 
             -2px -2px 10px #323d4f;
}
</style>