#!/bin/bash
echo "🚀 Deploying Forge Fiend UI Explorer to A9 Production..."
echo "Site: a9wdc.atlassian.net"
echo ""

# Deploy to production environment
echo "📦 Deploying app..."
forge deploy -e production

# Install to A9 production site
echo "🔧 Installing to a9wdc.atlassian.net..."
forge install -e production --site=a9wdc.atlassian.net

echo "✅ Production deployment complete!"
echo "🌐 Access your app at: https://a9wdc.atlassian.net"
