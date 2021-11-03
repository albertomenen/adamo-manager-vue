<template>
<BTable
  v-bind="$attrs"
  class="is-table-locations"
  :data="data"
  hoverable
>
  <BTableColumn
    v-slot="props"
    field="location_name"
    sortable
  >
    {{ props.row.location_name }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="address"
    sortable
  >
    {{ props.row.address }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="phone"
    sortable
  >
    {{ props.row.phone }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="email"
    sortable
  >
    {{ props.row.email }}
  </BTableColumn>
  <template #empty>
    <ATableEmpty />
  </template>
</BTable>
</template>

<script src="./TableGroupLocations.ts" lang="ts"></script>

<style lang="scss">
.is-table-locations {
  thead {
    display: none;
  }
  // tbody, tr {
  //   background: transparent;
  // }
  td {
    border: none;
  }
}
</style>
