export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[()]/g, "")
    .replace(/\./g, "")
    .replace(/\//g, "-");