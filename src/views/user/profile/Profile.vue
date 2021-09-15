<template>
<div>
  <div class="is-flex is-justify-content-space-between">
    <div class="is-flex is-align-items-center">
      <BButton
        class="is-round has-text-title has-shadow"
        icon-pack="fas"
        icon-right="arrow-left"
        type="is-white"
        @click="$router.go(-1)"
      />
      <div class="is-text-h2 has-text-title ml-4">{{ $t('userMenu.conf') }}</div>
    </div>
  </div>

  <div
    class="mt-7 is-flex is-justify-content-left"
  >
    <img
      alt=""
      class="is-round img-user has-background-white"
      height="100"
      src="@/assets/user.png"
      width="100"
    >
    <BUpload
      rounded
    >
      <BIcon
        class="file-icon"
        icon="camera"
        pack="fas"
        size="is-small"
        type="is-dark-blue"
      />
    </BUpload>
  </div>

  <AformUserProfile
    :user="user"
  />
</div>
</template>

<script src="./Profile.ts" lang="ts"></script>

<style lang="scss">
.img-user {
  max-height: 100px;
  max-width: 100px;
}
.upload.control {
  height: 30px;
  width: 30px;
  top: 70px;
  right: 20px;
  background: white;
  align-items: center;

  .icon.file-icon {
    margin-left: 7px;
  }
}
</style>
