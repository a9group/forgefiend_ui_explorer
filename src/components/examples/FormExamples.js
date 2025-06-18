import React, { useState } from 'react';
import Form, { Field, FormFooter, HelperMessage, ErrorMessage } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Select from '@atlaskit/select';
import Checkbox from '@atlaskit/checkbox';
import Toggle from '@atlaskit/toggle';
import Button from '@atlaskit/button/standard-button';

export const FormExamples = () => {
    const [toggleState, setToggleState] = useState(false);
    const [checkboxState, setCheckboxState] = useState(false);

    const priorityOptions = [
        { label: 'Highest', value: 'highest' },
        { label: 'High', value: 'high' },
        { label: 'Medium', value: 'medium' },
        { label: 'Low', value: 'low' },
        { label: 'Lowest', value: 'lowest' },
    ];

    const handleSubmit = (data) => {
        console.log('Form submitted:', data);
        alert('Form submitted! Check console for data.');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h3>📝 Form Components</h3>
            <p>Forms collect user input with validation and clear feedback.</p>
            
            <div style={{ marginBottom: '30px' }}>
                <h4>Complete Form Example</h4>
                <Form onSubmit={handleSubmit}>
                    {({ formProps }) => (
                        <form {...formProps}>
                            <Field name="title" label="Issue Title" isRequired>
                                {({ fieldProps, error }) => (
                                    <>
                                        <TextField
                                            {...fieldProps}
                                            placeholder="Enter issue title"
                                        />
                                        {error && <ErrorMessage>{error}</ErrorMessage>}
                                    </>
                                )}
                            </Field>

                            <Field name="description" label="Description">
                                {({ fieldProps }) => (
                                    <TextField
                                        {...fieldProps}
                                        placeholder="Describe the issue"
                                        elemAfterInput={
                                            <HelperMessage>
                                                Provide a detailed description of the issue
                                            </HelperMessage>
                                        }
                                    />
                                )}
                            </Field>

                            <Field name="priority" label="Priority">
                                {({ fieldProps }) => (
                                    <Select
                                        {...fieldProps}
                                        options={priorityOptions}
                                        placeholder="Select priority"
                                    />
                                )}
                            </Field>

                            <Field name="assignee" label="Assignee">
                                {({ fieldProps }) => (
                                    <TextField
                                        {...fieldProps}
                                        placeholder="Enter assignee email"
                                    />
                                )}
                            </Field>

                            <FormFooter>
                                <Button type="submit" appearance="primary">
                                    Create Issue
                                </Button>
                                <Button appearance="subtle">
                                    Cancel
                                </Button>
                            </FormFooter>
                        </form>
                    )}
                </Form>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>Individual Form Controls</h4>
                
                <div style={{ marginBottom: '20px' }}>
                    <h5>Text Fields</h5>
                    <div style={{ display: 'grid', gap: '10px', maxWidth: '400px' }}>
                        <TextField placeholder="Default text field" />
                        <TextField placeholder="Compact text field" isCompact />
                        <TextField placeholder="Disabled field" isDisabled />
                        <TextField placeholder="Invalid field" isInvalid />
                    </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h5>Select Dropdown</h5>
                    <div style={{ maxWidth: '300px' }}>
                        <Select
                            options={priorityOptions}
                            placeholder="Choose an option"
                        />
                    </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h5>Checkbox & Toggle</h5>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Checkbox
                            isChecked={checkboxState}
                            onChange={(event) => setCheckboxState(event.target.checked)}
                            label="Enable notifications"
                        />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>Dark mode:</span>
                            <Toggle
                                isChecked={toggleState}
                                onChange={() => setToggleState(!toggleState)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#F4F5F7', padding: '15px', borderRadius: '8px' }}>
                <h4>💡 Usage Tips</h4>
                <ul>
                    <li><strong>Validation:</strong> Use Field components for built-in validation</li>
                    <li><strong>Helper Text:</strong> Provide guidance with HelperMessage</li>
                    <li><strong>Error States:</strong> Show clear error messages for invalid inputs</li>
                    <li><strong>Required Fields:</strong> Mark required fields clearly</li>
                    <li><strong>Accessibility:</strong> All form components include proper ARIA labels</li>
                </ul>
            </div>
        </div>
    );
};