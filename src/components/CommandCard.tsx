interface CommandCardProps {
  command: string;
  description: string;
  example: string;
}

export default function CommandCard({ command, description, example }: CommandCardProps) {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{command}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-3">
        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded text-sm">{example}</code>
      </div>
    </div>
  );
}