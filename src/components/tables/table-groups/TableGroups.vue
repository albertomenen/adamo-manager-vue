<template>
<BTable
  v-bind="$attrs"
  class="is-adamo-table has-left-table-padding"
  :data="data"
  detail-key="id_group"
  detailed
  icon-pack="fas"
  :show-detail-icon="true"
  sortable
>
  <BTableColumn
    v-slot="props"
    field="group_name"
    :label="$t('fields.name')"
    sortable
  >
    {{ props.row.group_name }}
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
    field="phone"
    :label="$t('fields.phone')"
  >
    {{ props.row.phone }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="email"
    :label="$t('fields.email')"
  >
    {{ props.row.email }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
  >
    <ATableMenu @click.native.stop>
      <ADropdownItem
        icon="eye"
        :label="$t('actions.see')"
        @click="showGroup(props.row)"
      />
      <ADropdownItem
        icon="pen"
        :label="$t('actions.edit')"
        @click="editGroup(props.row)"
      />
      <ADropdownItem
        icon="trash"
        :label="$t('actions.delete')"
        @click="deleteGroup(props.row)"
      />
    </ATableMenu>
  </BTableColumn>
  <template #detail="props">
    <TableLocations
      :data="props.row.locations"
    />
  </template>
  <template #empty>
    <ATableEmpty />
  </template>
</BTable>
</template>

<script src="./TableGroups.ts" lang="ts"></script>

<style lang="scss">
.is-adamo-table tr.detail td:first-child {
  padding-left: 10px;
}
</style>
