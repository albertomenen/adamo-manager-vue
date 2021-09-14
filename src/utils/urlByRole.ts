import { ApiRoutes } from 'adamo-components'

export function formatRouteWithUser (role_code: string, userId: string, groupId?: string, locationId?: string): string {
  let url = ''
  switch (role_code) {
    case 'sys_admin':
      url = `/${ApiRoutes.SysAdmin}/${userId}`
      break

    case 'dev':
      url = `/${ApiRoutes.Developer}/${userId}`
      break

    case 'practice_manager':
      url = `/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Location}/${locationId}/${ApiRoutes.PracticeManager}/${userId}`
      break

    case 'mp':
      url = `/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Location}/${locationId}/${ApiRoutes.MP}/${userId}`
      break

    case 'nmp':
      url = `/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Location}/${locationId}/${ApiRoutes.NMP}/${userId}`
      break

    case 'patient':
      url = `/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}/${userId}`
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
