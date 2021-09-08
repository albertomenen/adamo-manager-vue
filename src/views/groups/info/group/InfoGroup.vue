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
      <BField
        v-if="getGroupEditContext"
        class="column is-half"
      >
        <BUpload
          accept="image/*"
          drag-drop
          expanded
          native
          @input="handleImage"
        >
          <section class="section">
            <div class="content has-text-centered">
              <p>{{ $t('fields.upload') }}</p>
              <p>
                <BIcon
                  icon="file-upload"
                  pack="fas"
                  size="is-medium"
                />
              </p>
            </div>
          </section>
        </BUpload>
      </BField>
    </div>
  </div>
</div>
</template>

<script src="./InfoGroup.ts" lang="ts"></script>
