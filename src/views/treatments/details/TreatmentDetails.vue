<template>
<div>
  <template v-if="treatment">
    <div class="is-flex is-justify-content-space-between is-align-items-center">
      <div class="is-flex">
        <BButton
          class="is-round has-text-title has-shadow"
          icon-pack="fas"
          icon-right="arrow-left"
          type="is-white"
          @click="$router.go(-1)"
        />
        <div class="is-text-h2 has-text-title ml-4 mt-2">{{ treatment.patient.name }} {{ treatment.patient.last_name }}</div>
      </div>
      <div class="is-flex has-gap-x-2">
        <div>
          <div class="is-text-h4 has-font-comfortaa has-text-medium-blue mb-2">{{$t('treatments.treatmentStart')}}</div>
          <AInput
            v-model="formatInitialDate"
            class="treatment-icon"
            icon="calendar-check"
            icon-pack="far"
            placeholder="DD / MM / AAAA"
            readonly
            style="width: 200px;"
          />
        </div>
        <div>
          <div class="is-text-h4 has-font-comfortaa has-text-medium-blue mb-2">{{$t('treatments.nextSession')}}</div>
          <AInput
            v-model="formatNextSchedule"
            class="treatment-icon"
            icon="calendar"
            icon-pack="far"
            placeholder="DD / MM / AAAA"
            readonly
            style="width: 200px;"
          />
        </div>
      </div>
    </div>

    <div class="is-adamo-card-dark mt-4">
      <div class="columns">
        <div class="column is-2">
          <div>
            <div class="is-text-h4 has-font-comfortaa has-text-medium-blue">{{$tc('sessions.num', 1)}}</div>
            <AInput
              class="has-input-content-centered treatment-icon"
              icon="calendar"
              icon-pack="far"
              placeholder="3/10"
              readonly
              :value="formatSession"
            />
          </div>
        </div>
        <div class="column is-3">
          <div>
            <div class="is-text-h4 has-font-comfortaa has-text-medium-blue">{{$t('treatments.mode')}}</div>
            <AInput
              class="has-input-content-centered treatment-icon"
              icon="arrows-alt"
              icon-pack="fas"
              :placeholder="$t('treatments.mode')"
              readonly
              :value="treatmentMode"
            />
          </div>
        </div>
        <div class="column is-7">
          <div>
            <div class="is-text-h4 has-font-comfortaa has-text-medium-blue">{{$t('fields.injury')}}</div>
            <AInput
              class="treatment-icon"
              icon="user-injured"
              icon-pack="fas"
              :placeholder="$t('patients.injuryDescription')"
              readonly
              :value="treatment.injury"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="is-flex is-align-items-center my-6">
      <div class="is-text-h2 has-text-title mr-6">{{$t('sessions.select')}}</div>
      <BSelect
        v-model="session"
        class="select-shadow"
        expanded
        rounded
        size="is-medium"
      >
        <option
          v-for="(n, index) in treatment.sessions"
          :key="index"
          :selected="n.session_number === treatment.current_session_number"
          :value="n.session_number"
        >
          {{ n.session_number }}
        </option>
      </BSelect>
    </div>

    <div class="is-separator" />

    <div class="is-text-h2 has-text-dark-blue my-6">{{$t('fields.params')}}</div>

    <div class="columns px-12 mb-0">
      <div class="column is-4 has-gap-y-4">
        <ATreatmentConfigurationField
          v-model="formatDuration"
          class="mt-0 mb-7"
          icon="stopwatch"
          input-width="100%"
          :label="$t('fields.duration')"
          placeholder="15 minutos"
          readonly
        />
      </div>
      <div class="column is-4 has-gap-y-4">
        <ATreatmentConfigurationField
          v-model="formatPressure"
          class="mb-7"
          icon="weight-hanging"
          input-width="100%"
          :label="$t('fields.pressure')"
          :placeholder="$t('fields.pressure')"
          readonly
        />
      </div>
      <div class="column is-4 has-gap-y-4">
        <ATreatmentConfigurationField
          icon="thermometer-quarter"
          input-width="100%"
          :label="$t('fields.temperature')"
          :placeholder="$t('fields.temperature')"
          readonly
        />
      </div>
    </div>
    <div class="columns">
      <div class="column is-4">
        <div class="has-background-white p-6">
          <div class="is-flex is-justify-content-space-between is-text-h2 has-text-dark-blue">
            <div>{{$t('session')}} {{ formatSessionNumber }}</div>
            <div>{{ formattedSessionDate }}</div>
          </div>
          <div class="is-dashed-session mt-4 is-flex">
            <img
              alt=""
              class="is-overlay"
              src="@/assets/thermal3.png"
            >
            <BButton
              class="is-round has-text-blue is-expand-button"
              icon-pack="fas"
              icon-right="expand"
              size="is-medium"
              @click="handleViewThermalImage"
            />
          </div>
        </div>
      </div>

      <div class="column has-gap-x-10">
        <div class="is-text-h4 has-text-dark-blue">{{$t('fields.observations')}}</div>
        <div class="observations mt-2 is-text-p p-6">
          <span>{{ treatment.notes }}</span>
        </div>
      </div>
    </div>
  </template>
  <BLoading
    :active="loadingPage"
    is-full-page />

</div>
</template>

<script src="./TreatmentDetails.ts" lang="ts" />

<style lang="scss">
.is-dashed-session {
  position: relative;
  background: none;
  border-color: lightgray;
  // border-style: dashed;
  border-width: 2px;
  border-radius: 5px;
  width: 460px;
  height: 290px;
}

.observations {
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 1rem;
  height: 230px;
  overflow: auto;
}
.treatment-icon.has-icons-left .icon.is-left {
  top: 0px !important;
  left: 4px !important;
}
.has-input-content-centered {
  &.control.has-icons-left .input {
    text-align: center;
  }
}

.is-expand-button {
  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;
}

.is-observation-button {
  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;
}
.is-overlay {
  height: 100%;
  width: 100%;
}
</style>
