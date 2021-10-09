<template>
<BTable
  v-bind="$attrs"
  class="is-adamo-table"
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
    <ATableMenu>
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
      v-if="props.row.locations.length"
      :data="props.row.locations"
    />
    <div v-else></div>
  </template>
  <template #empty>
    <ATableEmpty />
  </template>
</BTable>
</template>

<script src="./TableGroups.ts" lang="ts"></script>

<style lang="scss">
.is-table-locations {
  padding-left: 0px;
}

.is-adamo-table .detail {
  padding: 0 !important;

  td:first-child {
    background-color: whitesmoke;
  }

  .detail-container {
    padding: 0 0 0 35px !important;

    .is-table-locations tbody {
      tr {
        td {
          height: 40px;
          background-color: whitesmoke;
        }
      }

      tr:hover td {
        background: rgba(0, 158, 226, 0.1);
        color: #0C518C;
        cursor: pointer;
      }
    }
  }
}

</style>
