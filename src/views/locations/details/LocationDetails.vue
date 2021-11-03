<template>
<div>
  <template v-if="location">
    <div class="is-flex is-justify-content-space-between">
      <div class="is-flex is-align-items-center">
        <BButton
          class="is-round has-text-title has-shadow"
          icon-pack="fas"
          icon-right="arrow-left"
          type="is-white"
          @click="$router.go(-1)"
        />
        <div class="is-text-h2 has-text-title ml-4">{{ location.location_name }}</div>
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
        v-if="(tab === 1) && !getLocationEditContext"
      >
        <BButton
          class="has-text-white has-shadow"
          icon-pack="fas"
          icon-right="plus"
          :label="$t('newStation')"
          rounded
          type="is-orange"
          @click="handleNewStation"
        />
      </div>
    </div>

    <BTabs
      v-model="tab"
      type="is-adamo-tab mt-4"
    >
      <BTabItem
        v-if="!getStationEditContext"
        icon="hospital-alt"
        icon-pack="fas"
        :label="$t('fields.information')"
      >
        <InfoLocation :location="location" />
      </BTabItem>
      <BTabItem
        v-if="!getLocationEditContext"
        icon="clinic-medical"
        icon-pack="fas"
        :label="$t('stations')"
      >
        <TableStations
          :data="stations"
          @station:delete="deleteStation" />
      </BTabItem>
    </BTabs>
  </template>
  <BLoading
    :active="loadingPage"
    is-full-page
  />
</div>
</template>

<script src="./LocationDetails.ts" lang="ts"></script>

<style src="./LocationDetails.scss" lang="scss"></style>
