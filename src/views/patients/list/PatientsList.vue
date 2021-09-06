<template>
<div>
  <div class="pb-8 is-flex is-align-items-center is-justify-content-space-between">
    <div>
      <h1 class="is-text-h1 has-text-comfortaa has-text-dark-blue">{{ $t('patients.list') }}</h1>
    </div>
    <div class="columns p-0 has-gap-x-2">
      <BButton
        id="btn_newPatient"
        class="has-text-white"
        icon-pack="fas"
        icon-right="plus"
        :label="`${$t('actions.new')} ${$tc('patients.num', 1)}`"
        rounded
        type="is-orange"
        @click="showNewPatientModal"
      />
    </div>
  </div>
  <SearchBar
    class="mb-6"
  >
    <template>
      <FilterPatients />
    </template>
  </SearchBar>
  <ATablePatients
    id="table_patients"
    :data="patients"
    :loading="loadingPatients"
    @patient:delete="deletePatient"
    @patient:edit="editPatient"
    @patient:show="showPatient"
  />
  <APagination
    v-if="totalPages > 1"
    :current="currentPage"
    :total="totalPatients"
    @change="setPage"
  />
</div>
</template>

<script src="./PatientsList.ts" lang="ts"></script>
