import { Repo } from "@/types/github";

type RepoProps = {
  repos: Repo[];
};

export function RepoList({ repos }: RepoProps) {
  return (
    <div className="space-y-4">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white dark:bg-gray-800 p-4 rounded shadow 
                     hover:bg-gray-100 dark:hover:bg-gray-700 
                     transform hover:scale-105 transition-transform"
        >
          <h3 className="font-semibold text-lg">{repo.name}</h3>
          {repo.description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {repo.description}
            </p>
          )}
        </a>
      ))}
    </div>
  );
}
