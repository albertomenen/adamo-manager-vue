<template>
<div>
  <div class="is-adamo-card-dark mt-4">
    <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
      <div class="is-text-h2 has-text-dark-blue py-2">
        {{ $t('devices.info') }}
      </div>
      <BButton
        class="has-text-dark-blue"
        icon-pack="fas"
        icon-right="pen"
        type="is-ghost"
      />
    </div>
    <div class="columns is-multiline">
      <AInput
        v-model="device.group.group_name"
        class="column is-half"
        :placeholder="$t('fields.group')"
        readonly
      />
      <AInput
        v-model="device.station.location.location_name"
        class="column is-half"
        :placeholder="$t('fields.location')"
        readonly
      />
      <AInput
        v-model="device.serial_number"
        class="column is-half"
        :placeholder="$t('fields.serial')"
        readonly
      />
      <AInput
        v-model="device.mac"
        class="column is-half"
        :placeholder="$t('fields.mac')"
        readonly
      />
      <AInput
        v-model="device.sw_version"
        class="column is-half"
        :placeholder="$t('fields.swVersion')"
        readonly
      />
      <AInput
        v-model="device.hw_version"
        class="column is-half"
        :placeholder="$t('fields.hwVersion')"
        readonly
      />
    </div>
  </div>
</div>
</template>

<script src="./FormDeviceDetail.ts" lang="ts"></script>
