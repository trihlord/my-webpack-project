# Code Style

## ToC

-   [Components](#components)
-   [Constants](#constants)
-   [Docs](#docs)

## Components

```bash
# at project root
src
└── components
    └── MyComponent
        ├── MyComponent.module.css
        ├── MyComponent.stories.tsx
        ├── MyComponent.tsx
        └── index.ts
```

```tsx
// at MyComponent.tsx
export interface MyComponentProps {}

export function MyComponent(props: MyComponentProps) {
    return (
        // ...
    )
}
```

```tsx
// at index.ts
export * from './MyComponent.tsx'
```

## Constants

```bash
# at project root
src
└── constants
    └── myEnumName.ts
```

```ts
// at myEnumName.ts
export enum MyEnumName = {
    CONSTANT_NAME = 'constantValue',
}
```

## Docs

```bash
# at project root
docs
└── my-doc.md
```

```md
<!-- at my-doc.md -->

# My Doc

My doc content.
```
