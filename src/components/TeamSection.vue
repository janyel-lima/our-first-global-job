<template>
  <section id="team" class="py-20 relative overflow-hidden transition-colors duration-300 bg-white/70 dark:bg-[#090e23] border-t border-b border-slate-200/80 dark:border-ofgj-azure/20">
    <!-- Background Accents -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-ofgj-azure/10 dark:bg-ofgj-azure/15 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-ofgj-emerald/10 dark:bg-ofgj-emerald/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <!-- Tag Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-ofgj-azure/10 text-ofgj-royal dark:bg-ofgj-azure/20 dark:text-ofgj-cyan mb-4 border border-ofgj-azure/20">
            <Users class="w-3.5 h-3.5" />
            <span>{{ t.team.tag }}</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {{ t.team.title }}
          </h2>

          <p class="mt-3 text-base sm:text-lg text-slate-600 dark:text-ofgj-slate max-w-2xl leading-relaxed">
            {{ t.team.subtitle }}
          </p>
        </div>

        <!-- Carousel Controls (Prev/Next & Counter) -->
        <div class="flex items-center gap-3 self-start md:self-end shrink-0">
          <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2 font-mono">
            0{{ currentIndex + 1 }} / 0{{ members.length }}
          </span>

          <button 
            @click="prevSlide" 
            class="p-3 rounded-2xl border transition-all duration-200 bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm dark:bg-[#162146] dark:hover:bg-[#1e2d5c] dark:border-ofgj-azure/40 dark:text-white dark:shadow-none hover:scale-105 active:scale-95 disabled:opacity-40"
            :aria-label="t.team.prevLabel"
          >
            <ChevronLeft class="w-5 h-5" />
          </button>

          <button 
            @click="nextSlide" 
            class="p-3 rounded-2xl border transition-all duration-200 bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm dark:bg-[#162146] dark:hover:bg-[#1e2d5c] dark:border-ofgj-azure/40 dark:text-white dark:shadow-none hover:scale-105 active:scale-95"
            :aria-label="t.team.nextLabel"
          >
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Carousel Container -->
      <div 
        class="relative overflow-hidden rounded-3xl p-3 -m-3"
        @mouseenter="pauseAutoPlay"
        @mouseleave="startAutoPlay"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- Slides Track -->
        <div 
          class="flex transition-transform duration-500 ease-out gap-6 py-2"
          :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }"
        >
          <div 
            v-for="(member, idx) in members" 
            :key="member.id || idx"
            class="w-full md:w-1/2 lg:w-1/3 shrink-0 flex p-1"
          >
            <!-- Member Card -->
            <div class="w-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white text-slate-900 border border-slate-200/90 shadow-lg hover:shadow-xl dark:bg-[#121a3a] dark:text-white dark:border-ofgj-azure/30 transition-all duration-300 hover:-translate-y-1.5 group">
              
              <div>
                <!-- Top Card Bar: Avatar & Badge -->
                <div class="flex items-start justify-between gap-4 mb-6">
                  <div class="relative shrink-0">
                    <img 
                      :src="member.avatar" 
                      :alt="member.name" 
                      class="w-20 h-20 rounded-2xl object-cover ring-4 ring-ofgj-emerald/20 group-hover:ring-ofgj-emerald/50 transition-all duration-300 shadow-md"
                    />
                    <div class="absolute -bottom-1 -right-1 p-1 rounded-full bg-ofgj-emerald text-ofgj-navy shadow-md">
                      <Sparkles class="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-ofgj-navy dark:text-ofgj-cyan border border-slate-200 dark:border-ofgj-azure/40 shrink-0">
                    {{ member.badge }}
                  </span>
                </div>

                <!-- Name & Role -->
                <h3 class="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-ofgj-azure dark:group-hover:text-ofgj-emerald transition-colors">
                  {{ member.name }}
                </h3>

                <p class="text-xs font-bold text-ofgj-royal dark:text-ofgj-cyan mt-1 flex items-center gap-1.5">
                  <Briefcase class="w-3.5 h-3.5 shrink-0" />
                  <span>{{ member.role }}</span>
                </p>

                <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <MapPin class="w-3 h-3 text-ofgj-emerald shrink-0" />
                  <span>{{ member.location }}</span>
                </p>

                <!-- Bio -->
                <p class="mt-4 text-xs sm:text-sm text-slate-600 dark:text-ofgj-slate leading-relaxed">
                  {{ member.bio }}
                </p>
              </div>

              <!-- Card Footer: Skill Tags & Social Links -->
              <div class="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                <!-- Tags -->
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="tag in member.tags" 
                    :key="tag" 
                    class="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 dark:bg-[#1b2652] text-slate-600 dark:text-slate-300"
                  >
                    #{{ tag }}
                  </span>
                </div>

                <!-- Social Contacts -->
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    Conectar com {{ member.name.split(' ')[0] }}
                  </span>

                  <div class="flex items-center gap-2">
                    <a 
                      v-if="member.github" 
                      :href="member.github" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="GitHub"
                    >
                      <Github class="w-4 h-4" />
                    </a>

                    <a 
                      v-if="member.linkedin" 
                      :href="member.linkedin" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-ofgj-azure dark:hover:text-ofgj-cyan hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin class="w-4 h-4" />
                    </a>

                    <a 
                      v-if="member.email" 
                      :href="`mailto:${member.email}`" 
                      class="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-ofgj-emerald hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Email"
                    >
                      <Mail class="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Pagination Indicators & Call to Action -->
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-200/60 dark:border-slate-800">
        <!-- Pagination Dots -->
        <div class="flex items-center gap-2">
          <button 
            v-for="(_, index) in maxSteps" 
            :key="index"
            @click="currentIndex = index"
            class="h-2.5 rounded-full transition-all duration-300"
            :class="currentIndex === index ? 'w-8 bg-ofgj-emerald' : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>

        <!-- Join Team Callout -->
        <div class="flex items-center gap-4">
          <span class="text-xs text-slate-600 dark:text-ofgj-slate font-medium hidden md:inline">
            Quer apoiar como facilitador ou mentor?
          </span>
          <button 
            @click="$emit('open-join')"
            class="px-5 py-2.5 rounded-xl text-xs font-bold text-ofgj-navy bg-ofgj-emerald hover:bg-emerald-400 transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>{{ t.nav.volunteer }}</span>
            <HeartHandshake class="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from '../composables/useI18n';
import { 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  Briefcase, 
  MapPin, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail, 
  HeartHandshake 
} from 'lucide-vue-next';

defineEmits(['open-join']);

const { t } = useI18n();

const members = computed(() => t.value.team.members || []);

const currentIndex = ref(0);
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024);

const updateWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWidth);
    startAutoPlay();
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWidth);
    pauseAutoPlay();
  }
});

const itemsPerPage = computed(() => {
  if (windowWidth.value >= 1024) return 3;
  if (windowWidth.value >= 768) return 2;
  return 1;
});

const maxSteps = computed(() => {
  const total = members.value.length;
  const perPage = itemsPerPage.value;
  return Math.max(1, total - perPage + 1);
});

const nextSlide = () => {
  if (currentIndex.value < maxSteps.value - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = maxSteps.value - 1;
  }
};

// Auto-play feature
let autoPlayTimer: any = null;

const startAutoPlay = () => {
  pauseAutoPlay();
  autoPlayTimer = setInterval(() => {
    nextSlide();
  }, 6000);
};

const pauseAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

// Touch swipe handling
let touchStartX = 0;

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.touches[0].clientX;
  pauseAutoPlay();
};

const handleTouchEnd = (e: TouchEvent) => {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > 40) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
  startAutoPlay();
};
</script>
