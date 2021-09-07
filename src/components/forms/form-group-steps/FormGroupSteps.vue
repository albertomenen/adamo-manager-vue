<template>
<BSteps
  v-model="activeStep"
  class="is-adamo-stepper"
  :is-animated="true"
>
  <BStepItem
    icon="hospital-alt"
    icon-pack="fas"
    :label="$t('groups.infoGroup')"
    step="1"
  >
    <FormGroupInfo
      :form-data="formGroup"
    />
  </BStepItem>
  <BStepItem
    icon="clinic-medical"
    icon-pack="fas"
    :label="$t('groups.infoCenter')"
    step="2"
  >
    <FormLocationInfo
      :form-data="formLocation"
    />
  </BStepItem>
  <template #navigation="{previous, next}">
    <div class="has-text-centered is-navigation">
      <BButton
        v-show="activeStep !== 0"
        class="mr-5"
        icon-left="arrow-left"
        icon-pack="fas"
        rounded
        @click.prevent="previousStep(previous.action)"
      >
        {{ $t('actions.return') }}
      </BButton>
      <BButton
        class="has-text-white"
        icon-pack="fas"
        :icon-right="activeStep !== 1 ? 'arrow-right' : ''"
        rounded
        type="is-orange"
        @click.prevent="nextStep(next.action)"
      >
        {{ $t(activeStep !== 1 ? 'actions.continue' : 'actions.create') }}
      </BButton>
    </div>
  </template>
</BSteps>
</template>

<script src="./FormGroupSteps.ts" lang="ts"></script>
