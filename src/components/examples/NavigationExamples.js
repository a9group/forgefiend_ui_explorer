import React, { useState } from 'react';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import Button from '@atlaskit/button/standard-button';
import { Modal, ModalBody, ModalHeader, ModalFooter } from '@atlaskit/modal-dialog';

export const NavigationExamples = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('default');

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h3>🧭 Navigation Components</h3>
            <p>Help users navigate through your app with clear navigation patterns.</p>
            
            <div style={{ marginBottom: '30px' }}>
                <h4>Tabs Navigation</h4>
                <Tabs onChange={(index) => setActiveTab(index)} selected={activeTab}>
                    <TabList>
                        <Tab>Dashboard</Tab>
                        <Tab>Projects</Tab>
                        <Tab>Issues</Tab>
                        <Tab>Reports</Tab>
                        <Tab>Settings</Tab>
                    </TabList>
                    <TabPanel>
                        <div style={{ padding: '20px', backgroundColor: '#F4F5F7', borderRadius: '8px' }}>
                            <h5>📊 Dashboard Content</h5>
                            <p>Welcome to your dashboard! Here you can see an overview of your projects and recent activity.</p>
                            <ul>
                                <li>Recent Issues: 12</li>
                                <li>Active Projects: 3</li>
                                <li>Team Members: 8</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div style={{ padding: '20px', backgroundColor: '#F4F5F7', borderRadius: '8px' }}>
                            <h5>📁 Projects Content</h5>
                            <p>Manage your projects and track their progress.</p>
                            <ul>
                                <li>Project Alpha - In Progress</li>
                                <li>Project Beta - Planning</li>
                                <li>Project Gamma - Complete</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div style={{ padding: '20px', backgroundColor: '#F4F5F7', borderRadius: '8px' }}>
                            <h5>🐛 Issues Content</h5>
                            <p>Track and manage issues across all projects.</p>
                            <ul>
                                <li>Open Issues: 15</li>
                                <li>In Progress: 8</li>
                                <li>Resolved: 42</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div style={{ padding: '20px', backgroundColor: '#F4F5F7', borderRadius: '8px' }}>
                            <h5>📈 Reports Content</h5>
                            <p>View detailed reports and analytics.</p>
                            <ul>
                                <li>Velocity Report</li>
                                <li>Burndown Chart</li>
                                <li>Team Performance</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div style={{ padding: '20px', backgroundColor: '#F4F5F7', borderRadius: '8px' }}>
                            <h5>⚙️ Settings Content</h5>
                            <p>Configure your app preferences and team settings.</p>
                            <ul>
                                <li>User Preferences</li>
                                <li>Team Configuration</li>
                                <li>Integration Settings</li>
                            </ul>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>Modal Dialogs</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Button onClick={() => openModal('small')}>Small Modal</Button>
                    <Button onClick={() => openModal('medium')}>Medium Modal</Button>
                    <Button onClick={() => openModal('large')}>Large Modal</Button>
                    <Button onClick={() => openModal('fullscreen')}>Fullscreen Modal</Button>
                </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>Breadcrumb Navigation</h4>
                <div style={{ padding: '15px', backgroundColor: '#F4F5F7', borderRadius: '8px' }}>
                    <nav style={{ fontSize: '14px' }}>
                        <span style={{ color: '#6B778C' }}>Home</span>
                        <span style={{ margin: '0 8px', color: '#6B778C' }}>/</span>
                        <span style={{ color: '#6B778C' }}>Projects</span>
                        <span style={{ margin: '0 8px', color: '#6B778C' }}>/</span>
                        <span style={{ color: '#6B778C' }}>Project Alpha</span>
                        <span style={{ margin: '0 8px', color: '#6B778C' }}>/</span>
                        <span style={{ color: '#0052CC', fontWeight: 'bold' }}>Issues</span>
                    </nav>
                </div>
            </div>

            {isModalOpen && (
                <Modal 
                    onClose={() => setIsModalOpen(false)}
                    width={modalType === 'small' ? 'small' : modalType === 'large' ? 'large' : modalType === 'fullscreen' ? 'fullscreen' : 'medium'}
                >
                    <ModalHeader>
                        <h2>🪟 {modalType.charAt(0).toUpperCase() + modalType.slice(1)} Modal</h2>
                    </ModalHeader>
                    <ModalBody>
                        <p>This is a {modalType} modal dialog. Modals are great for:</p>
                        <ul>
                            <li>Collecting user input</li>
                            <li>Showing detailed information</li>
                            <li>Confirming destructive actions</li>
                            <li>Multi-step workflows</li>
                        </ul>
                        {modalType === 'fullscreen' && (
                            <div>
                                <p>Fullscreen modals are perfect for complex forms or detailed content that needs more space.</p>
                                <div style={{ height: '200px', backgroundColor: '#F4F5F7', borderRadius: '8px', padding: '20px' }}>
                                    <p>This could contain a complex form, data table, or rich content editor.</p>
                                </div>
                            </div>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button appearance="primary" onClick={() => setIsModalOpen(false)}>
                            Got it
                        </Button>
                        <Button appearance="subtle" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            )}

            <div style={{ backgroundColor: '#F4F5F7', padding: '15px', borderRadius: '8px' }}>
                <h4>💡 Usage Tips</h4>
                <ul>
                    <li><strong>Tabs:</strong> Use for organizing related content into sections</li>
                    <li><strong>Modals:</strong> Use sparingly for focused tasks or critical information</li>
                    <li><strong>Breadcrumbs:</strong> Help users understand their location in the app hierarchy</li>
                    <li><strong>Modal Sizes:</strong> Choose appropriate size based on content complexity</li>
                    <li><strong>Accessibility:</strong> Ensure keyboard navigation works for all components</li>
                </ul>
            </div>
        </div>
    );
};