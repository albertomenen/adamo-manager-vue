<template>
<div>
  <template v-if="device">
    <div class="is-flex is-justify-content-space-between">
      <div class="is-flex is-align-items-center">
        <BButton
          class="is-round has-text-title has-shadow"
          icon-pack="fas"
          icon-right="arrow-left"
          type="is-white"
          @click="$router.go(-1)"
        />
        <div class="is-text-h2 has-text-title ml-4">{{ device.device_name }}</div>
      </div>
      <div
        v-if="getDeviceEditContext"
        class="has-gap-x-2"
      >
        <BButton
          class="has-text-title has-shadow"
          :label="$t('actions.cancel')"
          rounded
          type="is-white"
          @click="cancelDeviceUpdate"
        />
        <BButton
          class="has-text-white has-shadow"
          icon-pack="fas"
          :label="$t('actions.saveChanges')"
          rounded
          type="is-orange"
          @click="updateDevice"
        />
      </div>
    </div>
    <BTabs
      v-model="tab"
      type="is-adamo-tab mt-4"
    >
      <BTabItem
        icon="robot"
        icon-pack="fas"
        :label="$tc('devices.num', 2)"
      >
        <FormDeviceDetail
          :device="device"
          @loading="loadingPage = $event"
        />
      </BTabItem>
    </BTabs>
  </template>
  <BLoading
    :active="loadingPage"
    is-full-page
  />
</div>
</template>

<script src="./DetailsDevices.ts" lang="ts"></script>

<style lang="scss">
@import "~adamo-components/src/assets/styles/colors.scss";

.is-adamo-tab {
  ul li {
    &.is-active {
      a {
        background: $blue;
        color: $white;
        border-bottom-color: $blue;
      }
    }

    a {
      padding: 0.8rem 6rem 0.8rem 2rem;
      width: fit-content;
      border: 1px solid $gray;
    }
  }
}

.b-tabs .tab-content {
  padding: 0;
}
</style>
