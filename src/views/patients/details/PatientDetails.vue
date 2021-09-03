<template>
<div>
  <template v-if="patient">
    <div class="is-flex is-justify-content-space-between">
      <div class="is-flex is-align-items-center">
        <BButton
          class="is-round has-text-title has-shadow"
          icon-pack="fas"
          icon-right="arrow-left"
          type="is-white"
          @click="$router.go(-1)"
        />
        <div class="is-text-h2 has-text-title ml-4">{{ patient.name }} {{ patient.last_name }}</div>
      </div>
      <div
        v-if="getPatientEditContext"
        class="has-gap-x-2">
        <BButton
          class="has-text-title has-shadow"
          :label="$t('actions.cancel')"
          rounded
          type="is-white"
          @click="cancelPatientUpdate"
        />
        <BButton
          class="has-text-white has-shadow"
          icon-pack="fas"
          :label="$t('actions.saveChanges')"
          rounded
          type="is-orange"
          @click="updatePatient"
        />
      </div>
    </div>

    <BTabs
      v-model="tab"
      type="is-adamo-tab mt-4">
      <BTabItem
        v-if="!getPatientEditContext"
        icon="briefcase-medical"
        icon-pack="fas"
        :label="$tc('treatments.num', 2)"
      >
        <PatientHistory
          class="mt-6"
          :treatments="patient.treatments"
          @loading="setLoadingState"
          @update="getPatientData"
        />
      </BTabItem>
      <BTabItem
        icon="notes-medical"
        icon-pack="fas"
        :label="$t('fields.information')"
      >
        <PatientInfo
          :data="patient"
        />
      </BTabItem>
    </BTabs>
  </template>
  <BLoading
    :active="loadingPage"
    is-full-page />
</div>
</template>

<script src="./PatientDetails.ts" lang="ts" />
<style lang="scss" src="./PatientDetails.scss" />
