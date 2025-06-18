import React, { useState, useMemo } from 'react';
import DynamicTable from '@atlaskit/dynamic-table';
import Lozenge from '@atlaskit/lozenge';
import Avatar from '@atlaskit/avatar';
import TextField from '@atlaskit/textfield';
import Select from '@atlaskit/select';
import Button from '@atlaskit/button/standard-button';
import { Box, Inline, Stack, Text, Heading } from '@atlaskit/primitives';
import { componentStyles, spacing } from '../../styles/theme';

export const TableExamples = () => {
    const [sortKey, setSortKey] = useState('name');
    const [sortOrder, setSortOrder] = useState('ASC');
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState(null);
    const [roleFilter, setRoleFilter] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Enhanced sample data with more realistic Jira-like information
    const allData = [
        {
            key: 'PROJ-001',
            name: 'John Doe',
            email: 'john.doe@company.com',
            role: 'Senior Developer',
            status: 'Active',
            lastActive: '2 hours ago',
            issues: 12,
            priority: 'High',
            team: 'Frontend',
            joinDate: '2023-01-15'
        },
        {
            key: 'PROJ-002',
            name: 'Jane Smith',
            email: 'jane.smith@company.com',
            role: 'Product Manager',
            status: 'Away',
            lastActive: '1 day ago',
            issues: 8,
            priority: 'Medium',
            team: 'Product',
            joinDate: '2022-11-20'
        },
        {
            key: 'PROJ-003',
            name: 'Bob Johnson',
            email: 'bob.johnson@company.com',
            role: 'UX Designer',
            status: 'Active',
            lastActive: '30 minutes ago',
            issues: 5,
            priority: 'Low',
            team: 'Design',
            joinDate: '2023-03-10'
        },
        {
            key: 'PROJ-004',
            name: 'Alice Brown',
            email: 'alice.brown@company.com',
            role: 'QA Engineer',
            status: 'Offline',
            lastActive: '3 days ago',
            issues: 15,
            priority: 'High',
            team: 'QA',
            joinDate: '2022-08-05'
        },
        {
            key: 'PROJ-005',
            name: 'Charlie Wilson',
            email: 'charlie.wilson@company.com',
            role: 'Backend Developer',
            status: 'Active',
            lastActive: '1 hour ago',
            issues: 20,
            priority: 'Critical',
            team: 'Backend',
            joinDate: '2022-05-12'
        },
        {
            key: 'PROJ-006',
            name: 'Diana Prince',
            email: 'diana.prince@company.com',
            role: 'DevOps Engineer',
            status: 'Active',
            lastActive: '15 minutes ago',
            issues: 7,
            priority: 'Medium',
            team: 'Infrastructure',
            joinDate: '2023-02-28'
        },
        {
            key: 'PROJ-007',
            name: 'Ethan Hunt',
            email: 'ethan.hunt@company.com',
            role: 'Security Analyst',
            status: 'Away',
            lastActive: '4 hours ago',
            issues: 3,
            priority: 'High',
            team: 'Security',
            joinDate: '2023-04-18'
        },
        {
            key: 'PROJ-008',
            name: 'Fiona Green',
            email: 'fiona.green@company.com',
            role: 'Data Scientist',
            status: 'Active',
            lastActive: '45 minutes ago',
            issues: 9,
            priority: 'Medium',
            team: 'Data',
            joinDate: '2022-12-03'
        }
    ];

    // Filter options
    const statusOptions = [
        { label: 'All Statuses', value: null },
        { label: 'Active', value: 'Active' },
        { label: 'Away', value: 'Away' },
        { label: 'Offline', value: 'Offline' }
    ];

    const roleOptions = [
        { label: 'All Roles', value: null },
        { label: 'Developer', value: 'Developer' },
        { label: 'Product Manager', value: 'Product Manager' },
        { label: 'Designer', value: 'Designer' },
        { label: 'QA Engineer', value: 'QA Engineer' },
        { label: 'DevOps Engineer', value: 'DevOps Engineer' },
        { label: 'Security Analyst', value: 'Security Analyst' },
        { label: 'Data Scientist', value: 'Data Scientist' }
    ];

    const rowsPerPageOptions = [
        { label: '5 per page', value: 5 },
        { label: '10 per page', value: 10 },
        { label: '20 per page', value: 20 },
        { label: 'All', value: allData.length }
    ];

    // Helper functions
    const getStatusLozenge = (status) => {
        const statusMap = {
            'Active': { appearance: 'success', text: 'Active' },
            'Away': { appearance: 'inprogress', text: 'Away' },
            'Offline': { appearance: 'removed', text: 'Offline' }
        };
        const config = statusMap[status] || { appearance: 'default', text: status };
        return <Lozenge appearance={config.appearance}>{config.text}</Lozenge>;
    };

    const getPriorityLozenge = (priority) => {
        const priorityMap = {
            'Critical': { appearance: 'removed', text: 'Critical' },
            'High': { appearance: 'moved', text: 'High' },
            'Medium': { appearance: 'inprogress', text: 'Medium' },
            'Low': { appearance: 'default', text: 'Low' }
        };
        const config = priorityMap[priority] || { appearance: 'default', text: priority };
        return <Lozenge appearance={config.appearance}>{config.text}</Lozenge>;
    };

    // Filtered and sorted data
    const filteredData = useMemo(() => {
        return allData.filter(item => {
            const matchesSearch = !searchTerm || 
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.team.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesStatus = !statusFilter || item.status === statusFilter;
            const matchesRole = !roleFilter || item.role.includes(roleFilter);
            
            return matchesSearch && matchesStatus && matchesRole;
        });
    }, [allData, searchTerm, statusFilter, roleFilter]);

    const sortedData = useMemo(() => {
        if (!sortKey) return filteredData;
        
        return [...filteredData].sort((a, b) => {
            let aValue = a[sortKey];
            let bValue = b[sortKey];
            
            // Handle numeric sorting for issues
            if (sortKey === 'issues') {
                aValue = parseInt(aValue);
                bValue = parseInt(bValue);
            }
            
            if (sortOrder === 'ASC') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
    }, [filteredData, sortKey, sortOrder]);

    // Pagination
    const totalPages = Math.ceil(sortedData.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = sortedData.slice(startIndex, endIndex);

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
            {
                key: 'role',
                content: 'Role',
                isSortable: true,
                width: 18,
            },
            {
                key: 'team',
                content: 'Team',
                isSortable: true,
                width: 12,
            },
            {
                key: 'status',
                content: 'Status',
                isSortable: true,
                width: 10,
            },
            {
                key: 'priority',
                content: 'Priority',
                isSortable: true,
                width: 10,
            },
            {
                key: 'issues',
                content: 'Issues',
                isSortable: true,
                width: 8,
            },
            {
                key: 'lastActive',
                content: 'Last Active',
                isSortable: true,
                width: 14,
            },
        ],
    };

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
            { content: item.role },
            { content: item.team },
            { content: getStatusLozenge(item.status) },
            { content: getPriorityLozenge(item.priority) },
            { content: <Text weight="bold">{item.issues}</Text> },
            { content: item.lastActive },
        ],
    }));

    return (
        <Box paddingInline="space.200">
            <Stack space="space.400">
                <Stack space="space.100">
                    <Heading size="medium">📊 Dynamic Tables & Data Display</Heading>
                    <Text>Advanced tables with filtering, sorting, pagination, and rich data visualization.</Text>
                </Stack>

                {/* Filters and Search */}
                <Box style={componentStyles.card}>
                    <Stack space="space.200">
                        <Heading size="small">🔍 Table Controls</Heading>
                        
                        <Inline space="space.200" alignBlock="end">
                            <Box style={{ minWidth: '250px' }}>
                                <TextField
                                    placeholder="Search users, emails, roles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </Box>
                            
                            <Box style={{ minWidth: '150px' }}>
                                <Select
                                    placeholder="Filter by status"
                                    options={statusOptions}
                                    value={statusOptions.find(opt => opt.value === statusFilter)}
                                    onChange={(option) => setStatusFilter(option?.value || null)}
                                    isClearable
                                />
                            </Box>
                            
                            <Box style={{ minWidth: '150px' }}>
                                <Select
                                    placeholder="Filter by role"
                                    options={roleOptions}
                                    value={roleOptions.find(opt => opt.value === roleFilter)}
                                    onChange={(option) => setRoleFilter(option?.value || null)}
                                    isClearable
                                />
                            </Box>
                            
                            <Button 
                                appearance="subtle" 
                                onClick={() => {
                                    setSearchTerm('');
                                    setStatusFilter(null);
                                    setRoleFilter(null);
                                    setCurrentPage(1);
                                }}
                            >
                                Clear All
                            </Button>
                        </Inline>
                        
                        <Inline space="space.100" alignBlock="center">
                            <Text size="small" color="color.text.subtle">
                                Showing {startIndex + 1}-{Math.min(endIndex, sortedData.length)} of {sortedData.length} results
                            </Text>
                            <Box style={{ minWidth: '120px' }}>
                                <Select
                                    options={rowsPerPageOptions}
                                    value={rowsPerPageOptions.find(opt => opt.value === rowsPerPage)}
                                    onChange={(option) => {
                                        setRowsPerPage(option.value);
                                        setCurrentPage(1);
                                    }}
                                />
                            </Box>
                        </Inline>
                    </Stack>
                </Box>

                {/* Enhanced Dynamic Table */}
                <Box style={componentStyles.card}>
                    <Stack space="space.200">
                        <Heading size="small">👥 Team Members</Heading>
                        
                        <DynamicTable
                            head={head}
                            rows={rows}
                            rowsPerPage={rowsPerPage}
                            page={currentPage}
                            isFixedSize
                            defaultSortKey={sortKey}
                            defaultSortOrder={sortOrder}
                            onSort={({ key, sortOrder }) => {
                                setSortKey(key);
                                setSortOrder(sortOrder);
                            }}
                            onSetPage={(page) => setCurrentPage(page)}
                            isLoading={false}
                            loadingSpinnerSize="large"
                        />
                        
                        {/* Custom Pagination Controls */}
                        {totalPages > 1 && (
                            <Inline space="space.100" alignBlock="center" spread="space-between">
                                <Inline space="space.100">
                                    <Button 
                                        appearance="subtle" 
                                        isDisabled={currentPage === 1}
                                        onClick={() => setCurrentPage(1)}
                                    >
                                        First
                                    </Button>
                                    <Button 
                                        appearance="subtle" 
                                        isDisabled={currentPage === 1}
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                    >
                                        Previous
                                    </Button>
                                </Inline>
                                
                                <Text size="small" color="color.text.subtle">
                                    Page {currentPage} of {totalPages}
                                </Text>
                                
                                <Inline space="space.100">
                                    <Button 
                                        appearance="subtle" 
                                        isDisabled={currentPage === totalPages}
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                    >
                                        Next
                                    </Button>
                                    <Button 
                                        appearance="subtle" 
                                        isDisabled={currentPage === totalPages}
                                        onClick={() => setCurrentPage(totalPages)}
                                    >
                                        Last
                                    </Button>
                                </Inline>
                            </Inline>
                        )}
                    </Stack>
                </Box>

                {/* Lozenge Examples */}
                <Box style={componentStyles.card}>
                    <Stack space="space.200">
                        <Heading size="small">🏷️ Status & Priority Indicators</Heading>
                        
                        <Stack space="space.150">
                            <div>
                                <Text weight="medium" size="small">Status Lozenges</Text>
                                <Inline space="space.100" alignBlock="center">
                                    <Lozenge appearance="success">Active</Lozenge>
                                    <Lozenge appearance="inprogress">Away</Lozenge>
                                    <Lozenge appearance="removed">Offline</Lozenge>
                                    <Lozenge appearance="default">Unknown</Lozenge>
                                    <Lozenge appearance="new">New User</Lozenge>
                                    <Lozenge appearance="moved">Transferred</Lozenge>
                                </Inline>
                            </div>
                            
                            <div>
                                <Text weight="medium" size="small">Priority Lozenges</Text>
                                <Inline space="space.100" alignBlock="center">
                                    <Lozenge appearance="removed">Critical</Lozenge>
                                    <Lozenge appearance="moved">High</Lozenge>
                                    <Lozenge appearance="inprogress">Medium</Lozenge>
                                    <Lozenge appearance="default">Low</Lozenge>
                                </Inline>
                            </div>
                            
                            <div>
                                <Text weight="medium" size="small">Bold Variants</Text>
                                <Inline space="space.100" alignBlock="center">
                                    <Lozenge appearance="success" isBold>Verified</Lozenge>
                                    <Lozenge appearance="removed" isBold>Blocked</Lozenge>
                                    <Lozenge appearance="inprogress" isBold>Pending</Lozenge>
                                </Inline>
                            </div>
                        </Stack>
                    </Stack>
                </Box>

                {/* Usage Tips */}
                <Box style={componentStyles.tipBox}>
                    <Stack space="space.200">
                        <Heading size="small">💡 Advanced Table Features</Heading>
                        <Stack space="space.100">
                            <Text size="small"><Text weight="semibold">🔍 Search & Filter:</Text> Real-time filtering across multiple fields</Text>
                            <Text size="small"><Text weight="semibold">📊 Sorting:</Text> Click column headers to sort data ascending/descending</Text>
                            <Text size="small"><Text weight="semibold">📄 Pagination:</Text> Configurable page sizes with navigation controls</Text>
                            <Text size="small"><Text weight="semibold">🎨 Rich Content:</Text> Avatars, lozenges, and formatted text in cells</Text>
                            <Text size="small"><Text weight="semibold">📱 Responsive:</Text> Tables adapt to different screen sizes</Text>
                            <Text size="small"><Text weight="semibold">⚡ Performance:</Text> Efficient rendering with virtualization for large datasets</Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};