#!/bin/bash
echo "🧪 Deploying Forge Fiend UI Explorer to A9 Development..."
echo "Site: a9wdc.atlassian.net"
echo ""

# Deploy to development environment
echo "📦 Deploying app to development..."
forge deploy -e development

# Install to A9 development site
echo "🔧 Installing to a9wdc.atlassian.net (development)..."
forge install -e development --site=a9wdc.atlassian.net

echo "✅ Development deployment complete!"
echo "🌐 Access your app at: https://a9wdc.atlassian.net"
echo "🧪 Development environment ready for testing!"