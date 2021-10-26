<template>
<div>
  <div class="content-wrapper">
    <div class="is-adamo-card-dark mt-4">
      <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">{{$t('fields.personalData')}}</div>
        <BButton
          v-if="!getPatientEditContext"
          class="has-text-dark-blue"
          icon-pack="fas"
          icon-right="pen"
          type="is-ghost"
          @click="setPatientEditContext(true)"
        />
      </div>
      <div class="columns">
        <AInput
          v-model="patient.name"
          class="column is-6"
          :placeholder="$t('fields.name')"
          :readonly="!getPatientEditContext" />
        <AInput
          v-model="patient.last_name"
          class="column is-6"
          :placeholder="$tc('fields.lastNames', 1)"
          :readonly="!getPatientEditContext" />
      </div>
      <div class="columns">
        <AInput
          v-model="patient.cc"
          class="column is-2"
          :placeholder="$t('fields.cc')"
          :readonly="!getPatientEditContext" />
        <AInput
          v-model="patient.identification"
          class="column is-4"
          :placeholder="$t('fields.identification')"
          :readonly="!getPatientEditContext" />
        <AInput
          class="column is-2"
          :placeholder="$t('fields.age')"
          readonly
          :value="patientAge" />
        <AInput
          v-model="patient.birthdate"
          class="column is-4"
          icon="calendar"
          icon-pack="fas"
          :placeholder="$t('fields.birthdate')"
          :readonly="!getPatientEditContext" />
      </div>
      <AInput
        v-model="patient.profession"
        :placeholder="$t('fields.ocupation')"
        :readonly="!getPatientEditContext" />
    </div>

    <div class="is-adamo-card-dark my-4">
      <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">{{$t('fields.contactInfo')}}</div>
        <BButton
          v-if="!getPatientEditContext"
          class="has-text-dark-blue"
          icon-pack="fas"
          icon-right="pen"
          type="is-ghost"
          @click="setPatientEditContext(true)"
        />
      </div>
      <div class="columns">
        <AInput
          v-model="patient.email"
          class="column is-6"
          icon="envelope"
          icon-pack="fas"
          :placeholder="$t('fields.email')"
          :readonly="!getPatientEditContext"/>
        <AInput
          v-model="patient.phone"
          class="column is-6"
          icon="phone-alt"
          icon-pack="fas"
          :placeholder="$t('fields.contactPhone')"
          :readonly="!getPatientEditContext" />
      </div>
      <div class="columns">
        <AInput
          v-model="patient.country"
          class="column is-3"
          :placeholder="$t('fields.country')"
          :readonly="!getPatientEditContext"/>
        <AInput
          v-model="patient.city"
          class="column is-3"
          :placeholder="$t('fields.city')"
          :readonly="!getPatientEditContext" />
        <AInput
          v-model="patient.address"
          class="column is-6"
          icon="map-marker-alt"
          icon-pack="fas"
          :placeholder="$t('fields.address')"
          :readonly="!getPatientEditContext" />
      </div>
    </div>

    <div class="is-adamo-card-dark my-4">
      <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">{{$t('fields.physicalInfo')}}</div>
        <BButton
          v-if="!getPatientEditContext"
          class="has-text-dark-blue"
          icon-pack="fas"
          icon-right="pen"
          type="is-ghost"
          @click="setPatientEditContext(true)"
        />
      </div>
      <div class="columns">
        <AInput
          v-model="patient.gender"
          class="column is-3"
          :placeholder="$t('fields.sex')"
          :readonly="!getPatientEditContext"/>
        <AInput
          v-model="patient.race"
          class="column is-3"
          :placeholder="$t('fields.race')"
          :readonly="!getPatientEditContext" />
        <AInput
          v-model="patient.complexity"
          class="column is-6"
          icon="walking"
          icon-pack="fas"
          :placeholder="$t('fields.complexity')"
          :readonly="!getPatientEditContext"/>
      </div>
      <div class="columns">
        <AInput
          v-model="patient.height"
          class="column is-2"
          icon="ruler-vertical"
          icon-pack="fas"
          :placeholder="$t('fields.height')"
          :readonly="!getPatientEditContext" />
        <AInput
          v-model="patient.weight"
          class="column is-2"
          icon="weight-hanging"
          icon-pack="fas"
          :placeholder="$t('fields.weight')"
          :readonly="!getPatientEditContext"/>
        <AInput
          v-model="patient.allergies"
          class="column is-8"
          icon="allergies"
          icon-pack="fas"
          :placeholder="$t('fields.allergies')"
          :readonly="!getPatientEditContext"/>
      </div>
      <div class="columns">
        <AInput
          v-model="patient.medication"
          class="column is-12"
          icon="prescription-bottle-alt"
          icon-pack="fas"
          :placeholder="$t('fields.medication')"
          :readonly="!getPatientEditContext" />
      </div>
    </div>
  </div>

</div>
</template>
<script lang="ts" src="./PatientInfo.ts" />
<style lang="scss" scoped src="./PatientInfo.scss" />
