import { useState } from 'react';
import { Repo, ReposArraySchema } from '@/lib/RepoSchema';
import { User,UserSchema } from '@/lib/UserSchemas';
import { UserProfile } from '../components/UserProfile';
import { RepoList } from '../components/RepoList';

export default function Home() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  const handleSearch = async () => {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userRes.json();
    const parsedUser = UserSchema.parse(userData);
    setUser(parsedUser);

    const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
    const repoData = await repoRes.json();
    const parsedRepos = ReposArraySchema.parse(repoData);
    setRepos(parsedRepos);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite o usuário @exemplo"
          className="px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-600 mr-2"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 rounded bg-blue-600 text-white"
        >
          Buscar
        </button>
      </div>

      {user && <UserProfile user={user} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}
