import "./App.css";

import { LoginSocial } from "../features/account/index.js";

function App() {
  const handleClose = () => window.electronAPI.closeApp();
  const handleMinimize = () => window.electronAPI.minimizeApp();

  return (
    <>
      <div className="app">
        <div className="titlebar">
          <div className="drag-region"></div>
          <button onClick={handleMinimize}>—</button>
          <button onClick={handleClose}>×</button>
        </div>
        <div className="content">
          <h1>Hello, Electron + React!</h1>
          <div className="login-form">
            <div className="login-social">
              <LoginSocial />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
