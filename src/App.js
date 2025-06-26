import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import LearnPage from './learnpage/LearnPage';

import ProfilePopup from './pages/ProfilePopup';
import EnrollPage from './pages/EnrollPage';

function App() {

  // For EnrollPage//
  const [isProfileIncomplete, setIsProfileIncomplete] = useState(true);
  const handlePaySubmit = () => {
    setIsProfileIncomplete(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LearnPage />} />
        <Route
          path="/profile"
          element={
            <ProfilePopup
              isOpen={isProfileIncomplete}
              onClose={handlePaySubmit}
            />
          }
        />
        <Route path="/enroll" element={<EnrollPage />} />
      </Routes>
    </Router>

  );
}


export default App;