#!/bin/bash
# cognitrain-react dev server — start
cd "$(dirname "$0")"

# Kill any existing vite processes
pkill -f "vite" 2>/dev/null
sleep 1

# Start dev server
npx vite --host --port 5173 &
sleep 2

# Verify
if curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/ | grep -q 200; then
    echo "✓ Server running at http://localhost:5173/"
else
    echo "⚠ Server may have started on another port (check output above)"
fi
