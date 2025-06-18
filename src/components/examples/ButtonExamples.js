import React, { useState } from 'react';
import Button from '@atlaskit/button/standard-button';
import LoadingButton from '@atlaskit/button/loading-button';

export const ButtonExamples = ({ preview = false }) => {
    const [loading, setLoading] = useState(false);

    const handleLoadingClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    if (preview) {
        return (
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Button appearance="primary">Primary</Button>
                <Button appearance="default">Default</Button>
                <Button appearance="subtle">Subtle</Button>
                <Button appearance="warning">Warning</Button>
                <Button appearance="danger">Danger</Button>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h3>🔘 Button Components</h3>
            <p>Buttons are the primary way users take actions in your app.</p>
            
            <div style={{ marginBottom: '30px' }}>
                <h4>Button Appearances</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                    <Button appearance="primary">Primary</Button>
                    <Button appearance="default">Default</Button>
                    <Button appearance="subtle">Subtle</Button>
                    <Button appearance="link">Link</Button>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Button appearance="warning">Warning</Button>
                    <Button appearance="danger">Danger</Button>
                    <Button isDisabled>Disabled</Button>
                </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>Button Sizes</h4>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button appearance="primary" spacing="compact">Compact</Button>
                    <Button appearance="primary">Default</Button>
                </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>Loading Button</h4>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <LoadingButton 
                        appearance="primary" 
                        isLoading={loading}
                        onClick={handleLoadingClick}
                    >
                        {loading ? 'Processing...' : 'Click to Load'}
                    </LoadingButton>
                </div>
            </div>

            <div style={{ backgroundColor: '#F4F5F7', padding: '15px', borderRadius: '8px' }}>
                <h4>💡 Usage Tips</h4>
                <ul>
                    <li><strong>Primary:</strong> Use for the main action on a page</li>
                    <li><strong>Default:</strong> Use for secondary actions</li>
                    <li><strong>Subtle:</strong> Use for tertiary actions or in dense UIs</li>
                    <li><strong>Warning/Danger:</strong> Use for destructive actions</li>
                    <li><strong>Loading:</strong> Use for async operations</li>
                </ul>
            </div>
        </div>
    );
};