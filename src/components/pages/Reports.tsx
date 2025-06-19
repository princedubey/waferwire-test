import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Filter, 
  Calendar, 
  User,
  Clock,
  CheckCircle,
  FileX,
  Plus
} from 'lucide-react';
import { mockReports } from '../../data/mockData';
import { Report } from '../../types';
import { useAuth } from '../../context/AuthContext';

const Reports: React.FC = () => {
  const { user } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [reports] = useState<Report[]>(mockReports);

  const filteredReports = reports.filter(report => {
    if (selectedFilter === 'all') return true;
    return report.status === selectedFilter;
  });

  const StatusBadge: React.FC<{ status: Report['status'] }> = ({ status }) => {
    const statusConfig = {
      completed: { 
        icon: CheckCircle, 
        className: 'bg-success text-white',
        text: 'Completed'
      },
      pending: { 
        icon: Clock, 
        className: 'bg-warning text-dark',
        text: 'Pending'
      },
      draft: { 
        icon: FileX, 
        className: 'bg-secondary text-white',
        text: 'Draft'
      }
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <span className={`badge ${config.className} d-flex align-items-center`}>
        <Icon size={12} className="me-1" />
        {config.text}
      </span>
    );
  };

  const TypeBadge: React.FC<{ type: Report['type'] }> = ({ type }) => {
    const typeConfig = {
      monthly: 'bg-primary',
      quarterly: 'bg-info',
      annual: 'bg-dark'
    };

    return (
      <span className={`badge ${typeConfig[type]} text-white`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between mb-4">
        <div className="mb-3 mb-sm-0">
          <h2 className="fw-bold mb-1">Reports</h2>
          <p className="text-muted mb-0">
            {user?.role === 'admin' 
              ? 'Manage and review all system reports.' 
              : 'View your reports and analytics.'
            }
          </p>
        </div>
        <button className="btn btn-gradient d-flex align-items-center">
          <Plus size={20} className="me-2" />
          New Report
        </button>
      </div>

      {/* Filters */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <Filter size={20} className="text-muted me-3" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="form-select"
              style={{maxWidth: '200px'}}
            >
              <option value="all">All Reports</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="row g-4">
        {filteredReports.map((report) => (
          <div key={report.id} className="col-12 col-lg-6 col-xl-4">
            <div className="card card-hover border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-3">
                    <FileText size={24} className="text-primary" />
                  </div>
                  <div className="d-flex gap-2">
                    <TypeBadge type={report.type} />
                    <StatusBadge status={report.status} />
                  </div>
                </div>

                <h5 className="card-title mb-2">{report.title}</h5>
                <p className="card-text text-muted small mb-3" style={{minHeight: '60px'}}>
                  {report.summary}
                </p>

                <div className="mb-3">
                  <div className="d-flex align-items-center text-muted small mb-2">
                    <User size={16} className="me-2" />
                    {report.createdBy}
                  </div>
                  <div className="d-flex align-items-center text-muted small">
                    <Calendar size={16} className="me-2" />
                    {new Date(report.createdAt).toLocaleDateString()}
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm flex-fill d-flex align-items-center justify-content-center">
                    <Eye size={16} className="me-1" />
                    View
                  </button>
                  <button className="btn btn-outline-secondary btn-sm flex-fill d-flex align-items-center justify-content-center">
                    <Download size={16} className="me-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="card border-0 shadow-sm">
          <div className="card-body text-center py-5">
            <FileText size={48} className="text-muted mb-3" />
            <p className="text-muted">No reports found matching your criteria.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;