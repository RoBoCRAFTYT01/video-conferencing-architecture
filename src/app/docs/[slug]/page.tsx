import { getFileContent } from "../../../lib/github";
import { remark } from "remark";
import html from "remark-html";

export default async function DocPage(props: { params: Promise<{ slug: string }> }) {
  // ✅ Await params
  const { slug } = await props.params;

  // fetch markdown from GitHub
  const md = await getFileContent(slug + ".md");

  // convert markdown -> HTML
  const processed = await remark().use(html).process(md);
  const content = processed.toString();

  return (
    <div className="prose mx-auto p-8">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
