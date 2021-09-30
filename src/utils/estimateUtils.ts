/* eslint-disable @typescript-eslint/no-explicit-any */

interface EstimateInterface {
  hours: string
  minutes: string
  seconds: string
}

/**
 * Retorna el estimado de tiempo del tratamiento en segundos
 * @param points Puntos de teaching
 * @param cycles Ciclos a calcular
 */
export const getEstimateSeconds = (points: Array<any>, cycles: number): number => {
  if (!points?.length) return 0

  let estimate: number

  estimate = points.reduce((p, q) => {
    return p + q.duration + 10 // 10 segundos para pasar entre punto y punto
  }, 0)

  estimate -= 10 // Se le restan 10 ya que en el último punto no regresa a ningún lado
  estimate *= cycles // Se multiplica por el número de ciclos
  estimate += 13 // Se agrega el tiempo de reposo a posición inicial
  estimate += 10 * (cycles) // 10 segundos toma pasar del final de un ciclo al inicio del otro

  return estimate
}

/**
 * Retorna el estimado de tiempo del tratamiento en un objeto que contiene los minutos y segundos en formato de dos dígitos
 * @param points Puntos de teaching
 * @param cycles Ciclos a calcular
 */
export const getEstimateFormat = (points: Array<any>, cycles: number): EstimateInterface => {
  const estimate = getEstimateSeconds(points, cycles)
  return {
    hours: ('0' + Math.floor(estimate / 3600)).slice(-2),
    minutes: ('0' + (Math.floor(estimate / 60) % 60)).slice(-2),
    seconds: ('0' + estimate % 60).slice(-2)
  }
}
