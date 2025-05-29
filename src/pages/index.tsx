import { useState } from 'react';
import { Repo, ReposArraySchema } from '@/lib/RepoSchema';
import { User, UserSchema } from '@/lib/UserSchemas';
import { UserProfile } from '../components/UserProfile';
import { RepoList } from '../components/RepoList';
import { InputForm } from '../components/InputForm';
import { ErrorMessage } from '../components/ErrorMessage';

export default function Home() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {

    if (!username.trim()) {
      setError('Por favor, informe um nome de usuário.');
      return;
    }
    
    setError(null);
    setUser(null);
    setRepos([]);
    setLoading(true);

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);

      if (!userRes.ok) {
        if (userRes.status === 404) {
          setError('Usuário não encontrado.');
        } else {
          setError(`Erro: ${userRes.statusText}`);
        }
        setLoading(false);
        return;
      }

      const userData = await userRes.json();
      const parsedUser = UserSchema.safeParse(userData);

      if (!parsedUser.success) {
        console.error('Erro ao validar dados do usuário:', parsedUser.error);
        setError('Dados do usuário inválidos.');
        setLoading(false);
        return;
      }

      setUser(parsedUser.data);

      const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);

      if (!repoRes.ok) {
        setError(`Erro ao buscar repositórios: ${repoRes.statusText}`);
        setLoading(false);
        return;
      }

      const repoData = await repoRes.json();
      const parsedRepos = ReposArraySchema.safeParse(repoData);

      if (!parsedRepos.success) {
        console.error('Erro ao validar dados dos repositórios:', parsedRepos.error);
        setError('Dados dos repositórios inválidos.');
        setLoading(false);
        return;
      }

      setRepos(parsedRepos.data);
    } catch (err: any) {
      setError('Erro inesperado ao buscar usuário.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <img
        src="/github.gif"
        alt="GitHub gif"
        className="w-20 h-20 mx-auto my-4 rounded-full"
      />

      <InputForm
        username={username}
        onUsernameChange={setUsername}
        onSearch={handleSearch}
        loading={loading}
      />

      {error && <ErrorMessage message={error} />}

      {user && (
        <div className="mb-6 w-full max-w-xl">
          <UserProfile user={user} />
        </div>
      )}

      {repos.length > 0 && (
        <div className="w-full max-w-xl">
          <RepoList repos={repos} />
        </div>
      )}
    </div>
  );
}
