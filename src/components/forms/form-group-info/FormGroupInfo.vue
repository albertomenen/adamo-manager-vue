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
  <BField class="column is-full my-0">
    <BInput
      v-model="formData.phone"
      icon="phone-alt"
      icon-pack="fas"
      pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
      :placeholder="`${$t('fields.phone')}. +(123) - 456-78-90`"
      rounded
      type="text"
      validation-message="Introduzca un número de teléfono correcto. i.e. +(123) - 456-78-90"
    />
  </BField>
  <BField class="column is-full my-0">
    <BInput
      v-model="formData.email"
      icon="envelope"
      icon-pack="far"
      :placeholder="$t('fields.email')"
      rounded
      type="email"
    />
  </BField>
  <BField class="column is-full my-0">
    <BInput
      v-model="formData.contact_name"
      icon="user"
      icon-pack="fas"
      pattern="^[a-zA-Z\s]*$"
      :placeholder="$t('fields.contactPerson')"
      rounded
      validation-message="Use letras y espacios"
    />
  </BField>
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
