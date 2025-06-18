import React, { useState } from 'react';
import Banner from '@atlaskit/banner';
import SectionMessage from '@atlaskit/section-message';
import Spinner from '@atlaskit/spinner';
import ProgressIndicator from '@atlaskit/progress-indicator';
import Button from '@atlaskit/button/standard-button';

export const FeedbackExamples = () => {
    const [showBanner, setShowBanner] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const startProgress = () => {
        setProgress(0);
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    };

    const simulateLoading = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 3000);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h3>💬 Feedback & Status Components</h3>
            <p>Provide clear feedback to users about system status and important information.</p>
            
            {showBanner && (
                <div style={{ marginBottom: '30px' }}>
                    <h4>Banners</h4>
                    <Banner
                        appearance="warning"
                        icon={<span>⚠️</span>}
                        isOpen={showBanner}
                        onClose={() => setShowBanner(false)}
                    >
                        Your trial expires in 7 days. Upgrade to continue using all features.
                    </Banner>
                </div>
            )}

            <div style={{ marginBottom: '30px' }}>
                <h4>Section Messages</h4>
                <div style={{ display: 'grid', gap: '15px' }}>
                    <SectionMessage appearance="info" title="Information">
                        <p>This is an informational message to help users understand something.</p>
                    </SectionMessage>
                    
                    <SectionMessage appearance="success" title="Success">
                        <p>Your changes have been saved successfully!</p>
                    </SectionMessage>
                    
                    <SectionMessage appearance="warning" title="Warning">
                        <p>Please review your settings before proceeding.</p>
                    </SectionMessage>
                    
                    <SectionMessage appearance="error" title="Error">
                        <p>Unable to save changes. Please check your connection and try again.</p>
                    </SectionMessage>
                </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>Loading States</h4>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Spinner size="small" />
                        <span>Small spinner</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Spinner size="medium" />
                        <span>Medium spinner</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Spinner size="large" />
                        <span>Large spinner</span>
                    </div>
                </div>
                
                <Button onClick={simulateLoading} isDisabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Spinner size="small" /> Loading...
                        </>
                    ) : (
                        'Start Loading Demo'
                    )}
                </Button>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>Progress Indicator</h4>
                <div style={{ marginBottom: '15px' }}>
                    <ProgressIndicator
                        appearance="default"
                        values={[
                            { label: 'Step 1', percentageComplete: progress >= 25 ? 100 : (progress / 25) * 100 },
                            { label: 'Step 2', percentageComplete: progress >= 50 ? 100 : Math.max(0, (progress - 25) / 25) * 100 },
                            { label: 'Step 3', percentageComplete: progress >= 75 ? 100 : Math.max(0, (progress - 50) / 25) * 100 },
                            { label: 'Step 4', percentageComplete: Math.max(0, (progress - 75) / 25) * 100 },
                        ]}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <strong>Progress: {progress}%</strong>
                </div>
                <Button onClick={startProgress}>
                    Start Progress Demo
                </Button>
            </div>

            <div style={{ backgroundColor: '#F4F5F7', padding: '15px', borderRadius: '8px' }}>
                <h4>💡 Usage Tips</h4>
                <ul>
                    <li><strong>Banners:</strong> Use for system-wide announcements and alerts</li>
                    <li><strong>Section Messages:</strong> Provide contextual feedback within content areas</li>
                    <li><strong>Spinners:</strong> Show loading states for async operations</li>
                    <li><strong>Progress Indicators:</strong> Show multi-step process completion</li>
                    <li><strong>Timing:</strong> Don't show spinners for operations under 1 second</li>
                </ul>
            </div>
        </div>
    );
};