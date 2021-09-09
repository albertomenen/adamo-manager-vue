<template>
<div>
  <template v-if="group">
    <div class="is-flex is-justify-content-space-between">
      <div class="is-flex is-align-items-center">
        <BButton
          class="is-round has-text-title has-shadow"
          icon-pack="fas"
          icon-right="arrow-left"
          type="is-white"
          @click="$router.go(-1)"
        />
        <div class="is-text-h2 has-text-title ml-4">{{ group.group_name }}</div>
      </div>
      <div
        v-if="getGroupEditContext"
        class="has-gap-x-2"
      >
        <BButton
          class="has-text-title has-shadow"
          :label="$t('actions.cancel')"
          rounded
          type="is-white"
          @click="cancelGroupUpdate"
        />
        <BButton
          class="has-text-white has-shadow"
          icon-pack="fas"
          :label="$t('actions.saveChanges')"
          rounded
          type="is-orange"
          @click="updateGroup"
        />
      </div>
      <div
        v-if="getLocationEditContext"
        class="has-gap-x-2"
      >
        <BButton
          class="has-text-title has-shadow"
          :label="$t('actions.cancel')"
          rounded
          type="is-white"
          @click="cancelLocationUpdate"
        />
        <BButton
          class="has-text-white has-shadow"
          icon-pack="fas"
          :label="$t('actions.saveChanges')"
          rounded
          type="is-orange"
          @click="updateLocation"
        />
      </div>
      <div
        v-if="(tab === 1) && !getGroupEditContext && !getLocationEditContext"
      >
        <BButton
          class="has-text-white has-shadow"
          icon-pack="fas"
          icon-right="plus"
          :label="$t('locations.new')"
          rounded
          type="is-orange"
          @click="handleNewLocation"
        />
      </div>
    </div>

    <BTabs
      v-model="tab"
      type="is-adamo-tab mt-4"
    >
      <BTabItem
        v-if="!getLocationEditContext"
        icon="hospital-alt"
        icon-pack="fas"
        :label="$tc('groups.num', 1)"
      >
        <InfoGroup
          :data="group"
        />
      </BTabItem>
      <BTabItem
        v-if="!getGroupEditContext"
        icon="clinic-medical"
        icon-pack="fas"
        :label="$tc('locations.num', 2)"
      >
        <InfoLocations
          :data="group.locations"
        />
      </BTabItem>
    </BTabs>
  </template>
  <BLoading
    :active="loadingPage"
    is-full-page
  />
</div>
</template>

<script src="./GroupDetails.ts" lang="ts"></script>

<style src="./GroupDetails.scss" lang="scss"></style>
