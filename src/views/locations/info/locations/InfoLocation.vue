<template>
<div>
  <div
    class="content-wrapper"
  >
    <div
      :key="location.id_location"
      class="is-adamo-card-dark mt-4"
    >
      <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">{{ location.location_name }}</div>
        <BButton
          class="has-text-dark-blue"
          icon-pack="fas"
          icon-right="pen"
          type="is-ghost"
          @click="handleEditLocation(location)"
        />
      </div>
      <div class="columns is-multiline">
        <AInput
          v-model="location.city"
          class="column is-half"
          :placeholder="$t('fields.city')"
          :readonly="!getLocationEditContext"
        />
        <AInput
          v-model="location.town"
          class="column is-half"
          :placeholder="$t('fields.province')"
          :readonly="!getLocationEditContext"
        />
        <AInput
          v-model="location.address"
          class="column is-half"
          icon="map-marker-alt"
          icon-pack="fas"
          :placeholder="$t('fields.address')"
          :readonly="!getLocationEditContext"
        />
        <AInput
          v-model="location.phone"
          class="column is-half"
          icon="phone-alt"
          icon-pack="fas"
          :placeholder="$t('fields.phone')"
          :readonly="!getLocationEditContext"
        />
        <AInput
          v-model="location.email"
          class="column is-half"
          icon="envelope"
          icon-pack="far"
          :placeholder="$t('fields.email')"
          :readonly="!getLocationEditContext"
        />
        <AInput
          v-model="location.contact_name"
          class="column is-half"
          icon="user"
          icon-pack="fas"
          :placeholder="$t('fields.contactPerson')"
          :readonly="!getLocationEditContext"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script src="./InfoLocation.ts" lang="ts"></script>
