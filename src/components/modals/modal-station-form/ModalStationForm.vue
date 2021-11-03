<template>
<BModal
  v-model="showModal"
  :can-cancel="false"
  :destroy-on-hide="true"
  has-modal-card
  trap-focus
>
  <div class="modal-card">
    <header class="modal-card-head has-background-orange has-text-centered">
      <p class="modal-card-title has-text-white has-font-comfortaa">
        {{ $t('newStation') }}
      </p>
      <BButton
        class="has-text-white"
        icon-pack="fas"
        icon-right="times"
        type="is-orange"
        @click="$emit('cancel')"
      />
    </header>
    <section class="modal-card-body has-background-light-gray">
      <div>
        <div class="columns is-multiline p-4">
          <AInput
            v-model="formStation.station_name"
            class="column is-full"
            icon="hospital"
            icon-pack="far"
            :placeholder="$t('fields.name')"
          />
          <BField class="column is-full">
            <BDatepicker
              v-model="installationDate"
              expanded
              icon="calendar-today"
              :icon-right="installationDate ? 'close-circle' : ''"
              icon-right-clickable
              :locale="$i18n.locale"
              :placeholder="$t('fields.installationDate')"
              rounded
              trap-focus
              @icon-right-click="installationDate = null">
            </BDatepicker>
          </BField>
          <AInput
            v-model="formStation.placed"
            class="column is-full"
            :placeholder="$t('fields.placed')"
          />

        </div>
        <div class="columns is-justify-content-center">
          <BButton
            class="has-text-white my-4"
            rounded
            type="is-orange"
            @click="$emit('ok', formStation)"
          >
            {{ $t('actions.save') }}
          </BButton>
        </div>
      </div>
    </section>
  </div>
</BModal>
</template>

<script src="./ModalStationForm.ts" lang="ts"></script>
