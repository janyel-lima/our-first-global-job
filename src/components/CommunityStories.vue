<template>
  <section id="stories" class="py-20 bg-[#e6ecf5] dark:bg-[#0c122b] transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-ofgj-emerald border border-slate-300 shadow-sm dark:bg-ofgj-emerald/10 dark:text-ofgj-emerald dark:border-ofgj-emerald/20">
          {{ t.stories.tag }}
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t.stories.title }}
        </h2>
        <p class="text-base sm:text-lg text-slate-700 dark:text-ofgj-slate">
          {{ t.stories.subtitle }}
        </p>
      </div>

      <!-- Testimonial Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        <div 
          v-for="story in t.stories.items" 
          :key="story.id"
          class="p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl bg-white border-slate-300/80 dark:bg-[#121b3d] dark:border-ofgj-azure/30 flex flex-col justify-between"
        >
          <div class="space-y-4">
            <!-- Stars -->
            <div class="flex items-center gap-1 text-amber-400">
              <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400" />
            </div>

            <!-- Testimonial text -->
            <p class="text-sm sm:text-base text-slate-700 dark:text-ofgj-slate leading-relaxed italic">
              "{{ story.quote }}"
            </p>
          </div>

          <!-- Member Profile -->
          <div class="mt-8 pt-4 border-t border-slate-200 dark:border-ofgj-azure/20 flex items-center gap-4">
            <div class="w-12 h-12 rounded-full font-bold flex items-center justify-center text-white bg-gradient-to-br from-ofgj-azure to-ofgj-emerald text-lg shadow-md shrink-0">
              {{ story.initials }}
            </div>
            <div>
              <h4 class="text-base font-extrabold text-slate-900 dark:text-white">
                {{ story.name }}
              </h4>
              <p class="text-xs font-medium text-ofgj-azure dark:text-ofgj-cyan">
                {{ story.role }} • {{ story.companyLocation }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n';
import { Star } from 'lucide-vue-next';

const { t } = useI18n();
</script>
