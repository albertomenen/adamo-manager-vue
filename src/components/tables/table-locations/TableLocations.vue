<template>
<BTable
  v-bind="$attrs"
  class="is-adamo-table"
  :data="data"
  icon-pack="fas"
  sortable
>
  <BTableColumn
    v-slot="props"
    field="location_name"
    :label="$t('fields.name')"
    sortable
  >
    {{ props.row.location_name }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="city"
    :label="$t('groups.ubication')"
  >
    {{ props.row.city }}, {{ props.row.town }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="contact_name"
    :label="$t('fields.contactPerson')"
  >
    {{ props.row.contact_name }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
  >
    <ATableMenu>
      <ADropdownItem
        icon="eye"
        :label="$t('actions.see')"
        @click="showLocation(props.row)"
      />
      <ADropdownItem
        icon="pen"
        :label="$t('actions.edit')"
        @click="editLocation(props.row)"
      />
      <ADropdownItem
        icon="trash"
        :label="$t('actions.delete')"
        @click="deleteLocation(props.row)"
      />
    </ATableMenu>
  </BTableColumn>
  <template #empty>
    <ATableEmpty />
  </template>
</BTable>
</template>

<script src="./TableLocations.ts" lang="ts"></script>
