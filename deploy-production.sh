#!/bin/bash
echo "Deploying Forge Fiend UI Explorer to production..."
forge deploy -e production
forge install -e production --site=your-site.atlassian.net
