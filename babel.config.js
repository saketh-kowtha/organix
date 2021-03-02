module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'inline-react-svg',
      {
        svgo: false
      }
    ],
    ['styled-components', { ssr: true, displayName: false, fileName: false, pure: true }]
  ],
  env: {
    production: {
      presets: [
        [
          'next/babel',
          {
            // TODO: Remove when airbnb/babel-plugin-inline-react-svg#91 gets fixed
            'preset-react': { runtime: 'classic', pragma: '__jsx' }
          }
        ]
      ],
      plugins: [
        [
          // TODO: Remove when airbnb/babel-plugin-inline-react-svg#91 gets fixed
          // Source: https://github.com/vercel/next.js/blob/canary/packages/next/build/babel/preset.ts
          'next/dist/build/babel/plugins/jsx-pragma',
          {
            module: 'react',
            importAs: 'React',
            pragma: '__jsx',
            property: 'createElement'
          }
        ],
        ['transform-remove-console', { exclude: ['error', 'warn'] }]
      ]
    }
  }
}
