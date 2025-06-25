import { linuxCommands } from '@/data/commands';
import CommandCard from '@/components/CommandCard';

export default function Home() {
  const categories = [...new Set(linuxCommands.map(cmd => cmd.category))];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Frequently Used Linux Commands
        </h1>
        
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {linuxCommands
                .filter(cmd => cmd.category === category)
                .map(cmd => (
                  <CommandCard
                    key={cmd.command}
                    command={cmd.command}
                    description={cmd.description}
                    example={cmd.example}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}