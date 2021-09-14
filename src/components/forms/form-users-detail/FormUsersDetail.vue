<template>
<div>
  <div class="content-wrapper mt-4">
    <div class="is-adamo-card-dark mt-4">
      <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">
          {{ $t('users.profile.general') }}
        </div>
        <BButton
          class="has-text-dark-blue"
          icon-pack="fas"
          icon-right="pen"
          type="is-ghost"
        />
      </div>
      <AFormUserProfileInfo
        admin
        :user="user"
      />
    </div>
    <div class="is-adamo-card-dark my-4">
      <div  class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">
          {{ $t('users.profile.userData') }}
        </div>
        <BButton
          class="has-text-dark-blue"
          icon-pack="fas"
          icon-right="pen"
          type="is-ghost"
        />
      </div>
      <AFormUserRegisterInfo
        :user="user"
      />
    </div>
  </div>
</div>
</template>

<script src="./FormUsersDetail.ts" lang="ts"></script>
