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
          <AInput
            expanded
            placeholder="Ciudad"
            rounded
            :value="city"
            @input="$emit('update:city', $event)"
          >
          </AInput>
        </div>
        <div class="column">
          <AInput
            expanded
            placeholder="Provincia"
            rounded
            :value="town"
            @input="$emit('update:town', $event)"
          >
          </AInput>
        </div>
      </div>
    </BDropdownItem>
  </template>
</FilterBase>
</template>

<script src="./FilterGroups.ts" lang="ts">
