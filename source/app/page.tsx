async function getFiles() {
  const res = await fetch(
    "https://api.github.com/repos/RoBoCRAFTYT01/video-conferencing-architecture/contents",
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch repo files");
  return res.json();
}

export default async function Home() {
  const files = await getFiles();
  console.log(files);
  const mdFiles = files.filter((f: any) => f.name.endsWith(".md"));

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">📚 Documentation</h1>
      <ul className="mt-4 space-y-2">
        {mdFiles.map((file: any) => (
          <li key={file.name}>
            <a
              href={`/docs/${file.name.replace(/\.md$/, "")}`}
              className="text-blue-500 hover:underline"
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
