import { User } from "@/types/github";

type UseProfileProps = {
  user: User;
};

export function UserProfile({ user }: UseProfileProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <img src={user.avatar_url} alt={user.name} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>@{user.login}</p>
      {user.bio && <p>{user.bio}</p>}
    </div>
  );
}
