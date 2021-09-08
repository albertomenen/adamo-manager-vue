<template>
<div>
  <div
    v-if="!getLocationEditContext"
    class="content-wrapper"
  >
    <div
      v-for="location in data"
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
          readonly
        />
        <AInput
          v-model="location.town"
          class="column is-half"
          :placeholder="$t('fields.province')"
          readonly
        />
        <AInput
          v-model="location.address"
          class="column is-half"
          icon="map-marker-alt"
          icon-pack="fas"
          :placeholder="$t('fields.address')"
          readonly
        />
        <AInput
          v-model="location.phone"
          class="column is-half"
          icon="phone-alt"
          icon-pack="fas"
          :placeholder="$t('fields.phone')"
          readonly
        />
        <AInput
          v-model="location.email"
          class="column is-half"
          icon="envelope"
          icon-pack="far"
          :placeholder="$t('fields.email')"
          readonly
        />
        <AInput
          v-model="location.contact_name"
          class="column is-half"
          icon="user"
          icon-pack="fas"
          :placeholder="$t('fields.contactPerson')"
          readonly
        />
      </div>
    </div>
  </div>
  <div
    v-else
  >
    <div class="is-adamo-card-dark mt-4">
      <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">{{ locationEdit.location_name }}</div>
      </div>
      <div class="columns is-multiline">
        <AInput
          v-model="locationEdit.city"
          class="column is-half"
          :placeholder="$t('fields.city')"
        />
        <AInput
          v-model="locationEdit.town"
          class="column is-half"
          :placeholder="$t('fields.province')"
        />
        <AInput
          v-model="locationEdit.address"
          class="column is-half"
          icon="map-marker-alt"
          icon-pack="fas"
          :placeholder="$t('fields.address')"
        />
        <AInput
          v-model="locationEdit.phone"
          class="column is-half"
          icon="phone-alt"
          icon-pack="fas"
          :placeholder="$t('fields.phone')"
        />
        <AInput
          v-model="locationEdit.email"
          class="column is-half"
          icon="envelope"
          icon-pack="far"
          :placeholder="$t('fields.email')"
        />
        <AInput
          v-model="locationEdit.contact_name"
          class="column is-half"
          icon="user"
          icon-pack="fas"
          :placeholder="$t('fields.contactPerson')"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script src="./InfoLocations.ts" lang="ts"></script>
