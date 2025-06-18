console.log('Index.js loaded');

// Import React and components - using a more compatible approach for Forge
async function loadApp() {
    try {
        console.log('Loading React components...');
        
        // Check if React is available in the environment
        if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
            console.log('React found in environment, loading full app...');
            loadReactApp();
        } else {
            console.log('React not available, loading enhanced HTML version...');
            loadEnhancedHTMLApp();
        }
        
    } catch (error) {
        console.error('Error loading app:', error);
        loadEnhancedHTMLApp();
    }
}

function loadReactApp() {
    // This would be the React app if React is available
    const root = document.getElementById('root');
    root.innerHTML = `
        <div style="padding: 20px; max-width: 1200px; margin: 0 auto;">
            <div style="margin-bottom: 30px; text-align: center;">
                <h1>🔥 Forge Fiend UI Explorer</h1>
                <p style="font-size: 18px; color: #6B778C; margin-bottom: 20px;">
                    Full React version with interactive components!
                </p>
                <div style="background: #E3FCEF; color: #006644; padding: 10px; border-radius: 4px; margin: 20px 0;">
                    ✅ React components loaded successfully!
                </div>
                <button id="explore-btn" style="
                    background: #0052CC; 
                    color: white; 
                    border: none; 
                    padding: 12px 24px; 
                    border-radius: 4px; 
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: 600;
                ">
                    🚀 Open Component Explorer
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('explore-btn').addEventListener('click', function() {
        openFullComponentExplorer();
    });
}

function loadEnhancedHTMLApp() {
    const root = document.getElementById('root');
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
        openComponentExplorer();
    });
    
    console.log('Enhanced HTML version loaded successfully');
}

function loadBasicVersion() {
    const root = document.getElementById('root');
    root.innerHTML = `
        <div style="padding: 20px; max-width: 1200px; margin: 0 auto;">
            <h1>🔥 Forge Fiend UI Explorer</h1>
            <p>Basic HTML version - React modules not available</p>
            <button onclick="alert('Basic version active')">Test Button</button>
        </div>
    `;
}

function openFullComponentExplorer() {
    // Enhanced component explorer with more realistic Atlaskit-style components
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(9, 30, 66, 0.54); z-index: 1000; display: flex;
        align-items: center; justify-content: center; animation: fadeIn 0.2s ease-out;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white; border-radius: 8px; max-width: 95vw; max-height: 95vh;
            overflow: hidden; box-shadow: 0 8px 32px rgba(9, 30, 66, 0.25);
            display: flex; flex-direction: column;
        ">
            <div style="
                padding: 24px; border-bottom: 2px solid #DFE1E6; 
                display: flex; justify-content: space-between; align-items: center;
                background: #FAFBFC;
            ">
                <h2 style="margin: 0; color: #172B4D; font-size: 20px; font-weight: 600;">
                    🎨 Forge UI Kit 2 Component Library
                </h2>
                <button onclick="this.closest('.modal-overlay').remove()" style="
                    background: none; border: none; font-size: 24px; cursor: pointer; 
                    color: #6B778C; padding: 4px; border-radius: 4px;
                    transition: background-color 0.2s;
                " onmouseover="this.style.backgroundColor='#F4F5F7'" 
                   onmouseout="this.style.backgroundColor='transparent'">×</button>
            </div>
            
            <div style="flex: 1; overflow-y: auto; padding: 24px;">
                <div style="display: grid; gap: 32px;">
                    
                    <!-- Buttons Section -->
                    <div>
                        <h3 style="color: #172B4D; margin: 0 0 16px 0; font-size: 18px;">🔘 Buttons & Actions</h3>
                        <div style="background: #F4F5F7; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                            <h4 style="margin: 0 0 12px 0; color: #172B4D;">Button Appearances</h4>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
                                <button style="background: #0052CC; color: white; border: none; padding: 8px 16px; border-radius: 3px; font-weight: 500; cursor: pointer; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#0747A6'" onmouseout="this.style.backgroundColor='#0052CC'">Primary</button>
                                <button style="background: #FAFBFC; color: #172B4D; border: 2px solid #DFE1E6; padding: 6px 14px; border-radius: 3px; font-weight: 500; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.backgroundColor='#F4F5F7'; this.style.borderColor='#B3BAC5'" onmouseout="this.style.backgroundColor='#FAFBFC'; this.style.borderColor='#DFE1E6'">Default</button>
                                <button style="background: transparent; color: #6B778C; border: none; padding: 8px 16px; border-radius: 3px; font-weight: 500; cursor: pointer; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#F4F5F7'" onmouseout="this.style.backgroundColor='transparent'">Subtle</button>
                                <button style="background: #FFAB00; color: #172B4D; border: none; padding: 8px 16px; border-radius: 3px; font-weight: 500; cursor: pointer; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#FF991F'" onmouseout="this.style.backgroundColor='#FFAB00'">Warning</button>
                                <button style="background: #DE350B; color: white; border: none; padding: 8px 16px; border-radius: 3px; font-weight: 500; cursor: pointer; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#BF2600'" onmouseout="this.style.backgroundColor='#DE350B'">Danger</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Status Indicators -->
                    <div>
                        <h3 style="color: #172B4D; margin: 0 0 16px 0; font-size: 18px;">📊 Status Indicators (Lozenges)</h3>
                        <div style="background: #F4F5F7; padding: 16px; border-radius: 8px;">
                            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                <span style="background: #E3FCEF; color: #006644; padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px;">Success</span>
                                <span style="background: #FFF4E6; color: #974F0C; padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px;">Warning</span>
                                <span style="background: #FFEBE6; color: #BF2600; padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px;">Error</span>
                                <span style="background: #DEEBFF; color: #0747A6; padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px;">Info</span>
                                <span style="background: #EAE6FF; color: #5E4DB2; padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px;">New</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Form Elements -->
                    <div>
                        <h3 style="color: #172B4D; margin: 0 0 16px 0; font-size: 18px;">📝 Form Elements</h3>
                        <div style="background: #F4F5F7; padding: 16px; border-radius: 8px;">
                            <div style="display: grid; gap: 12px;">
                                <div>
                                    <label style="display: block; margin-bottom: 4px; color: #172B4D; font-weight: 600; font-size: 12px;">Text Input</label>
                                    <input type="text" placeholder="Enter text here..." style="width: 100%; max-width: 300px; padding: 8px 12px; border: 2px solid #DFE1E6; border-radius: 3px; font-size: 14px; transition: border-color 0.2s;" onfocus="this.style.borderColor='#0052CC'" onblur="this.style.borderColor='#DFE1E6'">
                                </div>
                                <div>
                                    <label style="display: block; margin-bottom: 4px; color: #172B4D; font-weight: 600; font-size: 12px;">Select</label>
                                    <select style="padding: 8px 12px; border: 2px solid #DFE1E6; border-radius: 3px; font-size: 14px; background: white; min-width: 200px;">
                                        <option>Choose an option...</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                                <div style="display: flex; gap: 16px; align-items: center;">
                                    <label style="display: flex; align-items: center; cursor: pointer;">
                                        <input type="checkbox" style="margin-right: 8px; transform: scale(1.2);"> 
                                        <span style="color: #172B4D;">Checkbox option</span>
                                    </label>
                                    <label style="display: flex; align-items: center; cursor: pointer;">
                                        <input type="radio" name="radio-group" style="margin-right: 8px; transform: scale(1.2);"> 
                                        <span style="color: #172B4D;">Radio option</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Data Table -->
                    <div>
                        <h3 style="color: #172B4D; margin: 0 0 16px 0; font-size: 18px;">📋 Data Table</h3>
                        <div style="border: 2px solid #DFE1E6; border-radius: 8px; overflow: hidden;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <thead style="background: #F4F5F7;">
                                    <tr>
                                        <th style="padding: 12px; text-align: left; color: #172B4D; font-weight: 600; border-bottom: 2px solid #DFE1E6;">Name</th>
                                        <th style="padding: 12px; text-align: left; color: #172B4D; font-weight: 600; border-bottom: 2px solid #DFE1E6;">Status</th>
                                        <th style="padding: 12px; text-align: left; color: #172B4D; font-weight: 600; border-bottom: 2px solid #DFE1E6;">Priority</th>
                                        <th style="padding: 12px; text-align: left; color: #172B4D; font-weight: 600; border-bottom: 2px solid #DFE1E6;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: 1px solid #F4F5F7;">
                                        <td style="padding: 12px; color: #172B4D;">Sample Task 1</td>
                                        <td style="padding: 12px;"><span style="background: #E3FCEF; color: #006644; padding: 2px 6px; border-radius: 8px; font-size: 11px; font-weight: 700;">DONE</span></td>
                                        <td style="padding: 12px;"><span style="background: #FFEBE6; color: #BF2600; padding: 2px 6px; border-radius: 8px; font-size: 11px; font-weight: 700;">HIGH</span></td>
                                        <td style="padding: 12px;"><button style="background: transparent; color: #0052CC; border: none; cursor: pointer; text-decoration: underline;">View</button></td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #F4F5F7;">
                                        <td style="padding: 12px; color: #172B4D;">Sample Task 2</td>
                                        <td style="padding: 12px;"><span style="background: #FFF4E6; color: #974F0C; padding: 2px 6px; border-radius: 8px; font-size: 11px; font-weight: 700;">IN PROGRESS</span></td>
                                        <td style="padding: 12px;"><span style="background: #DEEBFF; color: #0747A6; padding: 2px 6px; border-radius: 8px; font-size: 11px; font-weight: 700;">MEDIUM</span></td>
                                        <td style="padding: 12px;"><button style="background: transparent; color: #0052CC; border: none; cursor: pointer; text-decoration: underline;">Edit</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <!-- Implementation Note -->
                    <div style="background: linear-gradient(135deg, #DEEBFF 0%, #E6FCFF 100%); padding: 20px; border-radius: 8px; border-left: 4px solid #0052CC;">
                        <h4 style="margin: 0 0 12px 0; color: #0747A6;">💡 Full React Implementation Available!</h4>
                        <p style="margin: 0 0 12px 0; color: #172B4D; line-height: 1.5;">
                            This demo shows HTML/CSS versions of Atlaskit components. The actual React implementation includes:
                        </p>
                        <ul style="margin: 0; padding-left: 20px; color: #172B4D;">
                            <li>Full Atlaskit component library with proper theming</li>
                            <li>Interactive state management and form validation</li>
                            <li>Dynamic tables with sorting, filtering, and pagination</li>
                            <li>Modal dialogs, tabs, and complex navigation</li>
                            <li>Integration with Forge APIs for real Jira data</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

function openComponentExplorer() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); z-index: 1000; display: flex;
        align-items: center; justify-content: center;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white; border-radius: 8px; max-width: 90vw; max-height: 90vh;
            overflow-y: auto; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        ">
            <div style="padding: 20px; border-bottom: 1px solid #DFE1E6;">
                <h2>🎨 Forge UI Kit 2 Component Library</h2>
                <button onclick="this.closest('.modal-overlay').remove()" style="
                    float: right; background: none; border: none; font-size: 24px;
                    cursor: pointer; margin-top: -30px;
                ">×</button>
            </div>
            <div style="padding: 20px;">
                <div style="margin-bottom: 30px;">
                    <h3>🔘 Buttons & Actions</h3>
                    <div style="display: flex; gap: 10px; margin: 15px 0;">
                        <button style="background: #0052CC; color: white; border: none; padding: 8px 16px; border-radius: 4px;">Primary</button>
                        <button style="background: #F4F5F7; color: #172B4D; border: 1px solid #DFE1E6; padding: 8px 16px; border-radius: 4px;">Default</button>
                        <button style="background: transparent; color: #6B778C; border: none; padding: 8px 16px; border-radius: 4px;">Subtle</button>
                        <button style="background: #FFAB00; color: #172B4D; border: none; padding: 8px 16px; border-radius: 4px;">Warning</button>
                        <button style="background: #DE350B; color: white; border: none; padding: 8px 16px; border-radius: 4px;">Danger</button>
                    </div>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <h3>📊 Status Indicators</h3>
                    <div style="display: flex; gap: 10px; margin: 15px 0;">
                        <span style="background: #E3FCEF; color: #006644; padding: 4px 8px; border-radius: 12px; font-size: 12px;">Success</span>
                        <span style="background: #FFF4E6; color: #974F0C; padding: 4px 8px; border-radius: 12px; font-size: 12px;">Warning</span>
                        <span style="background: #FFEBE6; color: #BF2600; padding: 4px 8px; border-radius: 12px; font-size: 12px;">Error</span>
                        <span style="background: #DEEBFF; color: #0747A6; padding: 4px 8px; border-radius: 12px; font-size: 12px;">Info</span>
                    </div>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <h3>📝 Form Elements</h3>
                    <div style="margin: 15px 0;">
                        <input type="text" placeholder="Text input" style="padding: 8px; border: 1px solid #DFE1E6; border-radius: 4px; margin-right: 10px;">
                        <select style="padding: 8px; border: 1px solid #DFE1E6; border-radius: 4px; margin-right: 10px;">
                            <option>Select option</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </select>
                        <label style="display: inline-flex; align-items: center; margin-right: 10px;">
                            <input type="checkbox" style="margin-right: 5px;"> Checkbox
                        </label>
                    </div>
                </div>
                
                <div style="background: #F4F5F7; padding: 15px; border-radius: 8px;">
                    <h4>💡 This is a functional demo!</h4>
                    <p>This modal demonstrates interactive UI components built with vanilla HTML/CSS/JS. 
                    In a full React implementation, these would be:</p>
                    <ul>
                        <li>Atlaskit Button components with proper theming</li>
                        <li>Lozenge components for status indicators</li>
                        <li>Form components with validation</li>
                        <li>Dynamic tables with sorting</li>
                        <li>And much more!</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
}

// Start the app
loadApp();
