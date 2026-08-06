<template>
  <div class="min-h-screen transition-colors duration-300 bg-[#edf2f7] text-slate-900 dark:bg-[#0c122b] dark:text-white font-sans selection:bg-ofgj-emerald selection:text-ofgj-navy">
    <!-- Navigation Bar -->
    <Navbar @open-join="isJoinModalOpen = true" />

    <!-- Main Content Sections -->
    <main>
      <!-- Hero Header -->
      <HeroSection @open-join="isJoinModalOpen = true" />

      <!-- Obstacles & Core Narrative -->
      <ObstaclesSection />

      <!-- What You Will Find / Pillars -->
      <PillarsSection />

      <!-- Official App Showcase Section -->
      <AppShowcaseSection @open-join="isJoinModalOpen = true" />

      <!-- WhatsApp & Telegram Community Groups Section -->
      <CommunityGroupsSection @open-join="isJoinModalOpen = true" />

      <!-- Mission & Motto Section -->
      <MissionSection @open-join="isJoinModalOpen = true" />

      <!-- Community Stories & Impact -->
      <CommunityStories />
    </main>

    <!-- Footer -->
    <Footer @open-join="isJoinModalOpen = true" />

    <!-- Join / Volunteer Modal -->
    <JoinModal 
      :is-open="isJoinModalOpen" 
      @close="isJoinModalOpen = false" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from './composables/useTheme';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import ObstaclesSection from './components/ObstaclesSection.vue';
import PillarsSection from './components/PillarsSection.vue';
import AppShowcaseSection from './components/AppShowcaseSection.vue';
import CommunityGroupsSection from './components/CommunityGroupsSection.vue';
import MissionSection from './components/MissionSection.vue';
import CommunityStories from './components/CommunityStories.vue';
import Footer from './components/Footer.vue';
import JoinModal from './components/JoinModal.vue';

// Initialize Theme
useTheme();

const isJoinModalOpen = ref(false);
</script>
