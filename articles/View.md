---
layout: Layout
sidebar: false
lastUpdated: false
pageInfo: false
sitemap:
  exclude: false
  changefreq: hourly
  priority: 0.8
---

<!-- markdownlint-disable MD033 -->
<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePageData } from '@vuepress/client'
import MarkdownViewer from "@MarkdownViewer";
import NewsArticleHeader from "@NewsArticleHeader";
import UpdatePageTitle from "@UpdatePageTitle";

const route = useRoute()
const pageData = usePageData()
const title = ref<string>('Article Viewer')
const date = ref<string | null>(null)
const readingTime = ref<number | undefined>(undefined)
const tags = ref<string[]>([])
const heroImage = ref<string | null>(null)
const author = ref<string | null>(null)
const description = ref<string | null>(null)

// Helpers: normalize and sanitize
const normalize = (val: string) =>
  (val || '')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/^\"+|\"+$/g, '')
    .replace(/^'+|'+$/g, '')
    .replace(/\.html$/i, '')
    .trim()

const sanitize = (s: string) => (s || '')
  .replace(/[“”]/g, '"')
  .replace(/^["'`]+|["'`]+$/g, '')
  .trim()

const currentSlug = computed(() => normalize(String(route.query.article || '')))

interface NewsArticle {
  slug: string
  title?: string
  date?: string
  readingTime?: number
  tags?: string[]
  heroImage?: string | null
  cover?: string | null
  image?: string | null
  thumbnail?: string | null
  author?: string | null
  description?: string | null
  excerpt?: string | null
}

interface NewsIndexResponse {
  articles: NewsArticle[]
}

const tryLoadHeader = async () => {
  try {
    // Skip fetch during SSR
    if (typeof window === 'undefined') {
      return
    }
    const res = await fetch('/news-index.json', { cache: 'no-cache' })
    if (!res.ok) return
    const data: NewsIndexResponse = await res.json()
    const slug = currentSlug.value
    const found = (data.articles || []).find((a: NewsArticle) => normalize(a.slug) === slug)
    if (found) {
      if (found.title) title.value = sanitize(found.title)
      if (found.date) date.value = found.date
      if (found.readingTime) readingTime.value = found.readingTime
      if (Array.isArray(found.tags)) tags.value = found.tags
      heroImage.value = found.heroImage || found.cover || found.image || found.thumbnail || null
      author.value = found.author || null
      description.value = found.description || found.excerpt || null
      document.title = `${title.value} | RedOracle`
      // Update breadcrumb/current page title reactively
      if (pageData?.value) pageData.value.title = title.value
    } else {
      // Fallback when no metadata found
      title.value = sanitize(slug)
      date.value = null
      readingTime.value = undefined
      tags.value = []
      heroImage.value = null
      author.value = null
      description.value = null
      if (pageData?.value) pageData.value.title = title.value
    }
  } catch (err) {
    console.error('[News/View] Failed to load article metadata:', err)
  }
}

watch(() => route.query.article, () => {
  // Reset to avoid stale header between navigations
  title.value = 'Article Viewer'
  date.value = null
  readingTime.value = undefined
  tags.value = []
  heroImage.value = null
  author.value = null
  description.value = null
  tryLoadHeader()
}, { immediate: true })
</script>

<ClientOnly>
  <UpdatePageTitle :title="title" :key="`title-${currentSlug}`" />
  <NewsArticleHeader
    :title="title"
    :date="date"
    :reading-time="readingTime"
    :tags="tags"
    :hero-image="heroImage"
    :author="author"
    :slug="currentSlug"
    :key="`header-${currentSlug}`"
  />
  <MarkdownViewer :key="`content-${currentSlug}`" :skip-first-image-matching="heroImage" />
</ClientOnly>
<!-- markdownlint-enable MD033 -->
