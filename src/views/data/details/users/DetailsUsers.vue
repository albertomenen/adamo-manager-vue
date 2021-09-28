<template>
<div>
  <template v-if="user">
    <div class="is-flex is-align-items-center is-justify-content-space-between">
      <div class="is-flex is-align-items-center">
        <BButton
          class="is-round has-text-title has-shadow"
          icon-pack="fas"
          icon-right="arrow-left"
          type="is-white"
          @click="$router.go(-1)"
        />
        <div class="is-text-h2 has-text-title ml-4">{{ getUserName }}</div>
      </div>
      <BButton
        v-if="isEditing"
        class="has-shadow has-text-white"
        label="Guardar usuario"
        rounded
        type="is-orange"
        @click="saveUser"
      />
    </div>
    <BTabs
      v-model="tab"
      type="is-adamo-tab mt-4"
    >
      <BTabItem
        icon="user"
        icon-pack="fas"
        :label="$tc('users.num', 2)"
      >
        <FormUsersDetail
          :user="user"
          @save="saveUser"
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

<script src="./DetailsUsers.ts" lang="ts"></script>
