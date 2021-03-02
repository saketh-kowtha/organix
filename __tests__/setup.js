// Used for __tests__/testing-library.js
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import { cleanup } from '@testing-library/react'

const modalPortal = document.createElement('div')

modalPortal.id = 'modal-portal'
document.body.appendChild(modalPortal)

// SNIPPET TAKEN FROM
// https://github.com/vercel/next.js/issues/5416#issuecomment-441589662
// Manually mock next/dynamic as the next.js (7.0.2) babel plugin will compile to Webpack
// lazy imports (require.resolveWeak) who're conflicting with the Node module system.

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null
  DynamicComponent.displayName = 'LoadableComponent'
  DynamicComponent.preload = jest.fn()
  return DynamicComponent
})

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    }
  }

afterAll(cleanup)
