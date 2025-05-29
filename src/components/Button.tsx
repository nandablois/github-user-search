type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export function Button({ onClick, disabled = false, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 rounded bg-green-600 text-white disabled:opacity-50 w-28"
    >
      {children}
    </button>
  );
}
