<template>
    <div v-editable="blok" class="min-h-[480px] relative flex items-end justify-center overflow-hidden"
        :class="heroClasses">
        <div class="relative z-10 w-full py-6 text-center bg-gradient-to-t from-black/70 via-black/50 to-transparent">
            <h1 class="mb-3 text-6xl font-bold text-white">
                {{ blok.headline }}
            </h1>
            <h2 class="text-4xl font-light text-white">
                {{ blok.subheadline }}
            </h2>
        </div>
        <img :src="blok.background_image.filename" :alt="blok.background_image.alt"
            class="absolute top-0 left-0 z-0 object-cover w-full h-full" />
    </div>
</template>
  
<script setup>
const props = defineProps({ blok: Object })
const heroClasses = computed(() => {
    return props.blok.layout === 'constrained' ? 'container mx-auto my-6 rounded-[5px]' : ''
})
</script>