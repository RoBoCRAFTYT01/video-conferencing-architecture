export async function getFileContent(path: string) {
    const url = `https://raw.githubusercontent.com/RoBoCRAFTYT01/video-conferencing-architecture/main/${path}`;
    const res = await fetch(url, { next: { revalidate: 60 } }); // cache for 1 min
    if (!res.ok) throw new Error(`Failed to fetch ${path}`);
    return res.text();
  }
  