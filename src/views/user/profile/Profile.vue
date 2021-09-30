<template>
<div>
  <div class="is-flex is-justify-content-space-between">
    <div class="is-flex is-align-items-center">
      <BButton
        class="is-round has-text-title has-shadow"
        icon-pack="fas"
        icon-right="arrow-left"
        type="is-white"
        @click="$router.go(-1)"
      />
      <div class="is-text-h2 has-text-title ml-4">{{ $t('userMenu.conf') }}</div>
    </div>
  </div>

  <AformUserProfile
    class="mb-8"
    :user="user"
    @save="saveProfile"
  />
  <BLoading
    :active="isLoading"
    is-full-page
  />
</div>
</template>

<script src="./Profile.ts" lang="ts"></script>
