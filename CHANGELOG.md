# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.3](https://github.com/Studiobear/designspek/compare/v0.3.1...v0.3.3) (2020-03-21)


### Features

* **designspek-components:** refactor Card component from covid app ([4a63257](https://github.com/Studiobear/designspek/commit/4a632571b862131f421618a9e8dcd2db342ffb07))


### Bug Fixes

* **designspek-components:** remove circular dependencies ([a470304](https://github.com/Studiobear/designspek/commit/a470304cb4be0eefa34555811d8217d611f68041))

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
