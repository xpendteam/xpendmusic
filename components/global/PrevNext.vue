<template>
  <div class="grid md:grid-2">
    <div>
      <NuxtLink
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="text-primary font-bold hover:underline"
      >
        <i class="fas fa-arrow-circle-left"></i> {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp; - &nbsp;</span>
    </div>
    <div class="right">
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="font-bold hover:underline"
      >
        {{ next.title }} <i class="fas fa-arrow-circle-right"></i>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>