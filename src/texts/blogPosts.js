const modules = import.meta.glob("../blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) {
    return { data: {}, content: raw };
  }

  const [, fm, content] = raw.split(/---\s*\n/);

  const data = Object.fromEntries(
    fm
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [key, ...rest] = line.split(":");
        return [key.trim(), rest.join(":").trim()];
      }),
  );

  return { data, content };
}

export const blogPosts = Object.entries(modules).map(([path, raw]) => {
  const { data, content } = parseFrontmatter(raw);

  const slug = path.split("/").pop().replace(".md", "");

  const headers = content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((h) => h.replace("## ", ""));
  const tags = data.tags.split(",");
  return {
    slug,
    title: data.title,
    date: data.date,
    content,
    headers,
    tags,
    excerpt: data.excerpt || "",
    readingTime: data.readingTime || "",
  };
});
