interface LinuxCommand {
  command: string;
  description: string;
  example: string;
  category: string;
}

export const linuxCommands: LinuxCommand[] = [
  {
    command: "ls",
    description: "List directory contents",
    example: "ls -la",
    category: "File Operations"
  },
  {
    command: "cd",
    description: "Change directory",
    example: "cd /path/to/directory",
    category: "File Operations"
  },
  {
    command: "pwd",
    description: "Print working directory",
    example: "pwd",
    category: "File Operations"
  },
  {
    command: "mkdir",
    description: "Make directory",
    example: "mkdir new_directory",
    category: "File Operations"
  },
  {
    command: "rm",
    description: "Remove files or directories",
    example: "rm file.txt",
    category: "File Operations"
  },
  {
    command: "cp",
    description: "Copy files and directories",
    example: "cp file1.txt file2.txt",
    category: "File Operations"
  },
  {
    command: "mv",
    description: "Move/rename files and directories",
    example: "mv old_name.txt new_name.txt",
    category: "File Operations"
  },
  {
    command: "cat",
    description: "Concatenate and display file content",
    example: "cat file.txt",
    category: "File Operations"
  },
  {
    command: "grep",
    description: "Search text patterns in files",
    example: "grep 'pattern' file.txt",
    category: "Text Processing"
  },
  {
    command: "ps",
    description: "Show process status",
    example: "ps aux",
    category: "Process Management"
  },
  {
    command: "top",
    description: "Display system tasks",
    example: "top",
    category: "Process Management"
  },
  {
    command: "kill",
    description: "Terminate processes",
    example: "kill -9 PID",
    category: "Process Management"
  },
  {
    command: "chmod",
    description: "Change file permissions",
    example: "chmod 755 file.txt",
    category: "File Permissions"
  },
  {
    command: "chown",
    description: "Change file owner and group",
    example: "chown user:group file.txt",
    category: "File Permissions"
  },
  {
    command: "df",
    description: "Display disk space usage",
    example: "df -h",
    category: "System Information"
  },
  {
    command: "du",
    description: "Display file and directory space usage",
    example: "du -sh *",
    category: "System Information"
  }
];