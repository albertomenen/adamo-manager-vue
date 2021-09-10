<template>
<div>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <div class="is-text-h2 has-text-dark-blue ml-12">{{ $tc('devices.num', 2) }}</div>
    <div class="is-flex is-justify-content-space-between">
      <BButton
        class="has-text-white"
        icon-pack="fas"
        icon-right="plus"
        :label="$t('devices.new')"
        rounded
        type="is-orange"
      />
    </div>
  </div>
  <div class="columns mt-2">
    <div class="column is-full">
      <TableDevices
        :data="devices"
        @device:delete="deleteDevice"
        @device:edit="editDevice"
        @device:show="showDevice"
      />
    </div>
  </div>
  <APagination
    v-if="totalPages > 1"
    :current="currentPage"
    :total="totalRecords"
    @change="setPage"
  />
</div>
</template>

<script src="./TabsDevices.ts" lang="ts"></script>
