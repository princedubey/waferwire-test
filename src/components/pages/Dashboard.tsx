import React from 'react';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  TrendingUp,
  Activity,
  Target
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { adminStats, userStats } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  const stats = isAdmin ? adminStats : userStats;

  const StatCard: React.FC<{
    title: string;
    value: string | number;
    icon: React.ElementType;
    color: string;
    trend?: string;
  }> = ({ title, value, icon: Icon, color, trend }) => (
    <div className="card card-hover border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p className="text-muted mb-1 fw-medium">{title}</p>
            <h3 className="mb-1 fw-bold">{value?.toLocaleString()}</h3>
            {trend && (
              <p className="text-success mb-0 small d-flex align-items-center">
                <TrendingUp size={16} className="me-1" />
                {trend}
              </p>
            )}
          </div>
          <div className={`p-3 rounded-3 ${color}`}>
            <Icon size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );

  const adminStatsCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers || 0,
      icon: Users,
      color: 'bg-primary',
      trend: '+12% from last month'
    },
    {
      title: 'Active Users',
      value: stats.activeUsers || 0,
      icon: Activity,
      color: 'bg-success',
      trend: '+8% from last month'
    },
    {
      title: 'Total Reports',
      value: stats.totalReports || 0,
      icon: FileText,
      color: 'bg-info',
      trend: '+23% from last month'
    },
    {
      title: 'Revenue',
      value: `$${stats.revenue?.toLocaleString() || 0}`,
      icon: DollarSign,
      color: 'bg-warning',
      trend: '+15% from last month'
    }
  ];

  const userStatsCards = [
    {
      title: 'Completed Tasks',
      value: stats.completedTasks || 0,
      icon: CheckCircle,
      color: 'bg-success'
    },
    {
      title: 'Pending Tasks',
      value: stats.pendingTasks || 0,
      icon: Clock,
      color: 'bg-warning'
    },
    {
      title: 'My Reports',
      value: stats.totalReports || 0,
      icon: FileText,
      color: 'bg-info'
    },
    {
      title: 'Goals Achieved',
      value: '85%',
      icon: Target,
      color: 'bg-primary'
    }
  ];

  const statsCards = isAdmin ? adminStatsCards : userStatsCards;

  return (
    <div>
      {/* Welcome Header */}
      <div className="card gradient-bg text-white border-0 mb-4">
        <div className="card-body p-4">
          <h2 className="mb-2">Welcome back, {user?.name}! 👋</h2>
          <p className="mb-0 opacity-75">
            {isAdmin 
              ? "Here's what's happening with your platform today." 
              : "Here's your personal dashboard overview."
            }
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="row g-4 mb-4">
        {statsCards.map((stat, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3">
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 pb-0">
              <h5 className="mb-0">Recent Activity</h5>
            </div>
            <div className="card-body">
              {isAdmin ? (
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-success rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                    <small className="text-muted">New user registration: Sarah Designer</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                    <small className="text-muted">Q1 Performance Report completed</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-warning rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                    <small className="text-muted">System maintenance scheduled</small>
                  </div>
                </div>
              ) : (
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-success rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                    <small className="text-muted">Task completed: UI Design Review</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                    <small className="text-muted">New report submitted</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-info rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                    <small className="text-muted">Profile updated successfully</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 pb-0">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="d-flex flex-column gap-2">
                {isAdmin ? (
                  <>
                    <button className="btn btn-outline-primary text-start d-flex align-items-center p-3">
                      <Users size={20} className="me-3 text-primary" />
                      <span>Add New User</span>
                    </button>
                    <button className="btn btn-outline-success text-start d-flex align-items-center p-3">
                      <FileText size={20} className="me-3 text-success" />
                      <span>Generate Report</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-outline-primary text-start d-flex align-items-center p-3">
                      <CheckCircle size={20} className="me-3 text-primary" />
                      <span>Create New Task</span>
                    </button>
                    <button className="btn btn-outline-info text-start d-flex align-items-center p-3">
                      <FileText size={20} className="me-3 text-info" />
                      <span>Submit Report</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;