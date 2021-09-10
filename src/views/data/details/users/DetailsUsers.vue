<template>
<div>
  <template v-if="!user">
    <div class="is-flex is-justify-content-space-between">
      <div class="is-flex is-align-items-center">
        <BButton
          class="is-round has-text-title has-shadow"
          icon-pack="fas"
          icon-right="arrow-left"
          type="is-white"
          @click="$router.go(-1)"
        />
        <div class="is-text-h2 has-text-title ml-4">{{ user }}</div>
      </div>
    </div>
    <BTabs
      v-model="tab"
      type="is-adamo-tab mt-4"
    >
    </BTabs>
  </template>
  <BLoading
    :active="loadingPage"
    is-full-page
  />
</div>
</template>

<script src="./DetailsUsers.ts" lang="ts"></script>
