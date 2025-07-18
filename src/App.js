import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import LearnPage from './learnpage/LearnPage';
import ProfilePopup from './pages/ProfilePopup';
import EnrollPage from './pages/EnrollPage';
import MyProfile from './pages/MyProfile'
import LoginPage from './pages/LoginPage';
import SignUp from './signup/SignUp';
import CourseOverview from './coursemodule/CourseOverview';
import Module1Page from './coursemodule/Module1Page';
import QuizPage from './coursemodule/QuizPages';
import AssignmentPage from './coursemodule/AssignmentPage';

function App() {

  // For EnrollPage//
  const [isProfileIncomplete, setIsProfileIncomplete] = useState(true);
  const handlePaySubmit = () => {
    setIsProfileIncomplete(false);
  };

  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/learnPage" element={<LearnPage />} />
        <Route path="/profile" element={<ProfilePopup isOpen={isProfileIncomplete} onClose={handlePaySubmit} />} />
        <Route path="/enroll" element={<EnrollPage />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/courses" element={<CourseOverview />} />
        <Route path="/module1" element={<Module1Page />} /> 
        <Route path="/assignment" element={<AssignmentPage/>}/>
        <Route path="/quiz" element={<QuizPage/>}/>
      </Routes>
    </Router>

  );
}


export default App;