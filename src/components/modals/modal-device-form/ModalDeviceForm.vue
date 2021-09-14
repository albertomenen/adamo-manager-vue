<template>

<BModal
  v-model="showModal"
  :can-cancel="false"
  :destroy-on-hide="true"
  has-modal-card
  trap-focus
>
  <template #default="">
    <div
      class="modal-card"
      style="height: 500px;"
    >
      <header class="modal-card-head has-background-orange has-text-centered">
        <p class="modal-card-title has-text-white has-font-comfortaa">
          {{ $t('devices.create') }}
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
        <div class="columns">
          <div class="column p-8">
            <FormDeviceInfo
              :form-data="formData"
              :groups="groups"
              @submit="handleSubmit"
            />
          </div>
        </div>
      </section>
    </div>
  </template>
</BModal>
</template>

<script src="./ModalDeviceForm.ts" lang="ts"></script>
