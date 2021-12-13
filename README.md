<div align="center">

# 🌘 `@ricardo-jrm/use-date-format`

<b>Format dates with React</b>

![build](https://img.shields.io/github/workflow/status/ricardo-jrm/use-date-format/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardo-jrm/use-date-format?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardo--jrm)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardo-jrm/use-date-format?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardo-jrm/use-date-format?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardo-jrm/use-date-format?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```ts
npm install @ricardo-jrm/use-date-format

yarn add @ricardo-jrm/use-date-format
```

<br />

### <b>Usage</b>

```ts
import { useDateFormat, useDateRelative } from '@ricardo-jrm/use-date-format';

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

[MIT](https://github.com/ricardo-jrm/use-date-format/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardo-jrm](https://github.com/ricardo-jrm))

Bootstrapped with 🟣[@ricardo-jrm/supernova](https://github.com/ricardo-jrm/supernova)

<br />
