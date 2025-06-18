import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from '@atlaskit/modal-dialog';
import Button from '@atlaskit/button/standard-button';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import { Box, Inline, Stack, Text, Heading } from '@atlaskit/primitives';
import { fetchUserDetails } from '../services/userService';
import { ButtonExamples } from './examples/ButtonExamples';
import { TableExamples } from './examples/TableExamples';
import { FormExamples } from './examples/FormExamples';
import { FeedbackExamples } from './examples/FeedbackExamples';
import { NavigationExamples } from './examples/NavigationExamples';
import { DataDisplayExamples } from './examples/DataDisplayExamples';
import { componentStyles, spacing } from '../styles/theme';

export const App = () => {
    const [isOpen, setOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUserDetails = async () => {
            try {
                const userDetails = await fetchUserDetails();
                setUser(userDetails);
            } catch (error) {
                console.error('Failed to load user details:', error);
            }
        };
        loadUserDetails();
    }, []);

    return (
        <Box style={componentStyles.container}>
            <Stack space="space.400">
                <Box style={componentStyles.centerContent}>
                    <Stack space="space.200" alignInline="center">
                        <Heading size="xxlarge">🔥 Forge Fiend UI Explorer</Heading>
                        <Text size="large" color="color.text.subtle">
                            Explore all available UI Kit 2 components for Forge apps
                        </Text>
                        <Text>
                            Current User: <Text weight="semibold">{user ? user.displayName : 'Loading...'}</Text>
                        </Text>
                        <Button appearance="primary" onClick={() => setOpen(true)}>
                            🚀 Open Component Explorer
                        </Button>
                    </Stack>
                </Box>

                <Box style={componentStyles.section}>
                    <Stack space="space.200">
                        <Heading size="large">Quick Component Preview</Heading>
                        <ButtonExamples preview={true} />
                    </Stack>
                </Box>
            </Stack>

            {isOpen && (
                <Modal onClose={() => setOpen(false)} width="large">
                    <ModalHeader>
                        <Heading size="medium">🎨 Forge UI Kit 2 Component Library</Heading>
                    </ModalHeader>
                    <ModalBody>
                        <Tabs>
                            <TabList>
                                <Tab>Buttons & Actions</Tab>
                                <Tab>Tables & Data</Tab>
                                <Tab>Forms & Inputs</Tab>
                                <Tab>Feedback & Status</Tab>
                                <Tab>Navigation</Tab>
                                <Tab>Data Display</Tab>
                            </TabList>
                            <TabPanel>
                                <ButtonExamples />
                            </TabPanel>
                            <TabPanel>
                                <TableExamples />
                            </TabPanel>
                            <TabPanel>
                                <FormExamples />
                            </TabPanel>
                            <TabPanel>
                                <FeedbackExamples />
                            </TabPanel>
                            <TabPanel>
                                <NavigationExamples />
                            </TabPanel>
                            <TabPanel>
                                <DataDisplayExamples />
                            </TabPanel>
                        </Tabs>
                    </ModalBody>
                    <ModalFooter>
                        <Button appearance="subtle" onClick={() => setOpen(false)}>
                            Close Explorer
                        </Button>
                    </ModalFooter>
                </Modal>
            )}
        </Box>
    );
};