<template>
<div class="search-bar is-flex is-justify-content-space-between is-align-items-center has-background-list-gray p-6">
  <slot />
  <AInput
    class="search-bar-input"
    icon-pack="fas"
    icon-right="search"
    :placeholder="$t('actions.search')"
    :value="value"
    @input="$emit('input', $event)"
  />
</div>
</template>

<script src="./SearchBar.ts" lang="ts"></script>

<style lang="scss">
@import "~adamo-components/src/assets/styles/colors";

.search-bar {
  height: 70px;
}
.search-bar-input.has-icons-right .icon.is-right {
  top: 0px !important;
  color: $blue;
}
</style>
