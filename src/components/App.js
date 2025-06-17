import ForgeUI, { Fragment, Text, Button, useState, ModalDialog, useEffect } from '@forge/ui';
import { fetchUserDetails } from '../services/userService';

export const App = () => {
    const [isOpen, setOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(async () => {
        const userDetails = await fetchUserDetails();
        setUser(userDetails);
    }, []);

    return (
        <Fragment>
            <Text>Welcome to Forge Fiend UI Explorer! Click below to learn about Jira UI elements.</Text>
            <Button text="Explore Jira UI" onClick={() => setOpen(true)} />
            {isOpen && (
                <ModalDialog header="Jira UI Elements" onClose={() => setOpen(false)}>
                    <Text>- **Global Pages**: Custom pages for app navigation.</Text>
                    <Text>- **Issue Panels**: Extend Jira issues with extra context.</Text>
                    <Text>- **Project Pages**: Dedicated pages for project-specific insights.</Text>
                    <Text>- **Custom Fields**: Store structured data inside Jira issues.</Text>
                    <Text>User: {user ? user.displayName : 'Loading...'}</Text>
                </ModalDialog>
            )}
        </Fragment>
    );
};