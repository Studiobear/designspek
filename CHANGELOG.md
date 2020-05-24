# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.4.2](https://github.com/Studiobear/designspek/compare/v0.4.0...v0.4.2) (2020-05-24)


### Features

* **designspek:**
    * transform, perspective, transition ([a0186a4](https://github.com/Studiobear/designspek/commit/a0186a41dea2d6e8a0c86305f672a1ba979f44d8)) | ([c859e70](https://github.com/Studiobear/designspek/commit/c859e70f02beabae3421980959b98d5d4c5b17da))
* **designspek-components:**
    * **New! Form component** Automatically create forms by providing a fields object or manually insert `<Field />` component. Event delegation is used to pull field state and values into a convenient Form-level object.
        * Related: ([73ad705](https://github.com/Studiobear/designspek/commit/73ad705e30d5f60abee361528ad5180fb0e89dca)), ([0c58b97](https://github.com/Studiobear/designspek/commit/0c58b97c9fc5a00c8d2e75c8b0a0f8ed1dbf3d08)), ([18b7ff0](https://github.com/Studiobear/designspek/commit/18b7ff06aac386602ebe322c4e890de1a443bf25)), ([9a9f375](https://github.com/Studiobear/designspek/commit/9a9f3758db6d7a7e47269f8705531bb9afc23d84)), ([3ed4885](https://github.com/Studiobear/designspek/commit/3ed4885045cf12e32962462be9be5b0aef6b42da)), ([054a286](https://github.com/Studiobear/designspek/commit/054a286f217868d3d1280a9a82b7fe4bd9e97714)), ([93f306c](https://github.com/Studiobear/designspek/commit/93f306c07994cd00731dc2f6f344caa31b63348f)), ([14c526d](https://github.com/Studiobear/designspek/commit/14c526d1cf6516fdefa6371f050eed2dcfa785fd))


### Bug Fixes

* **designspek-components:**
    * checkbox and radio values ([fa467cd](https://github.com/Studiobear/designspek/commit/fa467cd62aa60eb0a5c5a5f93baa1b7b6774e760)) | ([9c8c09e](https://github.com/Studiobear/designspek/commit/9c8c09e8c096c0339fecd75d16ff29d5f3be596b))
    * click listener type & dispatch accordingly ([37c2801](https://github.com/Studiobear/designspek/commit/37c28017b07a7c4eb994a1c6cc8aee6aeb6eb424))

## [0.4.0](https://github.com/Studiobear/designspek/compare/v0.3.8...v0.4.0) (2020-04-06)

### Features

- **designspek-components:**
  - array handling for all components ([e79b843](https://github.com/Studiobear/designspek/commit/e79b843a9c830bcd0de9c03ad7ea3e8233c97bdf))

### [0.3.8](https://github.com/Studiobear/designspek/compare/v0.3.2...v0.3.8) (2020-03-29)

This release introduces `styled` arrays. Previously, a style object is submitted, then a css classname (`.go12345`) or stringed inline style (`{ text-align: center; }`) is spit out. Now, multiple style objects can be submitted with an array (`styled([style1, style2], theme, false)`) and classnames for each style object (`.go12345 .go12346`) or concatenated string (`{ text-align: center; font-weight: bold; }`) are returned.

This creates a major change in mentality of how **designspek** can utilize the compiled-nature of Svelte to simplify the layer of/between CSS-in-JS and SSR whilst the usualy good stuff: more modularity opportunities, increased perfomance, and reduced boilerplate.

### Features

- **designspek:**

  - accept keyframes + animation ([27c84a6](https://github.com/Studiobear/designspek/commit/27c84a6656dc654ef1c9d00742432de33a62babe))
  - method for applying multiple styles ([2bb9589](https://github.com/Studiobear/designspek/commit/2bb95898d14eb2478bd13b98bb15d2c7eeffbb31))
  - styled accepts arrays ([dd4a3bb](https://github.com/Studiobear/designspek/commit/dd4a3bb50bd565568a631940b6767509e9e5d12e))

- **designspek-components:**
  - table Components ([bf3f0bc](https://github.com/Studiobear/designspek/commit/bf3f0bc2e7633003251ef0c76a21d90d882e436a))

### Bug Fixes

- **designspek-components:**
  - add colspan to TD + pub 0.3.6 ([bbdc80a](https://github.com/Studiobear/designspek/commit/bbdc80a9f48464fe06bba8c4cf8bba10179a51a8))
- **designspek-components:**
  - fix storybook styles for Grid ([6cb9cc7](https://github.com/Studiobear/designspek/commit/6cb9cc798f8e343bed1bdfd9672c30656184cceb))

### [0.3.2](https://github.com/Studiobear/designspek/compare/v0.3.1...v0.3.2) (2020-03-21)

### Features

**designspek-components:**

- refactor Card component from covid app ([4a63257](https://github.com/Studiobear/designspek/commit/4a632571b862131f421618a9e8dcd2db342ffb07))

### Bug Fixes

**designspek-components:**

- remove circular dependencies ([a470304](https://github.com/Studiobear/designspek/commit/a470304cb4be0eefa34555811d8217d611f68041))

### [0.3.1](https://github.com/Studiobear/designspek/compare/v0.2.4...v0.3.1) (2020-03-19)

### Features

**designspek:**

- new styled parameter: ssr {boolean} ([716cc49](https://github.com/Studiobear/designspek/commit/716cc49a1f58a1dbbea4852b456fce6f7e222b93))
- render all to global for html tag ([39621de](https://github.com/Studiobear/designspek/commit/39621def72cc411195974e224a245652efb38f0e))
  **designspek-components:**
- integrate designspek styled ssr paramenter ([187b94c](https://github.com/Studiobear/designspek/commit/187b94c7f7ebfc93359d275a71749f6d3453eb37))

### Bug Fixes

**designspek:**

- global default values to rem not px ([812e3a3](https://github.com/Studiobear/designspek/commit/812e3a33b439387b57654de17d20e9b107060850))
  **designspek-components:**
- alter prop passing to avoid conflicts ([b2f8852](https://github.com/Studiobear/designspek/commit/b2f8852e5792a8b2b7afd95edbb58d2235c9f827))

## [0.2.4](https://github.com/Studiobear/designspek/compare/v0.2.2...v0.2.4) (2020-03-17)

### Features

- **designspek:** add `removeSSR` to API ([476d4e0](https://github.com/Studiobear/designspek/commit/476d4e03c9a251f90d39e47c2cc3829ec0e537b7))

### Bug Fixes

- **designspek:** css pseudo ssr parse error ([aa952be](https://github.com/Studiobear/designspek/commit/aa952be2547cf83259ddab30086bd6f8fe2a9145))

## [0.2.2](https://github.com/Studiobear/designspek/compare/v0.2.0...v0.2.2) (2020-03-16)

Cleaned up logging

### Bug Fixes

- package deps ([42e94d5](https://github.com/Studiobear/designspek/commit/42e94d5e9e87280bb0d5ae2c52ed02915186d552))

## [0.2.0](https://github.com/Studiobear/designspek/compare/v0.1.1...v0.2.0) (2020-03-14)

First quasi-stable release!! Biggest hurdle for proof-of-concept of implementing SSR completed.

### Features

- **designspek:**
  - conditional global antialiasing ([e7403b5](https://github.com/Studiobear/designspek/commit/e7403b55519c5874801764084577b1476fcd27e5))
  - extractCSS SSR method ([e73e258](https://github.com/Studiobear/designspek/commit/e73e2581b9daca810a7c21df2a8ca9a47ed3b450))
  - forward styles + conditional theme check ([14527a4](https://github.com/Studiobear/designspek/commit/14527a4721dc78d02668cf361914fc3dd5e32ed4))
  - memoization ([d71ef9f](https://github.com/Studiobear/designspek/commit/d71ef9f3ce68d975526bb2e82a56c89cd7f5a292))
  - stylLib for SSR ([9d9dda9](https://github.com/Studiobear/designspek/commit/9d9dda9dcbdb77d632cf8d845ed32e559254cfa5))
- **designspek-components:**
  - SVG component ([2083fd5](https://github.com/Studiobear/designspek/commit/2083fd58be08474e735193c76b917bbd16e04c74))
- **site:**
  load components with ssr ([be875b3](https://github.com/Studiobear/designspek/commit/be875b3e2feef574ec0f2a3711acefa85cec7a33))

### Bug Fixes

- **designspek:**
  - global parsing over filters props ([4a84fd2](https://github.com/Studiobear/designspek/commit/4a84fd233f50df1d639807ab9a0a05f2ebdb1053))
  - silence logs ([d5f29ff](https://github.com/Studiobear/designspek/commit/d5f29ff500bbd26ae679982cada3efd8351281d9))
  - styled css misc loop breaks ([3592e97](https://github.com/Studiobear/designspek/commit/3592e97d836df5525cb32f720fd9d65e3538baa5))
- **designspek-components:**
  - conditional for theme store ([0514bd9](https://github.com/Studiobear/designspek/commit/0514bd9da1efdf0f30a4d1d3174ad72b859b50cb))

## 0.1.1 (2020-03-03)

### Features

- initial refactor from Studiobear core ([1444b70](https://github.com/Studiobear/svelte-system-ui/commit/1444b70def7f0d9a5505baa17322e60e866d0328))
