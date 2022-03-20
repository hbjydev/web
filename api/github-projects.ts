import { Octokit, App } from 'octokit';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const query = `
{
  user(login: "hbjydev") {
    repositories(
      first: 10
      orderBy: {field: STARGAZERS, direction: DESC}
      ownerAffiliations: OWNER
    ) {
      nodes {
        name
        stargazerCount
        url
        description
        issues(states: OPEN) {
          totalCount
        }
        watchers {
          totalCount
        }
      }
    }
  }
}
`;

interface QueryCountObject { totalCount: number; };

interface QueryResponse {
    user: {
        repositories: {
            nodes: {
                name: string;
                stargazerCount: number;
                url: string;
                description: string;
                issues: QueryCountObject;
                watchers: QueryCountObject;
            }[]
        }
    }
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const ok = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const res = await ok.graphql(query) as QueryResponse;
    const out = res.user.repositories.nodes.map(v => ({
        name: v.name,
        stars: v.stargazerCount,
        issues: v.issues.totalCount,
        watchers: v.watchers.totalCount,

        url: v.url,
        description: v.description,
    }));

    response.setHeader('Cache-Control', 's-maxage=1800');
    response.json(out);
}
