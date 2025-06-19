import { User, Report, DashboardStats } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Waferwire Admin',
    email: 'admin@example.com',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    department: 'IT',
    joinedDate: '2023-01-15',
    status: 'active'
  },
  {
    id: '2',
    name: 'Waferwire User',
    email: 'user@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    department: 'Marketing',
    joinedDate: '2023-03-20',
    status: 'active'
  },
  {
    id: '3',
    name: 'Mike Developer',
    email: 'mike@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    department: 'Development',
    joinedDate: '2023-02-10',
    status: 'active'
  },
  {
    id: '4',
    name: 'Sarah Designer',
    email: 'sarah@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    department: 'Design',
    joinedDate: '2023-04-05',
    status: 'inactive'
  }
];

export const mockReports: Report[] = [
  {
    id: '1',
    title: 'Q1 Performance Report',
    type: 'quarterly',
    status: 'completed',
    createdAt: '2024-01-15',
    createdBy: 'John Admin',
    summary: 'Comprehensive analysis of Q1 performance metrics and KPIs.'
  },
  {
    id: '2',
    title: 'Monthly User Activity',
    type: 'monthly',
    status: 'pending',
    createdAt: '2024-01-20',
    createdBy: 'Jane User',
    summary: 'User engagement and activity patterns for the current month.'
  },
  {
    id: '3',
    title: 'Annual Security Audit',
    type: 'annual',
    status: 'draft',
    createdAt: '2024-01-10',
    createdBy: 'Mike Developer',
    summary: 'Security assessment and recommendations for the upcoming year.'
  }
];

export const adminStats: DashboardStats = {
  totalUsers: 1247,
  activeUsers: 1156,
  totalReports: 48,
  completedTasks: 234,
  pendingTasks: 18,
  revenue: 127500
};

export const userStats: DashboardStats = {
  completedTasks: 45,
  pendingTasks: 8,
  totalReports: 12
};