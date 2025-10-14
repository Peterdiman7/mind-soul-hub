#!/bin/bash
PROJECT_ROOT=/home/devalex/mindsoulhub.com
LOG_FILE="$HOME/mindsoulhub-backend.log"

# Already running?
if pgrep -f "$PROJECT_ROOT/src/services/server.js" > /dev/null; then
  echo "Backend already running, exiting."
  exit 0
fi

cd "$PROJECT_ROOT" || exit

while true; do
  echo "[$(date)] Starting Mindsoulhub backend..." >> "$LOG_FILE" 2>&1
  /usr/bin/node "$PROJECT_ROOT/src/services/server.js" >> "$LOG_FILE" 2>&1
  echo "[$(date)] Backend crashed or stopped. Restarting in 5 seconds..." >> "$LOG_FILE" 2>&1
  sleep 5
done
