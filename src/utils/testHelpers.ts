/* eslint-disable @typescript-eslint/no-explicit-any */

export const mockImport = (path: string): void => {
  jest.mock(path, () => ({ render: (createElement: any) => createElement('div') }))
  afterAll(() => jest.unmock(path))
}

export const mockImports = (paths: string[]): void => {
  for (const path of paths) mockImport(path)
}
