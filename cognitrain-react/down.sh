#!/bin/bash
# cognitrain-react dev server — stop
cd "$(dirname "$0")"

# Kill all vite/node processes on ports 5173-5180
for port in $(seq 5173 5180); do
    fuser -k "$port/tcp" 2>/dev/null
done

# Also kill any remaining vite processes by name
pkill -f "vite" 2>/dev/null

echo "✓ Dev server stopped"
