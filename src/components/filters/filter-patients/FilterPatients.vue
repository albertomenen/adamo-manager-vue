<template>
<BDropdown
  append-to-body
  aria-role="menu"
  class="filters"
  trap-focus
>
  <template #trigger>
    <BButton
      class="has-text-blue"
      icon-pack="fas"
      icon-right="filter"
      :label="$tc('filter.num', 2)"
      rounded
      type="is-white"
    />
  </template>

  <BDropdownItem
    aria-role="menu-item"
    custom
    :focusable="false"
  >
    <div class="columns">
      <div class="column">
        <BSelect
          placeholder="Grupo"
          rounded
        >
        </BSelect>
      </div>
      <div class="column">
        <BSelect
          placeholder="Localizacion"
          rounded
        >
        </BSelect>
      </div>
      <div class="column">
        <BSelect
          placeholder="Especialista"
          rounded
        >
        </BSelect>
      </div>
    </div>
  </BDropdownItem>
</BDropdown>
</template>

<script src="./FilterPatients.ts" lang="ts"></script>

<style lang="scss">
@import "~adamo-components/src/assets/styles/colors";

.filters .dropdown-menu .dropdown-content {
  background: $light-gray;
}
</style>
