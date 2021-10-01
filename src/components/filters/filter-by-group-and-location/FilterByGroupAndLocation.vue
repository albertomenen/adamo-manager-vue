<template>
<FilterBase>
  <template>
    <BDropdownItem
      aria-role="menu-item"
      custom
      :focusable="false"
    >
      <div class="columns">
        <div class="column">
          <BSelect
            expanded
            placeholder="Grupo"
            rounded
            :value="group"
            @input="$emit('update:group', $event)"
          >
            <option
              v-for="groupOption in getGroups"
              :key="groupOption.id_group"
              :value="groupOption.id_group">{{ groupOption.name_group }}</option>
          </BSelect>
        </div>
        <div class="column">
          <BSelect
            expanded
            placeholder="Localización"
            rounded
            :value="location"
            @input="$emit('update:location', $event)"
          >
            <option
              v-for="locationOption in locations"
              :key="locationOption.id_location"
              :value="locationOption.id_location">{{ locationOption.name_location }}</option>
          </BSelect>
        </div>
      </div>
    </BDropdownItem>
  </template>
</FilterBase>
</template>

<script src="./FilterByGroupAndLocation.ts" lang="ts">
