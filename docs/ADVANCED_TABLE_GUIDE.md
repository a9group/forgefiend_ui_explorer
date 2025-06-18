# 📊 Advanced Dynamic Table Guide

This guide explains how to use and extend the advanced dynamic table component in Forge Fiend UI Explorer.

## 🚀 Features

The TableExamples component demonstrates a fully-featured dynamic table with:

- **✅ Sorting**: Multi-column sorting with ascending/descending toggle
- **🔍 Filtering**: Multiple filter types (dropdown, text search)
- **📄 Pagination**: Configurable page sizes with navigation controls
- **🎨 Rich Content**: Avatars, lozenges, and formatted text in cells
- **📱 Responsive**: Adapts to different screen sizes

## 📋 Component Structure

```jsx
<Box paddingInline="space.200">
  <Stack space="space.400">
    {/* Header */}
    <Stack space="space.100">
      <Heading>Dynamic Tables & Data Display</Heading>
      <Text>Description text...</Text>
    </Stack>

    {/* Filters and Search */}
    <Box style={componentStyles.card}>
      <Stack space="space.200">
        <Heading>Search & Filters</Heading>
        <Inline>
          {/* Search field */}
          <TextField onChange={handleSearch} />
          
          {/* Status filter */}
          <Select options={statusOptions} onChange={handleStatusFilter} />
          
          {/* Role filter */}
          <Select options={roleOptions} onChange={handleRoleFilter} />
          
          {/* Clear filters button */}
          <Button onClick={handleClearFilters}>Clear All</Button>
        </Inline>
      </Stack>
    </Box>

    {/* Main Table */}
    <Box style={componentStyles.card}>
      <Stack space="space.200">
        <Heading>Team Members</Heading>
        
        {/* Dynamic Table */}
        <DynamicTable
          head={head}
          rows={rows}
          rowsPerPage={rowsPerPage}
          page={currentPage}
          onSort={handleSort}
          onSetPage={handlePageChange}
        />
        
        {/* Custom Pagination */}
        <Inline>
          <Button onClick={handleFirstPage}>First</Button>
          <Button onClick={handlePreviousPage}>Previous</Button>
          <Text>Page {currentPage} of {totalPages}</Text>
          <Button onClick={handleNextPage}>Next</Button>
          <Button onClick={handleLastPage}>Last</Button>
        </Inline>
      </Stack>
    </Box>
  </Stack>
</Box>
```

## 🧩 Key Components

### 1. Table Configuration

```jsx
// Column definitions
const head = {
  cells: [
    {
      key: 'avatar',
      content: 'User',
      isSortable: false,
      width: 8,
    },
    {
      key: 'name',
      content: 'Name',
      isSortable: true,
      width: 20,
    },
    // Additional columns...
  ],
};
```

### 2. Data Processing

```jsx
// Filtering logic
const filteredData = useMemo(() => {
  return allData.filter(item => {
    const matchesSearch = !searchTerm || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !statusFilter || item.status === statusFilter;
    const matchesRole = !roleFilter || item.role.includes(roleFilter);
    
    return matchesSearch && matchesStatus && matchesRole;
  });
}, [allData, searchTerm, statusFilter, roleFilter]);

// Sorting logic
const sortedData = useMemo(() => {
  if (!sortKey) return filteredData;
  
  return [...filteredData].sort((a, b) => {
    let aValue = a[sortKey];
    let bValue = b[sortKey];
    
    if (sortOrder === 'ASC') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
}, [filteredData, sortKey, sortOrder]);

// Pagination
const paginatedData = sortedData.slice(startIndex, endIndex);
```

### 3. Row Rendering

```jsx
const rows = paginatedData.map(item => ({
  key: item.key,
  cells: [
    { content: <Avatar name={item.name} size="small" /> },
    { 
      content: (
        <Stack space="space.025">
          <Text weight="medium">{item.name}</Text>
          <Text size="small" color="color.text.subtle">{item.email}</Text>
        </Stack>
      )
    },
    // Additional cells...
  ],
}));
```

## 🔧 Extending the Table

### Adding New Columns

```jsx
// Add to the head.cells array
{
  key: 'newColumn',
  content: 'New Column',
  isSortable: true,
  width: 15,
}

// Add to the row mapping
cells: [
  // Existing cells...
  { content: item.newProperty },
]
```

### Adding New Filters

```jsx
// Add new filter state
const [newFilter, setNewFilter] = useState(null);

// Add new filter options
const newFilterOptions = [
  { label: 'All Values', value: null },
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
];

// Update filter logic
const matchesNewFilter = !newFilter || item.property === newFilter;
return matchesSearch && matchesStatus && matchesRole && matchesNewFilter;

// Add UI for the filter
<Select
  placeholder="Filter by property"
  options={newFilterOptions}
  value={newFilterOptions.find(opt => opt.value === newFilter)}
  onChange={(option) => setNewFilter(option?.value || null)}
  isClearable
/>
```

### Custom Cell Rendering

```jsx
// Create a custom cell renderer
const renderCustomCell = (value, item) => {
  if (value > 10) {
    return <Text weight="bold" color="color.text.danger">{value}</Text>;
  }
  return <Text>{value}</Text>;
};

// Use in row mapping
cells: [
  // Existing cells...
  { content: renderCustomCell(item.value, item) },
]
```

## 🎨 Styling

The table uses Atlaskit's design tokens for consistent styling:

```jsx
// Import theme utilities
import { componentStyles, spacing, colors } from '../../styles/theme';

// Apply to components
<Box style={componentStyles.card}>
  {/* Component content */}
</Box>
```

## 📊 Performance Considerations

For large datasets:

1. **Virtualization**: Consider implementing virtualized rows for very large datasets
2. **Memoization**: Use `useMemo` for expensive computations
3. **Debouncing**: Debounce search input to prevent excessive filtering
4. **Server-side**: For extremely large datasets, implement server-side sorting/filtering

## 🧪 Testing

```jsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TableExamples } from '../examples/TableExamples';

describe('TableExamples', () => {
  it('renders the table with data', () => {
    render(<TableExamples />);
    expect(screen.getByText('Team Members')).toBeInTheDocument();
  });

  it('filters data when search is used', () => {
    render(<TableExamples />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: 'John' } });
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
  });
});
```

---

For more information, see the [Atlaskit Dynamic Table documentation](https://atlassian.design/components/dynamic-table/examples) and the [Forge UI documentation](https://developer.atlassian.com/platform/forge/ui-kit-components/).