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
            :placeholder="$t('fields.group')"
            rounded
          >
          </BSelect>
        </div>
        <div class="column">
          <BSelect
            expanded
            :placeholder="$t('fields.location')"
            rounded
          >
          </BSelect>
        </div>
        <div class="column">
          <BSelect
            expanded
            :placeholder="$t('fields.specialist')"
            rounded
          >
          </BSelect>
        </div>
      </div>
    </BDropdownItem>
  </template>
</FilterBase>
</template>

<script src="./FilterPatients.ts" lang="ts"></script>
