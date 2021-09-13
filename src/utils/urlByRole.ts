import { ApiRoutes, User } from 'adamo-components'

export function formatRouteWithUser (user: User): string {
  let url = ''
  switch (user.role?.role_code) {
    case 'sys_admin':
      url = `/${ApiRoutes.SysAdmin}/${user.id_user}`
      break

    case 'dev':
      url = `/${ApiRoutes.Developer}/${user.id_user}`
      break

    case 'practice_manager':
      url = `/${ApiRoutes.Group}/${user.id_group}/${ApiRoutes.Location}/${user.id_location}/${ApiRoutes.PracticeManager}/${user.id_user}`
      break

    case 'mp':
      url = `/${ApiRoutes.Group}/${user.id_group}/${ApiRoutes.Location}/${user.id_location}/${ApiRoutes.MP}/${user.id_user}`
      break

    case 'nmp':
      url = `/${ApiRoutes.Group}/${user.id_group}/${ApiRoutes.Location}/${user.id_location}/${ApiRoutes.NMP}/${user.id_user}`
      break
  }

  return url
}

export function formatRouteWithUserCreate (role_code: string, groupId?: string, locationId?: string): string {
  let url = ''
  switch (role_code) {
    case 'sys_admin':
      url = `/${ApiRoutes.SysAdmin}`
      break

    case 'dev':
      url = `/${ApiRoutes.Developer}`
      break

    case 'practice_manager':
      url = `/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Location}/${locationId}/${ApiRoutes.PracticeManager}`
      break

    case 'mp':
      url = `/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Location}/${locationId}/${ApiRoutes.MP}`
      break

    case 'nmp':
      url = `/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Location}/${locationId}/${ApiRoutes.NMP}`
      break
  }

  return url
}
