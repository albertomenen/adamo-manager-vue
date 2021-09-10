<template>
<div>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <div class="is-text-h2 has-text-dark-blue ml-12">{{ $tc('users.num', 2) }}</div>
    <div class="is-flex is-justify-content-space-between">
      <BButton
        class="has-text-white"
        icon-pack="fas"
        icon-right="plus"
        :label="$t('users.new')"
        rounded
        type="is-orange"
        @click="showNewUSerModal"
      />
    </div>
  </div>
  <div class="columns mt-2">
    <div class="column is-full">
      <TableUsers
        :data="users"
        @user:delete="deleteUser"
        @user:edit="editUser"
        @user:show="showUser"
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

<script src="./TabsUsers.ts" lang="ts"></script>
