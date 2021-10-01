<template>
<div>
  <div class="is-flex is-justify-content-space-between">
    <div class="is-flex is-align-items-center">
      <div class="is-text-h1 has-text-dark-blue">{{ $t('myDateBase') }}</div>
    </div>
  </div>
  <SearchBar
    v-model="filterSearch"
    class="my-6">
    <template>
      <FilterByGroupAndLocation
        :group.sync="filterGroup"
        :location.sync="filterLocation"
      />
    </template>
  </SearchBar>
  <BTabs
    v-model="tab"
    type="is-adamo-tab mt-4"
  >
    <BTabItem
      icon="user"
      icon-pack="fas"
      :label="$tc('users.num', 2)"
    >
      <TabsUsers
        class="mt-6"
        :filters="filtersObject"
        :tab="tab"
        @loading="loadingPage = $event"
      />
    </BTabItem>
    <BTabItem
      icon="robot"
      icon-pack="fas"
      :label="$tc('devices.num', 2)"
    >
      <TabsDevices
        class="mt-6"
        :filters="filtersObject"
        :tab="tab"
        @loading="loadingPage = $event"
      />
    </BTabItem>
  </BTabs>
  <BLoading
    :active="loadingPage"
    is-full-page
  />
</div>
</template>

<script src="./DataList.ts" lang="ts"></script>

<style src="./DataList.scss" lang="scss"></style>
