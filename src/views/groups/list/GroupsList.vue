<template>
<div>
  <div class="pb-8 is-flex is-align-items-center is-justify-content-space-between">
    <div>
      <h1 class="is-text-h1 has-text-comfortaa has-text-dark-blue">{{ $t('groups.admin') }}</h1>
    </div>
    <div class="columns p-0 has-gap-x-2">
      <BButton
        id="btn_newPatient"
        class="has-text-white"
        icon-pack="fas"
        icon-right="plus"
        :label="`${$t('actions.new')} ${$tc('groups.num', 1)}`"
        rounded
        type="is-orange"
      />
    </div>
  </div>
  <SearchBar
    class="mb-6"
  >
    <template>
      <FilterGroups />
    </template>
  </SearchBar>
  <TableGroups
    id="table_groups"
    :data="groups"
    :loading="loadingGroups"
    @group:delete="deleteGroup"
    @group:edit="editGroup"
    @group:show="showGroup"
  />
  <APagination
    v-if="totalPages > 1"
    :current="currentPage"
    :total="totalPages"
    @change="setPage"
  />
</div>
</template>

<script src="./GroupsList.ts" lang="ts"></script>
