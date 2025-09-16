
<h1 align="center">dad_jokes</h1>
<p align="center"><i>Offline collection of funy not-funny  dad jokes</i></p>
<p align="center">
  <a href="https://www.npmjs.com/package/@ombiradar/dad-jokes"><img alt="npm" src="https://img.shields.io/npm/v/@ombiradar/dad-jokes?logo=npm"></a>
  <img alt="Downloads" src="https://img.shields.io/npm/dm/@ombiradar/dad-jokes.svg">
</p>

---

## Features

- No network calls — jokes stored locally
- Tiny footprint — < 2 kB
- Simple API — `random()` returns a joke

## Install

```bash
npm i @ombiradar/dad-jokes
# or
yarn add @ombiradar/dad-jokes
```

## Quick Start

```js
// ESM
import dad_jokes from '@ombiradar/dad-jokes';
console.log(dad_jokes.random());
```

```js
// CommonJS
const dad_jokes = require('@ombiradar/dad-jokes');
console.log(dad_jokes.random());
```

## API

| Member            | Type      | Description                        |
|-------------------|-----------|------------------------------------|
| `random()`        | function  | Returns one random dad joke as a string |


```js
import dad_jokes, { all } from '@ombiradar/dad-jokes';
console.log(dad_jokes.random());
```

## Versioning

- Patch: add ≥ 5 new jokes or fix typos
- Minor: add non-breaking functionality
- Major: breaking API changes / substantial optimizations

## Contributing

1. Fork & clone
2. Make your changes from the ideas list
3. Open a PR detailing your work

## License

ISC © 2025 Om Biradar