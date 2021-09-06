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
            placeholder="Ciudad"
            rounded
          >
          </BSelect>
        </div>
        <div class="column">
          <BSelect
            expanded
            placeholder="Provincia"
            rounded
          >
          </BSelect>
        </div>
      </div>
    </BDropdownItem>
  </template>
</FilterBase>
</template>

<script src="./FilterGroups.ts" lang="ts"></script>
