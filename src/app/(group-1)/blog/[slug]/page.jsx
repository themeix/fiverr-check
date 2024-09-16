import { readdir, readFile } from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
export async function generateStaticParams() {
  const files = await readdir(path.join(process.cwd(), "src/(posts)"));
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(".mdx", "") }));
}
export default async function Page({ params }) {
  const content = await readFile(
    path.join(process.cwd(), "src/(posts)", `${params.slug}.mdx`),
    "utf-8"
  );

  const post = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });
  const metadata = post.frontmatter;
  return (
    <div className="px-4">
      <ul className="mb-2">
        <li><span className="font-semibold">Title:</span> {metadata.title ?? ""}</li>
        <li><span className="font-semibold">Author:</span> {metadata.author ?? ""}</li>
        <li><span className="font-semibold">Categories:</span> {metadata.categories.join(', ') ?? ""}</li>
        <li><span className="font-semibold">Tags:</span> {metadata.tags?.join(', ') ?? ""}</li>
        <li><span className="font-semibold">Publish Date:</span> {metadata.publishDate ?? ""}</li>
      </ul>
      <div>
        {post.content}
      </div>
    </div>
  );
}
