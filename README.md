# Yepeng Ding's Homepage

The source code of Yepeng Ding's Homepage for academic use.

This front-end application is developed based on React.js with TypeScript. The architecture and components are reusable
for other purposes.

## Deployment

```shell
npm run deploy
```

## Development

### Setup

```shell
yarn install
```

### Start

```shell
yarn start
```

### Build

```shell
yarn build
```

### OpenSSL Compatibility Issue

- Start with below

```shell
yarn start_legacy
```

- Deploy the project after executing below

```shell
export NODE_OPTIONS=--openssl-legacy-provider
```

## References

- [React documentation](https://reactjs.org/)
- [react-i18next](https://react.i18next.com/)
- [react-gh-pages](https://github.com/gitname/react-gh-pages)
- [react-bulma-components](https://react-bulma.dev/)
- [styled-components](https://styled-components.com/)
- [bibtex-js-parser](https://github.com/yepengding/bibtex-js-parser)
