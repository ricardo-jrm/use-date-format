<div align="center">

# 🌘 `@ricardojrmcom/use-date-format`

<b>Format dates with React</b>

![build](https://img.shields.io/github/workflow/status/ricardojrmcom/use-date-format/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardojrmcom/use-date-format?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardojrmcom)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardojrmcom/use-date-format?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardojrmcom/use-date-format?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardojrmcom/use-date-format?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```ts
npm install @ricardojrmcom/use-date-format

yarn add @ricardojrmcom/use-date-format
```

<br />

### <b>Usage</b>

```ts
import { useDateFormat, useDateRelative } from '@ricardojrmcom/use-date-format';

useDateFormat(new Date('2022-01-31'))
-> '12:00 AM - 31 Jan, 2022 GMT'

useDateRelative(new Date('2022-01-31'))
->  {
      from: '2 months ago',
      fromNow: 'in 2 months',
      to: 'in 2 months',
      toNow: '2 months ago',
    }
```

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardojrmcom/use-date-format/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardojrmcom](https://github.com/ricardojrmcom))

Bootstrapped with 🟣[@ricardojrmcom/supernova](https://github.com/ricardojrmcom/supernova)

<br />
