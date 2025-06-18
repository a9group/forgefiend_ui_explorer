import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from '@atlaskit/modal-dialog';
import Button from '@atlaskit/button/standard-button';
import { fetchUserDetails } from '../services/userService';

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
        <div>
            <p>Welcome to Forge Fiend UI Explorer! Click below to learn about Jira UI elements.</p>
            <Button appearance="primary" onClick={() => setOpen(true)}>
                Explore Jira UI
            </Button>
            {isOpen && (
                <Modal onClose={() => setOpen(false)}>
                    <ModalHeader>
                        <h2>Jira UI Elements</h2>
                    </ModalHeader>
                    <ModalBody>
                        <ul>
                            <li><strong>Global Pages</strong>: Custom pages for app navigation.</li>
                            <li><strong>Issue Panels</strong>: Extend Jira issues with extra context.</li>
                            <li><strong>Project Pages</strong>: Dedicated pages for project-specific insights.</li>
                            <li><strong>Custom Fields</strong>: Store structured data inside Jira issues.</li>
                        </ul>
                        <p>User: {user ? user.displayName : 'Loading...'}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button appearance="subtle" onClick={() => setOpen(false)}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            )}
        </div>
    );
};