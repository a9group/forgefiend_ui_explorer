import React, { useState } from 'react';
import DynamicTable from '@atlaskit/dynamic-table';
import Lozenge from '@atlaskit/lozenge';
import Avatar from '@atlaskit/avatar';

export const TableExamples = () => {
    const [sortKey, setSortKey] = useState('name');
    const [sortOrder, setSortOrder] = useState('ASC');

    const head = {
        cells: [
            {
                key: 'avatar',
                content: 'User',
                isSortable: false,
                width: 10,
            },
            {
                key: 'name',
                content: 'Name',
                isSortable: true,
                width: 25,
            },
            {
                key: 'role',
                content: 'Role',
                isSortable: true,
                width: 20,
            },
            {
                key: 'status',
                content: 'Status',
                isSortable: true,
                width: 15,
            },
            {
                key: 'lastActive',
                content: 'Last Active',
                isSortable: true,
                width: 20,
            },
            {
                key: 'issues',
                content: 'Issues',
                isSortable: true,
                width: 10,
            },
        ],
    };

    const sampleData = [
        {
            key: '1',
            cells: [
                { content: <Avatar name="John Doe" size="small" /> },
                { content: 'John Doe' },
                { content: 'Developer' },
                { content: <Lozenge appearance="success">Active</Lozenge> },
                { content: '2 hours ago' },
                { content: '12' },
            ],
        },
        {
            key: '2',
            cells: [
                { content: <Avatar name="Jane Smith" size="small" /> },
                { content: 'Jane Smith' },
                { content: 'Product Manager' },
                { content: <Lozenge appearance="inprogress">Away</Lozenge> },
                { content: '1 day ago' },
                { content: '8' },
            ],
        },
        {
            key: '3',
            cells: [
                { content: <Avatar name="Bob Johnson" size="small" /> },
                { content: 'Bob Johnson' },
                { content: 'Designer' },
                { content: <Lozenge appearance="success">Active</Lozenge> },
                { content: '30 minutes ago' },
                { content: '5' },
            ],
        },
        {
            key: '4',
            cells: [
                { content: <Avatar name="Alice Brown" size="small" /> },
                { content: 'Alice Brown' },
                { content: 'QA Engineer' },
                { content: <Lozenge appearance="removed">Offline</Lozenge> },
                { content: '3 days ago' },
                { content: '15' },
            ],
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h3>📊 Table Components</h3>
            <p>Tables display structured data and allow users to sort, filter, and interact with rows.</p>
            
            <div style={{ marginBottom: '30px' }}>
                <h4>Dynamic Table with Sorting</h4>
                <DynamicTable
                    head={head}
                    rows={sampleData}
                    rowsPerPage={10}
                    defaultPage={1}
                    isFixedSize
                    defaultSortKey={sortKey}
                    defaultSortOrder={sortOrder}
                    onSort={({ key, sortOrder }) => {
                        setSortKey(key);
                        setSortOrder(sortOrder);
                    }}
                />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>Lozenge Status Indicators</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                    <Lozenge appearance="default">Default</Lozenge>
                    <Lozenge appearance="inprogress">In Progress</Lozenge>
                    <Lozenge appearance="moved">Moved</Lozenge>
                    <Lozenge appearance="new">New</Lozenge>
                    <Lozenge appearance="removed">Removed</Lozenge>
                    <Lozenge appearance="success">Success</Lozenge>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Lozenge isBold>Bold Default</Lozenge>
                    <Lozenge appearance="success" isBold>Bold Success</Lozenge>
                    <Lozenge appearance="removed" isBold>Bold Removed</Lozenge>
                </div>
            </div>

            <div style={{ backgroundColor: '#F4F5F7', padding: '15px', borderRadius: '8px' }}>
                <h4>💡 Usage Tips</h4>
                <ul>
                    <li><strong>Dynamic Table:</strong> Use for complex data with sorting/pagination needs</li>
                    <li><strong>Lozenges:</strong> Perfect for status indicators and tags</li>
                    <li><strong>Avatars:</strong> Represent users or entities in tables</li>
                    <li><strong>Sorting:</strong> Always provide sorting for data-heavy tables</li>
                </ul>
            </div>
        </div>
    );
};