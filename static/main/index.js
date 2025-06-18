console.log('Index.js loaded');

// Simple fallback approach for Forge environment
try {
    // Clear the loading message
    const root = document.getElementById('root');
    
    // Create a simple HTML version first to test
    root.innerHTML = `
        <div style="padding: 20px; max-width: 1200px; margin: 0 auto;">
            <div style="margin-bottom: 30px; text-align: center;">
                <h1>🔥 Forge Fiend UI Explorer</h1>
                <p style="font-size: 18px; color: #6B778C; margin-bottom: 20px;">
                    Explore all available UI Kit 2 components for Forge apps
                </p>
                <p style="margin-bottom: 20px;">
                    Current User: <strong>Loading...</strong>
                </p>
                <button id="explore-btn" style="
                    background: #0052CC; 
                    color: white; 
                    border: none; 
                    padding: 10px 20px; 
                    border-radius: 4px; 
                    cursor: pointer;
                    font-size: 16px;
                ">
                    🚀 Open Component Explorer
                </button>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h2>Quick Component Preview</h2>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                    <button style="background: #0052CC; color: white; border: none; padding: 8px 16px; border-radius: 4px;">Primary</button>
                    <button style="background: #F4F5F7; color: #172B4D; border: 1px solid #DFE1E6; padding: 8px 16px; border-radius: 4px;">Default</button>
                    <button style="background: transparent; color: #6B778C; border: none; padding: 8px 16px; border-radius: 4px;">Subtle</button>
                    <button style="background: #FFAB00; color: #172B4D; border: none; padding: 8px 16px; border-radius: 4px;">Warning</button>
                    <button style="background: #DE350B; color: white; border: none; padding: 8px 16px; border-radius: 4px;">Danger</button>
                </div>
            </div>
            
            <div style="background: #F4F5F7; padding: 20px; border-radius: 8px;">
                <h3>📋 Component Categories Available:</h3>
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li><strong>Buttons & Actions</strong> - Various button types and loading states</li>
                    <li><strong>Tables & Data</strong> - Dynamic tables, lozenges, and avatars</li>
                    <li><strong>Forms & Inputs</strong> - Text fields, selects, checkboxes, and toggles</li>
                    <li><strong>Feedback & Status</strong> - Banners, messages, spinners, and progress</li>
                    <li><strong>Navigation</strong> - Tabs, modals, and breadcrumbs</li>
                    <li><strong>Data Display</strong> - Avatars, badges, code blocks, and cards</li>
                </ul>
                <p style="margin-top: 15px; font-style: italic;">
                    Click the "Open Component Explorer" button above to see interactive examples of all components!
                </p>
            </div>
        </div>
    `;
    
    // Add click handler for the button
    document.getElementById('explore-btn').addEventListener('click', function() {
        alert('Component Explorer would open here with full React components!\\n\\nThis demonstrates the app is working. The full React version with all interactive components will load once the module system is properly configured.');
    });
    
    console.log('Basic HTML version loaded successfully');
    
} catch (error) {
    console.error('Error in index.js:', error);
    document.getElementById('root').innerHTML = `
        <div style="padding: 20px; text-align: center;">
            <h1>❌ Error Loading App</h1>
            <p>Error: ${error.message}</p>
        </div>
    `;
}
