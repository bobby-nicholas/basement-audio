<script>
export let text = '',
           link = '#';

const go = () => {
  document.location.pushState({}, '', link);
  document.location.go();
}
</script>

<!-- <button class="h-20 border border-basement-green text-basement-green text-2xl bg-transparent my-4 hover:bg-black hover:text-gray-100 hover:border-gray-100"><a class="hover:no-underline px-2" href={link}>{text} &#8674;</a></button> -->
<div><a class="border border-basement-green text-basement-green text-2xl bg-transparent hover:bg-black hover:text-gray-100 hover:border-gray-100 hover:no-underline px-2" href={link}>{text} &#8674;</a></div>
<style>
a {
  font-variant: small-caps;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
div {
  margin:2rem 0;
}
</style>