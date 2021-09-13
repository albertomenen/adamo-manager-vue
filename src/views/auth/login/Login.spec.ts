/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */

import { shallowMount, Wrapper } from '@vue/test-utils'

import Login from './Login.vue'

describe('Login.vue', () => {
  let wrapper: Wrapper<Login & { [key: string]: any }>

  beforeEach(() => {
    wrapper = shallowMount(Login, {
      stubs: ['BField', 'BInput', 'BCheckbox', 'BButton'],
      mocks: {
        $t: () => null,
        $tc: () => null,
        $router: { push: () => null }
      }
    })
  })

  test('renderiza correctamente', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('deshabilita el botón de inicio de sesión si no tiene usuario Y contraseña', () => {
    wrapper.vm.email = 'foo@bar.com'
    wrapper.vm.password = ''

    expect(wrapper.vm.isLoginEnabled).toBe(false)
  })

  test('habilita el botón de inicio de sesión si tiene usuario Y contraseña', () => {
    wrapper.vm.email = 'foo@bar.com'
    wrapper.vm.password = '123456'

    expect(wrapper.vm.isLoginEnabled).toBe(true)
  })

  test('muestra el home si inicia sesión correctamente', async () => {
    jest.spyOn(wrapper.vm, 'action_login').mockReturnValue(Promise.resolve({
      id_user: '1',
      id_group: '1',
      id_location: '1',
      name: 'Foo',
      user_name: 'foo',
      phone: '',
      last_name: 'Bar',
      email: 'foo@bar.com'
    }))
    const routerSpy = jest.spyOn(wrapper.vm.$router, 'push')

    wrapper.vm.login()
    await wrapper.vm.$nextTick()

    expect(routerSpy).toHaveBeenCalledWith({ name: 'patientsList' })
  })

  test('muestra un mensaje de error si el login es inválido', async () => {
    jest.spyOn(wrapper.vm, 'action_login')
      .mockImplementation(() => {
        throw Error('Usuario o contraseña incorrectos')
      })

    wrapper.vm.login()
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Usuario o contraseña incorrectos')
  })

  test.todo('Recuerda el usuario y contraseña')
})

