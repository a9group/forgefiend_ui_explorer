import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from '@atlaskit/modal-dialog';
import Button from '@atlaskit/button/standard-button';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import { fetchUserDetails } from '../services/userService';
import { ButtonExamples } from './examples/ButtonExamples';
import { TableExamples } from './examples/TableExamples';
import { FormExamples } from './examples/FormExamples';
import { FeedbackExamples } from './examples/FeedbackExamples';
import { NavigationExamples } from './examples/NavigationExamples';
import { DataDisplayExamples } from './examples/DataDisplayExamples';

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
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                <h1>🔥 Forge Fiend UI Explorer</h1>
                <p style={{ fontSize: '18px', color: '#6B778C', marginBottom: '20px' }}>
                    Explore all available UI Kit 2 components for Forge apps
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Current User: <strong>{user ? user.displayName : 'Loading...'}</strong>
                </p>
                <Button appearance="primary" onClick={() => setOpen(true)}>
                    🚀 Open Component Explorer
                </Button>
            </div>

            {/* Quick Preview Section */}
            <div style={{ marginBottom: '30px' }}>
                <h2>Quick Component Preview</h2>
                <ButtonExamples preview={true} />
            </div>

            {isOpen && (
                <Modal onClose={() => setOpen(false)} width="large">
                    <ModalHeader>
                        <h2>🎨 Forge UI Kit 2 Component Library</h2>
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
        </div>
    );
};