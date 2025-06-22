interface CommandCardProps {
  command: string;
  description: string;
  example: string;
}

export default function CommandCard({ command, description, example }: CommandCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">{command}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-3">
        <code className="px-2 py-1 bg-gray-100 rounded text-sm">{example}</code>
      </div>
    </div>
  );
}