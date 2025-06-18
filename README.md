# 🔥 Forge Fiend UI Explorer

A comprehensive showcase of Atlaskit UI components for Forge apps, featuring advanced dynamic tables with sorting, filtering, and pagination.

![Forge Fiend UI Explorer](https://img.shields.io/badge/Forge-UI%20Explorer-blue)
![Atlassian Cloud](https://img.shields.io/badge/Platform-Atlassian%20Cloud-blue)
![Version](https://img.shields.io/badge/Version-2.9.0-green)

## 🚀 Overview

Forge Fiend UI Explorer is a demonstration app that showcases the full capabilities of Atlaskit UI components within Forge apps. It provides a comprehensive library of UI components with proper theming, advanced data handling, and interactive features.

### Key Features

- **📊 Advanced Dynamic Tables**: Full sorting, filtering, pagination, and rich data visualization
- **🎨 Complete Atlaskit Theming**: Using design tokens for consistent styling
- **🧩 Comprehensive Component Library**: Buttons, forms, tables, feedback elements, and more
- **📱 Responsive Design**: Adapts to different screen sizes and devices
- **🔍 Interactive Examples**: Live demonstrations of component capabilities

## 📋 Installation & Setup

### Prerequisites
- [Forge CLI](https://developer.atlassian.com/platform/forge/getting-started/) installed and configured
- Node.js 18.x or higher
- Access to an Atlassian Cloud instance

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/a9group/forgefiend_ui_explorer.git
cd forge_fiend_ui_explorer
```

2. **Install dependencies**
```bash
npm install
```

3. **Deploy to development**
```bash
./deploy-development.sh
```

4. **Install on your Atlassian site**
```bash
forge install -e development --site=your-site.atlassian.net --product=jira
```

## 🏗️ Project Structure

The project is organized as follows:

```
forge_fiend_ui_explorer/
├── src/
│   ├── components/             # React components
│   │   ├── App.js              # Main application component
│   │   └── examples/           # Component examples by category
│   │       ├── ButtonExamples.js
│   │       ├── TableExamples.js
│   │       ├── FormExamples.js
│   │       ├── FeedbackExamples.js
│   │       ├── NavigationExamples.js
│   │       └── DataDisplayExamples.js
│   ├── services/               # API and data services
│   │   └── userService.js      # User data service
│   ├── styles/                 # Styling and theming
│   │   └── theme.js            # Atlaskit design tokens and theme
│   └── __tests__/              # Test files
├── static/                     # Static assets
│   └── main/                   # Main entry point
├── manifest.yml                # Forge app manifest
└── package.json                # Dependencies and scripts
```

## 🧩 Component Library

### Advanced Dynamic Tables

The TableExamples component demonstrates a fully-featured dynamic table with:

- **Sorting**: Click column headers to sort data
- **Filtering**: Filter by status, role, or other attributes
- **Search**: Global search across multiple fields
- **Pagination**: Configurable page sizes with navigation controls
- **Rich Content**: Avatars, lozenges, and formatted text in cells

```jsx
import React from 'react';
import { TableExamples } from './components/examples/TableExamples';

// Use the component in your app
const MyPage = () => (
  <div>
    <h1>My Forge App</h1>
    <TableExamples />
  </div>
);
```

### Atlaskit Theming System

The project uses Atlaskit's design tokens for consistent styling:

```jsx
import { componentStyles, spacing, colors } from './styles/theme';

// Use in your components
const MyComponent = () => (
  <div style={componentStyles.card}>
    <h2 style={{ marginBottom: spacing.md, color: colors.text.primary }}>
      My Component
    </h2>
    {/* Component content */}
  </div>
);
```

## 🔧 Extending the Library

### Adding New Components

1. Create a new file in `src/components/examples/`:

```jsx
// src/components/examples/NewComponentExamples.js
import React from 'react';
import { Box, Stack, Heading, Text } from '@atlaskit/primitives';
import { componentStyles } from '../../styles/theme';

export const NewComponentExamples = () => {
  return (
    <Box paddingInline="space.200">
      <Stack space="space.400">
        <Stack space="space.100">
          <Heading size="medium">✨ New Component</Heading>
          <Text>Description of your new component.</Text>
        </Stack>
        
        {/* Your component examples */}
        <Box style={componentStyles.card}>
          {/* Component content */}
        </Box>
      </Stack>
    </Box>
  );
};
```

2. Import and add to the App.js component:

```jsx
import { NewComponentExamples } from './examples/NewComponentExamples';

// Add to the TabPanel section
<TabPanel>
  <NewComponentExamples />
</TabPanel>
```

### Enhancing Existing Components

To enhance the TableExamples component with new features:

1. Add new state variables and handlers
2. Enhance the filtering or sorting logic
3. Add new UI controls
4. Update the table structure

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Structure

Tests are organized by component and service:

```
src/
├── __tests__/                  # Main test files
├── components/
│   └── __tests__/              # Component-specific tests
└── services/
    └── __tests__/              # Service-specific tests
```

### Writing Tests for New Components

```javascript
import React from 'react';
import { render } from '@testing-library/react';
import { NewComponentExamples } from '../examples/NewComponentExamples';

describe('NewComponentExamples', () => {
  it('renders correctly', () => {
    const { getByText } = render(<NewComponentExamples />);
    expect(getByText('New Component')).toBeInTheDocument();
  });
  
  it('handles user interactions', () => {
    // Test interactions
  });
});
```

## 🚀 Deployment

### Development Deployment

```bash
# Deploy to development environment
./deploy-development.sh

# Install on development site
forge install -e development --site=your-site.atlassian.net --product=jira
```

### Production Deployment

```bash
# Run tests before production deployment
npm test

# Deploy to production
./deploy-production.sh

# Install on production site
forge install -e production --site=your-site.atlassian.net --product=jira
```

### Version Management

The app follows semantic versioning:
- **Major**: Breaking changes
- **Minor**: New features
- **Patch**: Bug fixes

## 🤝 Contributing

We welcome contributions to the Forge Fiend UI Explorer! Here's how you can help:

### Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Write tests** for new functionality
5. **Run the test suite**
   ```bash
   npm test
   ```
6. **Submit a pull request**

### Feature Requests and Bug Reports

Please use the GitHub issues tracker to:
- Report bugs
- Request new features
- Suggest improvements

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Atlassian Forge Team for the platform
- Atlaskit Team for the component library
- All contributors to this project

---

Built with ❤️ by the A9 Team