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
  <template #empty>
    <ATableEmpty />
  </template>
</BTable>
</template>

<script src="./TableLocations.ts" lang="ts"></script>

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
