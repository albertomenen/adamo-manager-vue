<template>
<div class="columns is-multiline p-4">
  <AInput
    v-model="formData.group_name"
    class="column is-full"
    icon="hospital"
    icon-pack="far"
    :placeholder="$t('fields.centerName')"
  />
  <AInput
    v-model="formData.country"
    class="column is-half"
    :placeholder="$t('fields.country')"
  />
  <AInput
    v-model="formData.city"
    class="column is-half"
    :placeholder="$t('fields.city')"
  />
  <AInput
    v-model="formData.town"
    class="column is-full"
    :placeholder="$t('fields.province')"
  />
  <AInput
    v-model="formData.address"
    class="column is-full"
    icon="map-marker-alt"
    icon-pack="fas"
    :placeholder="$t('fields.address')"
  />
  <AInput
    v-model="formData.phone"
    class="column is-full"
    icon="phone-alt"
    icon-pack="fas"
    :placeholder="$t('fields.phone')"
  />
  <AInput
    v-model="formData.email"
    class="column is-full"
    icon="envelope"
    icon-pack="far"
    :placeholder="$t('fields.email')"
  />
  <AInput
    v-model="formData.contact_name"
    class="column is-full"
    icon="user"
    icon-pack="fas"
    :placeholder="$t('fields.contactPerson')"
  />
  <BUpload
    accept="image/*"
    class="column"
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
</div>
</template>

<script src="./FormGroupInfo.ts" lang="ts"></script>

<style lang="scss">
.upload.control {
  height: 120px;

  section {
    padding: 10px;
  }
}
.right-column-form {
  height: 100%;
}
</style>
