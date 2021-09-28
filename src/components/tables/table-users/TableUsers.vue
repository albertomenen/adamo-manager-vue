<template>
<BTable
  class="is-adamo-table"
  :data="data"
  sorteable
>
  <BTableColumn
    v-slot="props"
    centered
    field="name"
    :label="$t('fields.name')"
    sorteable
  >
    {{ props.row.name }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
    field="rol"
    :label="$t('fields.role')"
  >
    <div
      class="is-flex is-justify-content-center is-text-p">
      <div
        class="has-text-white px-4 py-1"
        :class="`has-background-${badgeColor(props.row.role.role_name)}`"
        style="border-radius: 20px">
        {{ props.row.role.role_name }}
      </div>
    </div>
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
    field="phone"
    :label="$t('fields.phone')"
  >
    {{ props.row.phone }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
    field="email"
    :label="$t('fields.email')"
  >
    {{ props.row.email }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered>
    <ATableMenu
      @click.native.stop>
      <template>
        <ADropdownItem
          icon="eye"
          :label="$t('actions.see')"
          @click="showUser(props.row)"
        />
        <ADropdownItem
          icon="pen"
          :label="$t('actions.edit')"
          @click="editUser(props.row)"
        />
        <ADropdownItem
          icon="eye"
          :label="$t('actions.delete')"
          @click="deleteUser(props.row)"
        />
      </template>
    </ATableMenu>
  </BTableColumn>
  <template #empty>
    <ATableEmpty />
  </template>
</BTable>
</template>

<script src="./TableUsers.ts" lang="ts"></script>
