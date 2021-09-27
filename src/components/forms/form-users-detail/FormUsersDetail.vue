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
          class="column"
          :disabled="!isEditing"
          expanded
          :placeholder="$t('fields.group')"
          :readonly="!isEditing"
          rounded
        >
          <option value="foo">bar</option>
        </BSelect>
        <BSelect
          class="column"
          :disabled="!isEditing"
          expanded
          :placeholder="$t('fields.location')"
          :readonly="!isEditing"
          rounded
        />
      </div>
    </div>
    <div class="is-adamo-card-dark my-4">
      <div  class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">
          {{ $t('users.profile.userData') }}
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
          v-model="user.email"
          class="column is-full"
          icon="envelope"
          icon-pack="far"
          :placeholder="$t('fields.email')"
          :readonly="!isEditing"
        />
        <AInput
          class="column is-half"
          icon-pack="fas"
          :password-reveal="true"
          :placeholder="$t('fields.password')"
          :readonly="!isEditing"
          type="password"
        />
        <AInput
          class="column is-half"
          icon-pack="fas"
          :password-reveal="true"
          :placeholder="$t('fields.passwordConf')"
          :readonly="!isEditing"
          type="password"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script src="./FormUsersDetail.ts" lang="ts"></script>
