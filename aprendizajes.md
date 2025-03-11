- "noImplicitAny" only triggers when TypeScript infers *any* in a context where it could infer something else or where no type is provided. For .catch, the type is explicitly *any* in the Promise spec, so it’s not an “implicit” *any*—it’s a deliberate design choice in TypeScript’s typings.
This exception exists for compatibility with JavaScript’s dynamic nature, where Promise rejections can be *any* value (e.g., Error, string, object, etc.).

- TypeScript’s built-in lib.dom.d.ts (included via "lib": ["es6"] from @tsconfig/recommended, plus "dom" implicitly for browser contexts) defines document.getElementById as:

```typescript
getElementById(elementId: string): HTMLElement | null;
// TypeScript infers jokeButton as HTMLElement | null directly from this signature.
```

