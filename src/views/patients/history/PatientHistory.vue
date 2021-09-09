<template>
<div>
  <div class="columns">
    <div class="column is-full">
      <ATableTreatments
        :admin="true"
        :data="paginatedTreatments"
        :selected.sync="selectedTreatment"
        @treatment:delete="deleteTreatment"
        @treatment:edit="editTreatment"
        @treatment:show="showTreatment"
      />
    </div>
  </div>
  <APagination
    v-if="showPagination"
    :current="currentPage"
    :per-page="4"
    :total="treatments.length"
    @change="setPage"
  />
</div>
</template>

<script src="./PatientHistory.ts" lang="ts"></script>
