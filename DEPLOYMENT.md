# Forge Fiend UI Explorer - Deployment Guide

## 🎯 A9 Group Deployment Instructions

### Prerequisites
- Forge CLI installed and authenticated
- Access to a9wdc.atlassian.net
- Node.js 18.x or higher

### 🧪 Development Deployment

```bash
# Run tests first
npm test

# Deploy to development
./deploy-development.sh
```

### 🚀 Production Deployment

```bash
# Run full test suite
npm run test:coverage

# Deploy to production
./deploy-production.sh
```

## 🔧 Manual Deployment Steps

### 1. Development Environment
```bash
forge deploy -e development
forge install -e development --site=a9wdc.atlassian.net
```

### 2. Production Environment
```bash
forge deploy -e production
forge install -e production --site=a9wdc.atlassian.net
```

## 🌐 Access Points

After deployment, the app will be available at:
- **Global Navigation**: Apps → Forge Fiend UI Explorer
- **Direct URL**: `https://a9wdc.atlassian.net/plugins/servlet/ac/forge-fiend-ui-explorer/main`

## 🧪 Testing in Deployed Environment

### Verify Installation
1. Navigate to Jira Global Navigation
2. Look for "Forge Fiend UI Explorer" in Apps menu
3. Click to open the global page
4. Test modal dialog functionality
5. Verify user authentication works

### Test Scenarios
- ✅ App loads without errors
- ✅ Welcome message displays
- ✅ "Explore Jira UI" button works
- ✅ Modal opens with UI element descriptions
- ✅ User information loads correctly
- ✅ Modal closes properly

## 🔍 Troubleshooting

### Common Issues
1. **App not appearing**: Check app permissions and installation
2. **Authentication errors**: Verify Forge CLI is authenticated
3. **Runtime errors**: Check browser console for JavaScript errors

### Debug Commands
```bash
# Check deployment status
forge deploy --help

# View app logs
forge logs

# List installed apps
forge install --list
```

## 🔄 Update Deployment

To update an existing deployment:
```bash
# Update development
forge deploy -e development
forge install -e development --site=a9wdc.atlassian.net --upgrade

# Update production
forge deploy -e production
forge install -e production --site=a9wdc.atlassian.net --upgrade
```

## 📊 Monitoring

After deployment, monitor:
- App performance in Jira
- User adoption metrics
- Error logs and feedback
- Feature usage analytics

## 🎯 Next Steps

1. **Test thoroughly** in development environment
2. **Gather feedback** from A9 team members
3. **Deploy to production** when ready
4. **Monitor usage** and iterate based on feedback