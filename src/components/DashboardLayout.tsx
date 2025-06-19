import React, { useState } from 'react';
import Sidebar from './layout/Sidebar';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import About from './pages/About';
import { useAuth } from '../context/AuthContext';

const DashboardLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useAuth();

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return user?.role === 'admin' ? <UserManagement /> : <Dashboard />;
      case 'reports':
        return <Reports />;
      case 'profile':
        return <Profile />;
      case 'about':
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-vh-100 bg-light d-flex">
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />
      
      <div className={`flex-grow-1 main-content ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
        <main className="p-4">
          <div className="container-fluid">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;