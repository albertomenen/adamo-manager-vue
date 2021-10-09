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
      style="height: 820px; width: 720px"
    >
      <header class="modal-card-head has-background-orange has-text-centered">
        <p class="modal-card-title has-text-white has-font-comfortaa">
          {{ $t('groups.new') }}
        </p>
        <BButton
          class="has-text-white"
          icon-pack="fas"
          icon-right="times"
          type="is-orange"
          @click="$emit('cancel')"
        />
      </header>
      <section class="modal-card-body has-background-light-gray group">
        <div class="columns">
          <div class="column">
            <FormGroupSteps
              :fill-with-group.sync="fillWithGroup"
              :form-group="formGroup"
              :form-location="formLocation"
              @submit="handleSubmit"
            />
          </div>
        </div>
      </section>
    </div>
  </template>
</BModal>
</template>

<script src="./ModalGroupForm.ts" lang="ts"></script>

<style lang="scss">
.group.modal-card-body {
  overflow-y: auto;
}
</style>
