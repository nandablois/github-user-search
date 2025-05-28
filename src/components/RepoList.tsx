import { Repo } from "@/types/github";

type Props = {
  repos: Repo[];
};

export function RepoList({ repos }: Props) {
  return (
    <div className="space-y-4">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white dark:bg-gray-800 p-4 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <h3 className="font-semibold">{repo.name}</h3>
          {repo.description && <p className="text-sm">{repo.description}</p>}
        </a>
      ))}
    </div>
  );
}
