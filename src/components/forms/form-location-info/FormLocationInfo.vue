<template>
<div>
  <div class="columns is-multiline p-4">
    <BField
      v-if="withGroup"
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
    <BField class="column is-full my-0">
      <BInput
        v-model="formData.phone"
        icon="phone-alt"
        icon-pack="fas"
        pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
        :placeholder="`${$t('fields.phone')}. +(123) - 456-78-90`"
        rounded
        type="text"
        validation-message="Introduzca un número de teléfono correcto. i.e. +(123) - 456-78-90"
      />
    </BField>
    <BField class="column is-full my-0">
      <BInput
        v-model="formData.email"
        icon="envelope"
        icon-pack="far"
        :placeholder="$t('fields.email')"
        rounded
        type="email"
      />
    </BField>
    <BField class="column is-full my-0">
      <BInput
        v-model="formData.contact_name"
        icon="user"
        icon-pack="fas"
        pattern="^[a-zA-Z\s]*$"
        :placeholder="$t('fields.contactPerson')"
        rounded
        validation-message="Use letras y espacios"
      />
    </BField>
  </div>
  <div
    v-if="!withGroup"
    class="columns is-justify-content-center"
  >
    <BButton
      class="has-text-white my-4"
      rounded
      type="is-orange"
      @click="handleCreate"
    >
      {{ $t('actions.save') }}
    </BButton>
  </div>
</div>
</template>

<script src="./FormLocationInfo.ts" lang="ts"></script>
