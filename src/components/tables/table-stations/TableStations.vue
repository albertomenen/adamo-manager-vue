<template>
<BTable
  v-bind="$attrs"
  class="is-adamo-table mt-4"
  :data="data"
  icon-pack="fas"
  sortable
>
  <BTableColumn
    v-slot="props"
    field="station_name"
    :label="$t('fields.name')"
    sortable
  >
    {{ props.row.station_name }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="placed"
    :label="$t('fields.placed')"
  >
    {{ props.row.placed }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="installation_date"
    :label="$t('fields.installationDate')"
  >
    {{ props.row.installation_date }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="id_station"
    label="ID"
  >
    <div class="is-flex is-align-items-center">
      <BTooltip
        :label="$t('copy_to_clipboard')"
        type="is-black">
        <BButton
          icon-pack="far"
          icon-right="copy"
          outlined
          style="border-radius: 50%"
          @click="handleCopyIdToClipboard(props)"
        />
      </BTooltip>
      <span
        :ref="`id_station-${props.row.id_station}`"
        class="pl-2">
        {{ props.row.id_station }}
      </span>
    </div>
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
  >
    <ATableMenu>
      <ADropdownItem
        icon="trash"
        :label="$t('actions.delete')"
        @click="deleteStation(props.row)"
      />
    </ATableMenu>
  </BTableColumn>
  <template #empty>
    <ATableEmpty />
  </template>
</BTable>
</template>

<script src="./TableStations.ts" lang="ts"></script>
