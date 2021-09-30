<template>
<section class="hero is-fullheight is-clipped">
  <div class="hero-body p-0">
    <img
      class="background"
      src="@/assets/Frame.png"
    >
    <div class="columns full-width is-gapless">
      <div class="column has-background-light-gray">
        <img
          alt=""
          class="is-logo mt-12 ml-12"
          src="@/assets/logo.png"
        >
      </div>
      <div class="column max-height">
        <div class="columns full-height is-centered">
          <div class="column is-elevated is-vcentered is-flex is-justify-content-center">
            <div class="px-16 py-20 is-password-card has-shadow">
              <div class="full-width has-text-centered is-password-title has-text-medium-blue">
                {{$t('login.register')}}
              </div>
              <div class="is-text-h3 has-text-centered mb-8 mt-12 has-text-red">{{ errorMessageLabel }}</div>
              <BField class="pb-1">
                <BInput
                  v-model="password"
                  custom-class="is-italic"
                  icon-pack="fas"
                  password-reveal
                  :placeholder="$t('fields.password')"
                  rounded
                  size="is-medium"
                  type="password"
                />
              </BField>
              <BField class="pb-5">
                <BInput
                  v-model="passwordConfirm"
                  custom-class="is-italic"
                  icon-pack="fas"
                  password-reveal
                  :placeholder="$t('fields.passwordConfirm')"
                  rounded
                  size="is-medium"
                  type="password"
                />
              </BField>
              <BField class="has-text-centered pb-4 mt-4">
                <BButton
                  class="has-text-white"
                  :disabled="!isRegisterEnabled"
                  expanded
                  :loading="loading"
                  rounded
                  size="is-medium"
                  type="is-orange"
                  @click="register">
                  {{$t('login.register')}}
                </BButton>
              </BField>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts" src="./UserPass.ts"></script>
<style lang="scss" src="./UserPass.scss" />
