// app/api/github/route.ts
import { NextResponse } from "next/server";

const USER = process.env.GITHUB_SAIL0KESH || "SAIL0KESH";

export async function GET() {
  const [user, repos] = await Promise.all([
    fetch(`https://api.github.com/users/${USER}`, { cache: "no-store" }).then(r => r.json()),
    fetch(`https://api.github.com/users/${USER}/repos?sort=updated&per_page=6`, { cache: "no-store" }).then(r => r.json()),
  ]);
  const top = Array.isArray(repos)
    ? repos
        .filter((r: any) => !r.fork)
        .sort((a: any, b: any) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
        .slice(0, 6)
        .map((r: any) => ({
          name: r.name,
          stars: r.stargazers_count,
          url: r.html_url,
          desc: r.description,
          lang: r.language,
        }))
    : [];
  return NextResponse.json({
    user: {
      name: user.name ?? USER,
      followers: user.followers ?? 0,
      public_repos: user.public_repos ?? 0,
    },
    repos: top,
  });
}
