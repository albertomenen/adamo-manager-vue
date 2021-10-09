<template>
<div>
  <div class="is-adamo-card-dark mt-4">
    <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
      <div class="is-text-h2 has-text-dark-blue py-2">{{$t('generalInfo')}}</div>

      <BButton
        v-if="!getGroupEditContext"
        class="has-text-dark-blue"
        icon-pack="fas"
        icon-right="pen"
        type="is-ghost"
        @click="setGroupEditContext(true)"
      />
    </div>
    <div
      class="my-6"
      style="position: relative; max-height: 128px; max-width: 128px; margin: 0 auto;">
      <div
        class="is-round has-background-gray"
        style="overflow: hidden; max-height: 128px; max-width: 128px;">
        <img
          alt=""
          :src="getGroupLogo"
          style="height: 128px; width: 128px;"
        >
      </div>
      <BUpload
        v-if="getGroupEditContext"
        accept="image/*"
        native
        rounded
        style="z-index: 20; position: absolute; bottom: -5px; right: -5px; cursor: pointer"
        @input="handleImage">
        <BIcon
          class="file-icon is-round has-background-white"
          icon="camera"
          pack="fas"
          size="is-large"
          type="is-dark-blue"
        />
      </BUpload>
    </div>
    <div class="columns is-multiline">
      <AInput
        v-model="group.city"
        class="column is-half"
        :placeholder="$t('fields.city')"
        :readonly="!getGroupEditContext"
      />
      <AInput
        v-model="group.town"
        class="column is-half"
        :placeholder="$t('fields.province')"
        :readonly="!getGroupEditContext"
      />
      <AInput
        v-model="group.address"
        class="column is-half"
        icon="map-marker-alt"
        icon-pack="fas"
        :placeholder="$t('fields.address')"
        :readonly="!getGroupEditContext"
      />
      <AInput
        v-model="group.phone"
        class="column is-half"
        icon="phone-alt"
        icon-pack="fas"
        :placeholder="$t('fields.phone')"
        :readonly="!getGroupEditContext"
      />
      <AInput
        v-model="group.email"
        class="column is-half"
        icon="envelope"
        icon-pack="far"
        :placeholder="$t('fields.email')"
        :readonly="!getGroupEditContext"
      />
      <AInput
        v-model="group.contact_name"
        class="column is-half"
        icon="user"
        icon-pack="fas"
        :placeholder="$t('fields.contactPerson')"
        :readonly="!getGroupEditContext"
      />
    </div>
  </div>
</div>
</template>

<script src="./InfoGroup.ts" lang="ts"></script>
