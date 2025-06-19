import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  User, 
  Info, 
  LogOut, 
  Menu, 
  X,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange, isCollapsed, onToggleCollapse }) => {
  const { user, logout } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const adminNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'about', label: 'About', icon: Info },
  ];

  const userNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'about', label: 'About', icon: Info },
  ];

  const navItems = user?.role === 'admin' ? adminNavItems : userNavItems;

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div 
          className="sidebar-backdrop d-lg-none"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        position-fixed top-0 start-0 h-100 bg-white shadow-lg sidebar
        ${isMobileOpen ? '' : 'd-none'} d-lg-block
        ${isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}
      `} style={{zIndex: 1045}}>
        <div className="d-flex flex-column h-100">
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
            {!isCollapsed && (
              <div className="d-flex align-items-center">
                <div className="gradient-bg rounded-2 p-2 me-2">
                  <LayoutDashboard size={20} className="text-white" />
                </div>
                <h5 className="mb-0 fw-bold">Dashboard</h5>
              </div>
            )}
            
            {/* Desktop collapse toggle */}
            <button
              onClick={onToggleCollapse}
              className="btn btn-light btn-sm d-none d-lg-flex"
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>

            {/* Mobile close button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="btn btn-light btn-sm d-lg-none"
            >
              <X size={16} />
            </button>
          </div>

          {/* User Info */}
          <div className="p-3 border-bottom">
            <div className="d-flex align-items-center">
              <img
                src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=3B82F6&color=fff`}
                alt={user?.name}
                className="rounded-circle me-2"
                style={{width: '40px', height: '40px'}}
              />
              {!isCollapsed && (
                <div className="flex-grow-1 text-truncate">
                  <div className="fw-medium text-truncate">{user?.name}</div>
                  <small className="text-muted text-capitalize">{user?.role}</small>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-grow-1 p-3">
            <div className="nav nav-pills flex-column">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`
                      nav-item btn text-start d-flex align-items-center p-2 mb-1 border-0 position-relative
                      ${isActive 
                        ? 'btn-gradient text-white' 
                        : 'btn-light text-dark'
                      }
                      ${isCollapsed ? 'justify-content-center' : ''}
                    `}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <Icon size={20} className={isCollapsed ? '' : 'me-2'} />
                    {!isCollapsed && (
                      <>
                        <span className="flex-grow-1 text-truncate">{item.label}</span>
                        {isActive && <ChevronRight size={16} />}
                      </>
                    )}
                    
                    {/* Tooltip for collapsed state */}
                    {isCollapsed && (
                      <div className="tooltip-custom">
                        {item.label}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Logout Button */}
          <div className="p-3 border-top">
            <button
              onClick={logout}
              className={`
                btn btn-outline-danger w-100 d-flex align-items-center border-0
                ${isCollapsed ? 'justify-content-center' : ''}
              `}
              title={isCollapsed ? 'Logout' : undefined}
            >
              <LogOut size={20} className={isCollapsed ? '' : 'me-2'} />
              {!isCollapsed && <span>Logout</span>}
              
              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="tooltip-custom">
                  Logout
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="btn btn-light position-fixed d-lg-none shadow-sm"
        style={{top: '1rem', left: '1rem', zIndex: 1030}}
      >
        <Menu size={24} />
      </button>
    </>
  );
};

export default Sidebar;