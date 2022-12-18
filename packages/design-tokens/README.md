# Tokens

Дизайн токены для X, дизайн системы X.

Что такое дизайн токены? Цитата из документации Salesforce разъясняет это:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – Salesforce UX

## Установка

```
npm i design-tokens
```

## Использование

**Javascript**

Получение доступа ко всем доступным группам токенов:

```js
// Только значения токенов
import { tokens } from "design-tokens";

console.log(tokens.colors.background); // 'rgba(246, 246, 247, 1)'

// Значения и метаданные токенов
import { metadata } from "design-tokens";

console.log(metadata.colors.background.value); // 'rgba(246, 246, 247, 1)'
console.log(metadata.colors.background.description); // 'For use as a background color, in components such as Page and Frame backgrounds.'
```

## Contributing

Мы всегда рады Вашим Pull requests!
