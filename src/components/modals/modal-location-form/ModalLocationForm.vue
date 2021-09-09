<template>
<BModal
  v-model="showModal"
  :can-cancel="false"
  :destroy-on-hide="true"
  has-modal-card
  trap-focus
>
  <template #default="">
    <div class="modal-card">
      <header class="modal-card-head has-background-orange has-text-centered">
        <p class="modal-card-title has-text-white has-font-comfortaa">
          {{ $t('locations.new') }}
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
        <FormLocationInfo
          :form-location="formLocation"
          :with-group="false"
          @save="$emit('ok', $event)"
        />
      </section>
    </div>
  </template>
</BModal>
</template>

<script src="./ModalLocationForm.ts" lang="ts"></script>
