<template>
<BTable
  class="is-adamo-table"
  :data="data"
  sorteable
>
  <BTableColumn
    v-slot="props"
    centered
    field="name"
    :label="$t('fields.name')"
  >
    {{ props.row.device_name }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
    field="ubication"
    :label="$t('groups.ubication')"
  >
    {{ formatLocationName(props.row) }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
    field="room"
    :label="$t('devices.room')"
  >
    {{ formatRoomName(props.row) }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered>
    <ATableMenu
      @click.native.stop>
      <template>
        <ADropdownItem
          icon="eye"
          :label="$t('actions.see')"
          @click="showDevice(props.row)"
        />
        <ADropdownItem
          icon="pen"
          :label="$t('actions.edit')"
          @click="editDevice(props.row)"
        />
        <ADropdownItem
          icon="eye"
          :label="$t('actions.delete')"
          @click="deleteDevice(props.row)"
        />
      </template>
    </ATableMenu>
  </BTableColumn>
  <template #empty>
    <ATableEmpty />
  </template>
</BTable>
</template>

<script src="./TableDevices.ts" lang="ts"></script>
