import { Input } from './Input';
import { Button } from './Button';

type Props = {
  username: string;
  onUsernameChange: (username: string) => void;
  onSearch: () => void;
  loading: boolean;
};

export function InputForm({ username, onUsernameChange, onSearch, loading }: Props) {
  return (
    <div className="mb-6 text-center">
      <h1 className="mb-4 text-xl">Digite o usuário:</h1>
      <div className="flex justify-center gap-2">
        <Input
          value={username}
          onChange={onUsernameChange}
          placeholder="@exemplo"
        />
        <Button onClick={onSearch} disabled={loading}>
          {loading ? 'Carregando...' : 'Buscar'}
        </Button>
      </div>
    </div>
  );
}
