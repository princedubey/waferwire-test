import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Edit3, 
  Trash2, 
  MoreHorizontal,
  UserPlus,
  Mail,
  Calendar
} from 'lucide-react';
import { mockUsers } from '../../data/mockData';
import { User } from '../../types';

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [users, setUsers] = useState<User[]>(mockUsers);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || user.status === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const StatusBadge: React.FC<{ status: 'active' | 'inactive' }> = ({ status }) => (
    <span className={`badge ${status === 'active' ? 'bg-success' : 'bg-danger'}`}>
      {status}
    </span>
  );

  const RoleBadge: React.FC<{ role: 'admin' | 'user' }> = ({ role }) => (
    <span className={`badge ${role === 'admin' ? 'bg-warning text-dark' : 'bg-primary'}`}>
      {role}
    </span>
  );

  return (
    <div>
      {/* Header */}
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between mb-4">
        <div className="mb-3 mb-sm-0">
          <h2 className="fw-bold mb-1">User Management</h2>
          <p className="text-muted mb-0">Manage your team members and their access levels.</p>
        </div>
        <button className="btn btn-gradient d-flex align-items-center">
          <UserPlus size={20} className="me-2" />
          Add User
        </button>
      </div>

      {/* Filters and Search */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-12 col-md-8">
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <Search size={20} className="text-muted" />
                </span>
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <Filter size={20} className="text-muted" />
                </span>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="form-select"
                >
                  <option value="all">All Users</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white d-flex align-items-center">
          <Users size={20} className="me-2" />
          <h5 className="mb-0">Users ({filteredUsers.length})</h5>
        </div>
        
        {filteredUsers.length === 0 ? (
          <div className="card-body text-center py-5">
            <Users size={48} className="text-muted mb-3" />
            <p className="text-muted">No users found matching your criteria.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th width="120">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle me-3"
                          src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=3B82F6&color=fff`}
                          alt={user.name}
                          style={{width: '40px', height: '40px'}}
                        />
                        <div>
                          <div className="fw-medium">{user.name}</div>
                          <small className="text-muted d-flex align-items-center">
                            <Mail size={12} className="me-1" />
                            {user.email}
                          </small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <RoleBadge role={user.role} />
                    </td>
                    <td>{user.department}</td>
                    <td>
                      <StatusBadge status={user.status} />
                    </td>
                    <td>
                      <small className="text-muted d-flex align-items-center">
                        <Calendar size={12} className="me-1" />
                        {new Date(user.joinedDate).toLocaleDateString()}
                      </small>
                    </td>
                    <td>
                      <div className="d-flex gap-1">
                        <button className="btn btn-outline-primary btn-sm">
                          <Edit3 size={14} />
                        </button>
                        <button className="btn btn-outline-danger btn-sm">
                          <Trash2 size={14} />
                        </button>
                        <button className="btn btn-outline-secondary btn-sm">
                          <MoreHorizontal size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;