export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
  department?: string;
  joinedDate: string;
  status: 'active' | 'inactive';
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export interface Report {
  id: string;
  title: string;
  type: 'monthly' | 'quarterly' | 'annual';
  status: 'completed' | 'pending' | 'draft';
  createdAt: string;
  createdBy: string;
  summary: string;
}

export interface DashboardStats {
  totalUsers?: number;
  activeUsers?: number;
  totalReports?: number;
  completedTasks?: number;
  pendingTasks?: number;
  revenue?: number;
}