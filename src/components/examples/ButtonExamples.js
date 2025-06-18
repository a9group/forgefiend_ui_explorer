import React, { useState } from 'react';
import Button from '@atlaskit/button/standard-button';
import LoadingButton from '@atlaskit/button/loading-button';
import { Box, Inline, Stack, Text, Heading } from '@atlaskit/primitives';
import { componentStyles } from '../../styles/theme';

export const ButtonExamples = ({ preview = false }) => {
    const [loading, setLoading] = useState(false);

    const handleLoadingClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    if (preview) {
        return (
            <Inline space="space.100" alignBlock="center">
                <Button appearance="primary">Primary</Button>
                <Button appearance="default">Default</Button>
                <Button appearance="subtle">Subtle</Button>
                <Button appearance="warning">Warning</Button>
                <Button appearance="danger">Danger</Button>
            </Inline>
        );
    }

    return (
        <Box paddingInline="space.200">
            <Stack space="space.400">
                <Stack space="space.100">
                    <Heading size="medium">🔘 Button Components</Heading>
                    <Text>Buttons are the primary way users take actions in your app.</Text>
                </Stack>
                
                <Stack space="space.200">
                    <Heading size="small">Button Appearances</Heading>
                    <Stack space="space.100">
                        <Inline space="space.100">
                            <Button appearance="primary">Primary</Button>
                            <Button appearance="default">Default</Button>
                            <Button appearance="subtle">Subtle</Button>
                            <Button appearance="link">Link</Button>
                        </Inline>
                        <Inline space="space.100">
                            <Button appearance="warning">Warning</Button>
                            <Button appearance="danger">Danger</Button>
                            <Button isDisabled>Disabled</Button>
                        </Inline>
                    </Stack>
                </Stack>

                <Stack space="space.200">
                    <Heading size="small">Button Sizes</Heading>
                    <Inline space="space.100" alignBlock="center">
                        <Button appearance="primary" spacing="compact">Compact</Button>
                        <Button appearance="primary">Default</Button>
                    </Inline>
                </Stack>

                <Stack space="space.200">
                    <Heading size="small">Loading Button</Heading>
                    <Inline space="space.100" alignBlock="center">
                        <LoadingButton 
                            appearance="primary" 
                            isLoading={loading}
                            onClick={handleLoadingClick}
                        >
                            {loading ? 'Processing...' : 'Click to Load'}
                        </LoadingButton>
                    </Inline>
                </Stack>

                <Box style={componentStyles.tipBox}>
                    <Stack space="space.150">
                        <Heading size="small">💡 Usage Tips</Heading>
                        <ul>
                            <li><Text weight="semibold">Primary:</Text> Use for the main action on a page</li>
                            <li><Text weight="semibold">Default:</Text> Use for secondary actions</li>
                            <li><Text weight="semibold">Subtle:</Text> Use for tertiary actions or in dense UIs</li>
                            <li><Text weight="semibold">Warning/Danger:</Text> Use for destructive actions</li>
                            <li><Text weight="semibold">Loading:</Text> Use for async operations</li>
                        </ul>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};