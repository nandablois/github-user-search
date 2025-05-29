type Props = {
  message: string;
};

export function ErrorMessage({ message }: Props) {
  return (
    <div className="mb-4 p-2 bg-red-500 text-white text-sm rounded w-72 text-center mx-auto">
      {message}
    </div>
  );
}
