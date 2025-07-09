console.log('Loading Forge Fiend UI Explorer...');

// Simple React component using Atlaskit-style components
function App() {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(0);

    return React.createElement('div', {
        style: { padding: '20px', maxWidth: '1200px', margin: '0 auto' }
    }, [
        // Header
        React.createElement('div', {
            key: 'header',
            style: { textAlign: 'center', marginBottom: '30px' }
        }, [
            React.createElement('h1', { key: 'title' }, '🔥 Forge Fiend UI Explorer'),
            React.createElement('p', { 
                key: 'subtitle',
                style: { fontSize: '18px', color: '#6B778C', marginBottom: '20px' }
            }, 'Explore Atlaskit UI components for Forge apps'),
            React.createElement('button', {
                key: 'btn',
                onClick: () => setModalOpen(true),
                style: {
                    background: '#0052CC',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600'
                }
            }, '🚀 Open Component Explorer')
        ]),

        // Sample Table
        React.createElement('div', {
            key: 'table-section',
            style: { 
                background: '#F4F5F7', 
                padding: '20px', 
                borderRadius: '8px',
                marginBottom: '20px'
            }
        }, [
            React.createElement('h2', { key: 'table-title' }, '📊 Sample Data Table'),
            React.createElement('table', {
                key: 'table',
                style: { 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    background: 'white',
                    borderRadius: '4px'
                }
            }, [
                React.createElement('thead', { key: 'thead' }, 
                    React.createElement('tr', { key: 'header-row' }, [
                        React.createElement('th', { 
                            key: 'th1',
                            style: { padding: '12px', textAlign: 'left', borderBottom: '2px solid #DFE1E6' }
                        }, 'Name'),
                        React.createElement('th', { 
                            key: 'th2',
                            style: { padding: '12px', textAlign: 'left', borderBottom: '2px solid #DFE1E6' }
                        }, 'Role'),
                        React.createElement('th', { 
                            key: 'th3',
                            style: { padding: '12px', textAlign: 'left', borderBottom: '2px solid #DFE1E6' }
                        }, 'Status'),
                        React.createElement('th', { 
                            key: 'th4',
                            style: { padding: '12px', textAlign: 'left', borderBottom: '2px solid #DFE1E6' }
                        }, 'Issues')
                    ])
                ),
                React.createElement('tbody', { key: 'tbody' }, [
                    React.createElement('tr', { key: 'row1' }, [
                        React.createElement('td', { 
                            key: 'td1',
                            style: { padding: '12px', borderBottom: '1px solid #F4F5F7' }
                        }, 'John Doe'),
                        React.createElement('td', { 
                            key: 'td2',
                            style: { padding: '12px', borderBottom: '1px solid #F4F5F7' }
                        }, 'Developer'),
                        React.createElement('td', { 
                            key: 'td3',
                            style: { padding: '12px', borderBottom: '1px solid #F4F5F7' }
                        }, React.createElement('span', {
                            style: {
                                background: '#E3FCEF',
                                color: '#006644',
                                padding: '4px 8px',
                                borderRadius: '12px',
                                fontSize: '12px',
                                fontWeight: '700'
                            }
                        }, 'ACTIVE')),
                        React.createElement('td', { 
                            key: 'td4',
                            style: { padding: '12px', borderBottom: '1px solid #F4F5F7' }
                        }, '12')
                    ]),
                    React.createElement('tr', { key: 'row2' }, [
                        React.createElement('td', { 
                            key: 'td1',
                            style: { padding: '12px', borderBottom: '1px solid #F4F5F7' }
                        }, 'Jane Smith'),
                        React.createElement('td', { 
                            key: 'td2',
                            style: { padding: '12px', borderBottom: '1px solid #F4F5F7' }
                        }, 'Product Manager'),
                        React.createElement('td', { 
                            key: 'td3',
                            style: { padding: '12px', borderBottom: '1px solid #F4F5F7' }
                        }, React.createElement('span', {
                            style: {
                                background: '#FFF4E6',
                                color: '#974F0C',
                                padding: '4px 8px',
                                borderRadius: '12px',
                                fontSize: '12px',
                                fontWeight: '700'
                            }
                        }, 'AWAY')),
                        React.createElement('td', { 
                            key: 'td4',
                            style: { padding: '12px', borderBottom: '1px solid #F4F5F7' }
                        }, '8')
                    ])
                ])
            ])
        ]),

        // Modal
        isModalOpen && React.createElement('div', {
            key: 'modal',
            style: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(9, 30, 66, 0.54)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            onClick: () => setModalOpen(false)
        }, React.createElement('div', {
            style: {
                background: 'white',
                borderRadius: '8px',
                maxWidth: '90vw',
                maxHeight: '90vh',
                overflow: 'auto',
                padding: '24px',
                boxShadow: '0 8px 32px rgba(9, 30, 66, 0.25)'
            },
            onClick: (e) => e.stopPropagation()
        }, [
            React.createElement('h2', { key: 'modal-title' }, '🎨 Atlaskit Components'),
            React.createElement('p', { key: 'modal-text' }, 'This demonstrates React-based Atlaskit-style components in a Forge app.'),
            React.createElement('button', {
                key: 'close-btn',
                onClick: () => setModalOpen(false),
                style: {
                    background: '#0052CC',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }
            }, 'Close')
        ]))
    ]);
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
