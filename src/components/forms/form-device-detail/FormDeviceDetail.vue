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
        @click="setDeviceEditContext(true)"
      />
    </div>
    <div class="columns is-multiline">
      <AInput
        v-if="getDeviceEditContext"
        v-model="device.device_name"
        class="column is-half"
        :placeholder="$t('fields.deviceName')"
      />
      <AInput
        v-if="!getDeviceEditContext"
        v-model="groupName"
        class="column is-half"
        :placeholder="$t('fields.group')"
        readonly
      />
      <BSelect
        v-else
        v-model="groupSelected"
        class="column is-half"
        expanded
        :placeholder="$t('fields.group')"
        rounded
      >
        <option
          v-for="group in getGroups"
          :key="group.id_group"
          :value="group"
        >
          {{ group.group_name }}
        </option>
      </BSelect>
      <AInput
        v-if="!getDeviceEditContext"
        v-model="locationName"
        class="column is-half"
        :placeholder="$t('fields.location')"
        readonly
      />
      <BSelect
        v-else
        v-model="locationSelected"
        class="column is-half"
        :disabled="fieldLocationDisabled"
        expanded
        :placeholder="$t('fields.location')"
        rounded
      >
        <option
          v-for="location in locations"
          :key="location.id_location"
          :value="location.id_location"
        >
          {{ location.location_name }}
        </option>
      </BSelect>
      <BSelect
        v-if="getDeviceEditContext"
        v-model="device.station_id"
        class="column is-half"
        :disabled="fieldStationDisabled"
        expanded
        :loading="loadingStations"
        :placeholder="$t('fields.station')"
        rounded
      >
        <option
          v-for="station in stations"
          :key="station.id_station"
          :value="station.id_station"
        >
          {{ station.station_name }}
        </option>
      </BSelect>
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
