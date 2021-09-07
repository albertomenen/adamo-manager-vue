<template>
<div class="columns is-multiline p-4">
  <BField
    class="column has-text-centered"
  >
    <BSwitch
      v-model="formData.fill_with_group"
      :left-label="true"
    >
      {{ $t('sameOfGroup') }}
    </BSwitch>
  </BField>
  <AInput
    v-model="formData.location_name"
    class="column is-full"
    icon="hospital"
    icon-pack="far"
    :placeholder="$t('fields.locationName')"
  />
  <AInput
    v-model="formData.country"
    class="column is-half"
    :placeholder="$t('fields.country')"
  />
  <AInput
    v-model="formData.city"
    class="column is-half"
    :placeholder="$t('fields.city')"
  />
  <AInput
    v-model="formData.town"
    class="column is-full"
    :placeholder="$t('fields.province')"
  />
  <AInput
    v-model="formData.address"
    class="column is-full"
    icon="map-marker-alt"
    icon-pack="fas"
    :placeholder="$t('fields.address')"
  />
  <AInput
    v-model="formData.phone"
    class="column is-full"
    icon="phone-alt"
    icon-pack="fas"
    :placeholder="$t('fields.phone')"
  />
  <AInput
    v-model="formData.email"
    class="column is-full"
    icon="envelope"
    icon-pack="far"
    :placeholder="$t('fields.email')"
  />
  <AInput
    v-model="formData.contact_name"
    class="column is-full"
    icon="user"
    icon-pack="fas"
    :placeholder="$t('fields.contactPerson')"
  />
</div>
</template>

<script src="./FormLocationInfo.ts" lang="ts"></script>
