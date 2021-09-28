<template>
<div>
  <div class="mt-4">
    <div class="is-adamo-card-dark mt-4">
      <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">
          {{ $t('users.profile.general') }}
        </div>
        <BButton
          v-if="!isEditing"
          class="has-text-dark-blue"
          icon-pack="fas"
          icon-right="pen"
          type="is-ghost"
          @click="setEditing(true)"
        />
      </div>
      <div class="columns is-multiline">
        <AInput
          v-model="user.name"
          class="column is-half"
          :placeholder="$t('fields.name')"
          :readonly="!isEditing"
        />
        <AInput
          v-model="user.last_name"
          class="column is-half"
          :placeholder="$tc('fields.lastNames', 2)"
          :readonly="!isEditing"
        />
        <AInput
          v-model="user.phone"
          class="column is-half"
          icon="phone-alt"
          icon-pack="fas"
          :placeholder="$t('fields.phone')"
          :readonly="!isEditing"
        />
        <AInput
          v-model="user.role.role_name"
          class="column is-half"
          placeholder="MP"
          :readonly="!isEditing"
        />
        <BSelect
          v-model="user.id_group"
          class="column"
          :disabled="!isEditing"
          expanded
          :loading="loadingGroups"
          :placeholder="$t('fields.group')"
          rounded
        >
          <option
            v-for="group in groups"
            :key="group.id_group"
            :value="group.id_group">{{group.group_name}}</option>
        </BSelect>
        <BSelect
          v-model="user.id_location"
          class="column"
          :disabled="!isEditing"
          expanded
          :loading="loadingGroups"
          :placeholder="$t('fields.location')"
          rounded
        >
          <option
            v-for="location in locations"
            :key="location.id_location"
            :value="location.id_location">{{location.location_name}}</option>
        </BSelect>

      </div>
    </div>
    <div class="is-adamo-card-dark my-4">
      <div  class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">
          {{ $t('users.profile.userData') }}
        </div>
        <BButton
          v-if="!isEditingRegisterInfo"
          class="has-text-dark-blue"
          icon-pack="fas"
          icon-right="pen"
          type="is-ghost"
          @click="setEditingRegisterInfo(true)"
        />
      </div>
      <div class="is-flex">
        <AInput
          v-model="user.email"
          class="is-flex-grow-1 mr-4"
          icon="envelope"
          icon-pack="far"
          :placeholder="$t('fields.email')"
          :readonly="!isEditingRegisterInfo"
        />
        <BButton
          v-if="isEditingRegisterInfo"
          class="has-text-blue has-shadow"
          :label="$t('resetEmail')"
          rounded
          type="is-white"
          @click="$emit('save')"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script src="./FormUsersDetail.ts" lang="ts"></script>
