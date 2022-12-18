const colorScheme = () =>
  typeof window !== "undefined"
    ? window?.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : "light";

export { colorScheme };
