<template>
<div class="sidebar-page">
  <section class="sidebar-layout">
    <BSidebar
      :fullheight="true"
      icon="fas"
      mobile="reduce"
      open
      position="static"
      type="is-medium-blue"
    >
      <div class="">
        <div class="block sidebar-block has-text-centered m-0">
          <img
            alt="adamo-logo"
            class="sidebar-logo p-4"
            src="@/assets/logo-white.png"
          />
        </div>
        <BMenu class="is-custom-mobile mt-10">
          <BMenuList>
            <BMenuItem
              :active="routeName.includes('groups') || routeName.includes('group')"
              icon="hospital"
              icon-pack="fas"
              :label="$tc('groups.num', 2)"
              size="is-medium"
              tag="router-link"
              :to="{ name: 'groupsList' }"
            />
            <BMenuItem
              :active="routeName.includes('data')"
              icon="notes-medical"
              icon-pack="fas"
              :label="$tc('data.num', 2)"
              size="is-medium"
              tag="router-link"
              :to="{ name: 'dataUsers' }"
            />
            <BMenuItem
              :active="routeName.includes('patients') || routeName.includes('patient') || routeName.includes('treatment')"
              icon="hospital-user"
              icon-pack="fas"
              :label="$tc('patients.num', 2)"
              size="is-medium"
              tag="router-link"
              :to="{ name: 'patientsList' }"
            />
          </BMenuList>
        </BMenu>
      </div>
    </BSidebar>

    <div class="content-section">
      <header class="has-text-white has-background-blue py-2 px-4 is-flex is-justify-content-end is-align-items-center navbar">
        <div>
          <AMenuUser
            :showAgenda="false"
          />
        </div>
      </header>
      <div class="pt-6 px-10">
        <ABreadcrumb
          textColor="has-text-title"
        />
        <div class="page-content is-fullheight mt-6">
          <RouterView />
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script src="./AppLayout.ts" lang="ts"></script>

<style lang="scss">
@import "~adamo-components/src/assets/styles/colors";

.sidebar-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  .sidebar-layout {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  }
}
.sidebar-block {
  height: 70px;
  border-bottom: 1px #0C518C solid;

  .sidebar-logo {
    height: 70px;
  }
}
.content-section {
  width: 100%;

  .navbar {
    height: 70px;
  }
}
.menu {
  .menu-list li {
    height: 70px;
    margin-bottom: 11px;

    .icon-text {
      color: white;
      font-weight: 600;
      font-size: 18px;
      padding-top: 16px;
      height: 70px;
    }

    .icon {
      top: 10%;
      margin-left: 15px;
      margin-right: 15px;
    }
  }

  .menu-list a:hover  {
    color: $blue;
    height: 70px;
    border-radius: 35px 0px 0px 35px;
  }

  .menu-list a.is-active  {
    background-color: white;
    color: $blue;
    height: 70px;
    border-radius: 35px 0px 0px 35px;
  }
}
@media screen and (max-width: 768px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini-mobile {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
              }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 769px) {
  .menu {
    padding-left: 3rem !important;
  }
}
</style>
