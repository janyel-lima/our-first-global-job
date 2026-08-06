<template>
  <div class="inline-flex items-center gap-2 select-none group shrink-0">
    <!-- Icon Image Container -->
    <div class="relative flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 shrink-0" :class="sizeClasses">
      <img 
        :src="logoSrc" 
        :alt="`Logo ${variant}`" 
        class="w-full h-full object-contain drop-shadow-md"
      />
    </div>

    <!-- External Text Brand Label if requested -->
    <div v-if="withBrandName" class="flex flex-col shrink-0 whitespace-nowrap">
      <span class="font-extrabold tracking-tight text-base sm:text-lg leading-tight bg-gradient-to-r from-ofgj-cyan via-ofgj-azure to-ofgj-emerald bg-clip-text text-transparent dark:from-white dark:via-ofgj-cyan dark:to-ofgj-emerald whitespace-nowrap">
        Our First Global Job
      </span>
      <span class="text-[9px] sm:text-[10px] xl:text-[11px] font-semibold text-ofgj-emerald tracking-wider uppercase flex items-center gap-1 whitespace-nowrap shrink-0">
        <span>Practice</span>
        <span>•</span>
        <span>Grow</span>
        <span>•</span>
        <span>Go Global 🍀</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  variant?: 'header' | 'transparency' | 'footer';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBg?: boolean;
  withText?: boolean;
  withBrandName?: boolean;
}>(), {
  variant: 'header',
  size: 'md',
  showBg: false,
  withText: true,
  withBrandName: true
});

const logoSrc = computed(() => {
  switch (props.variant) {
    case 'transparency': return '/logo-transparency.svg';
    case 'footer': return '/logo-footer.svg';
    case 'header':
    default:
      return '/logo-header.svg';
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'w-9 h-9';
    case 'md': return 'w-12 h-12';
    case 'lg': return 'w-16 h-16';
    case 'xl': return 'w-24 h-24';
    default: return 'w-12 h-12';
  }
});
</script>
