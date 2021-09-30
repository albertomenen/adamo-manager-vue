<template>
<section>
  <div class="columns is-multiline">
    <AInput
      v-model="formData.device_name"
      class="column is-full"
      :placeholder="$t('fields.deviceName')"
    />
    <BSelect
      v-model="groupSelected"
      class="column is-full"
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
    <BSelect
      v-model="locationSelected"
      class="column is-full"
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
      v-model="formData.station_id"
      class="column is-full"
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
      v-model="formData.serial_number"
      class="column is-half"
      :placeholder="$t('fields.serial')"
    />
    <AInput
      v-model="formData.mac"
      class="column is-half"
      :placeholder="$t('fields.mac')"
    />
    <AInput
      v-model="formData.hw_version"
      class="column is-half"
      :placeholder="$t('fields.hwVersion')"
    />
    <AInput
      v-model="formData.sw_version"
      class="column is-half"
      :placeholder="$t('fields.swVersion')"
    />
  </div>
  <div class="is-flex is-justify-content-center mt-10">
    <BButton
      class="has-text-white"
      rounded
      type="is-orange"
      @click="$emit('submit')"
    >
      {{ $t('actions.create') }}
    </BButton>
  </div>
</section>
</template>

<script src="./FormDeviceInfo.ts" lang="ts"></script>
