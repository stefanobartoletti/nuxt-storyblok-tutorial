<template>
    <div class="py-24">
        <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{{ blok.headline }}</h2>
        <div class="container grid gap-12 mx-auto my-12 md:grid-cols-3 place-items-start">
            <ArticleCard v-for="article in blok.articles" :key="article.uuid" :article="article.content"
                :slug="article.full_slug" />
        </div>
    </div>
</template>
  
<script setup>
defineProps({ blok: Object })
</script>