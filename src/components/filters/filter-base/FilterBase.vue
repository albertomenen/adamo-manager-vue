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

  <slot />
</BDropdown>
</template>

<script src="./FilterBase.ts" lang="ts"></script>

<style lang="scss">
@import "~adamo-components/src/assets/styles/colors";

.filters .dropdown-menu {
  width: 600px;
}

.filters .dropdown-menu .dropdown-content {
  background: $light-gray;
}
</style>
