import React, { useState } from 'react';
import Avatar from '@atlaskit/avatar';
import Badge from '@atlaskit/badge';
import Lozenge from '@atlaskit/lozenge';
import { Code } from '@atlaskit/code';
import Button from '@atlaskit/button/standard-button';

export const DataDisplayExamples = () => {
    const [badgeCount, setBadgeCount] = useState(5);

    const incrementBadge = () => setBadgeCount(prev => prev + 1);
    const decrementBadge = () => setBadgeCount(prev => Math.max(0, prev - 1));

    const codeExample = `// Example Forge app component
import React from 'react';
import Button from '@atlaskit/button/standard-button';

export const MyComponent = () => {
  return (
    <div>
      <h1>Hello Forge!</h1>
      <Button appearance="primary">
        Click me
      </Button>
    </div>
  );
};`;

    return (
        <div style={{ padding: '20px' }}>
            <h3>📊 Data Display Components</h3>
            <p>Present information clearly with these data display components.</p>
            
            <div style={{ marginBottom: '30px' }}>
                <h4>Avatars</h4>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '15px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar size="xsmall" name="John Doe" />
                        <div style={{ fontSize: '12px', marginTop: '5px' }}>XSmall</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar size="small" name="Jane Smith" />
                        <div style={{ fontSize: '12px', marginTop: '5px' }}>Small</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar size="medium" name="Bob Johnson" />
                        <div style={{ fontSize: '12px', marginTop: '5px' }}>Medium</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar size="large" name="Alice Brown" />
                        <div style={{ fontSize: '12px', marginTop: '5px' }}>Large</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar size="xlarge" name="Charlie Wilson" />
                        <div style={{ fontSize: '12px', marginTop: '5px' }}>XLarge</div>
                    </div>
                </div>
                
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Avatar 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                        name="Profile Picture" 
                        size="medium"
                    />
                    <Avatar name="Team" size="medium" appearance="square" />
                    <Avatar name="System" size="medium" status="approved" />
                    <Avatar name="User" size="medium" status="declined" />
                </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>Badges & Counters</h4>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '15px' }}>
                    <Badge appearance="default" max={99}>
                        {badgeCount}
                    </Badge>
                    <Badge appearance="primary" max={99}>
                        {badgeCount}
                    </Badge>
                    <Badge appearance="important" max={99}>
                        {badgeCount}
                    </Badge>
                    <Badge appearance="added" max={99}>
                        {badgeCount}
                    </Badge>
                    <Badge appearance="removed" max={99}>
                        {badgeCount}
                    </Badge>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Button onClick={incrementBadge}>+</Button>
                    <Button onClick={decrementBadge}>-</Button>
                    <span style={{ marginLeft: '10px' }}>Count: {badgeCount}</span>
                </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>Status Lozenges</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginBottom: '15px' }}>
                    <div>
                        <Lozenge appearance="default">To Do</Lozenge>
                        <div style={{ fontSize: '12px', color: '#6B778C', marginTop: '2px' }}>Default</div>
                    </div>
                    <div>
                        <Lozenge appearance="inprogress">In Progress</Lozenge>
                        <div style={{ fontSize: '12px', color: '#6B778C', marginTop: '2px' }}>In Progress</div>
                    </div>
                    <div>
                        <Lozenge appearance="success">Done</Lozenge>
                        <div style={{ fontSize: '12px', color: '#6B778C', marginTop: '2px' }}>Success</div>
                    </div>
                    <div>
                        <Lozenge appearance="removed">Cancelled</Lozenge>
                        <div style={{ fontSize: '12px', color: '#6B778C', marginTop: '2px' }}>Removed</div>
                    </div>
                    <div>
                        <Lozenge appearance="new">New</Lozenge>
                        <div style={{ fontSize: '12px', color: '#6B778C', marginTop: '2px' }}>New</div>
                    </div>
                    <div>
                        <Lozenge appearance="moved">Moved</Lozenge>
                        <div style={{ fontSize: '12px', color: '#6B778C', marginTop: '2px' }}>Moved</div>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>Code Display</h4>
                <div style={{ marginBottom: '15px' }}>
                    <h5>Inline Code</h5>
                    <p>
                        Use <Code>useState</Code> hook to manage component state, or import components like{' '}
                        <Code>@atlaskit/button</Code> for UI elements.
                    </p>
                </div>
                
                <div>
                    <h5>Code Block</h5>
                    <Code 
                        language="javascript" 
                        text={codeExample}
                    />
                </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>User Cards</h4>
                <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    <div style={{ 
                        border: '1px solid #DFE1E6', 
                        borderRadius: '8px', 
                        padding: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <Avatar name="John Doe" size="medium" />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>John Doe</div>
                            <div style={{ fontSize: '14px', color: '#6B778C' }}>Software Developer</div>
                            <Lozenge appearance="success">Active</Lozenge>
                        </div>
                    </div>
                    
                    <div style={{ 
                        border: '1px solid #DFE1E6', 
                        borderRadius: '8px', 
                        padding: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <Avatar name="Jane Smith" size="medium" />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Jane Smith</div>
                            <div style={{ fontSize: '14px', color: '#6B778C' }}>Product Manager</div>
                            <Lozenge appearance="inprogress">Away</Lozenge>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#F4F5F7', padding: '15px', borderRadius: '8px' }}>
                <h4>💡 Usage Tips</h4>
                <ul>
                    <li><strong>Avatars:</strong> Use consistent sizes within the same context</li>
                    <li><strong>Badges:</strong> Perfect for notification counts and status indicators</li>
                    <li><strong>Lozenges:</strong> Ideal for status, priority, and category labels</li>
                    <li><strong>Code:</strong> Use for displaying code snippets and technical content</li>
                    <li><strong>Accessibility:</strong> Always provide meaningful alt text and labels</li>
                </ul>
            </div>
        </div>
    );
};