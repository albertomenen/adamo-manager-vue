<template>
<section class="hero is-fullheight is-clipped">
  <div class="hero-body p-0">
    <img
      class="login-background"
      src="@/assets/Frame.png"
    >
    <div class="columns full-width is-gapless">
      <div class="column login-column-left has-background-light-gray">
        <img
          alt=""
          class="is-login-logo mt-12 ml-12"
          src="@/assets/logo.png"
        >
      </div>
      <div class="column login-column-right max-height">
        <div class="columns full-height is-centered">
          <div class="column is-elevated is-vcentered">
            <div class="px-16 py-20 is-login-card has-shadow">
              <div class="full-width has-text-centered is-login-title has-text-medium-blue">
                {{$t('login.signIn')}}
              </div>
              <div class="is-text-h3 has-text-centered mb-8 mt-4 has-text-red">{{errorMessage}}</div>
              <BField class="pb-1">
                <BInput
                  v-model="email"
                  custom-class="is-italic"
                  icon="envelope"
                  icon-pack="far"
                  :placeholder="$t('fields.email')"
                  rounded
                  size="is-medium"
                />
              </BField>
              <BField class="pb-5">
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
              <BField class="has-text-title has-text-centered pb-8 is-text-p">
                <BCheckbox>{{$t('login.remember')}}</BCheckbox>
              </BField>
              <BField class="has-text-centered pb-4">
                <BButton
                  class="has-text-white"
                  :disabled="!isLoginEnabled"
                  expanded
                  :loading="loading"
                  rounded
                  size="is-medium"
                  type="is-orange"
                  @click="login">
                  {{$t('login.login')}}
                </BButton>
              </BField>
              <div class="field has-text-title has-text-centered is-text-p">
                {{$t('login.forget')}}
                <span
                  class="has-text-blue is-underlined"
                  @click="recover"
                >
                  {{$t('login.recover')}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts" src="./Login.ts" />
<style lang="scss" src="./Login.scss" />
