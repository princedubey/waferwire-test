import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Calendar, 
  MapPin, 
  Phone, 
  Edit3, 
  Save, 
  X,
  Camera,
  Shield,
  Bell,
  Lock
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user?.name || '',
    email: user?.email || '',
    department: user?.department || '',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  });

  const handleSave = () => {
    console.log('Saving user data:', editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({
      name: user?.name || '',
      email: user?.email || '',
      department: user?.department || '',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA'
    });
    setIsEditing(false);
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Profile Settings</h2>
        <p className="text-muted">Manage your account information and preferences.</p>
      </div>

      {/* Profile Information */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-white d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Personal Information</h5>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-outline-primary btn-sm d-flex align-items-center"
            >
              <Edit3 size={16} className="me-1" />
              Edit
            </button>
          ) : (
            <div className="d-flex gap-2">
              <button
                onClick={handleSave}
                className="btn btn-outline-success btn-sm d-flex align-items-center"
              >
                <Save size={16} className="me-1" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="btn btn-outline-secondary btn-sm d-flex align-items-center"
              >
                <X size={16} className="me-1" />
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="card-body p-4">
          <div className="row">
            {/* Avatar Section */}
            <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
              <div className="position-relative d-inline-block mb-3">
                <img
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=3B82F6&color=fff&size=120`}
                  alt={user?.name}
                  className="rounded-circle border border-3 border-white shadow"
                  style={{width: '120px', height: '120px'}}
                />
                <button className="btn btn-primary btn-sm rounded-circle position-absolute bottom-0 end-0">
                  <Camera size={16} />
                </button>
              </div>
              <div>
                <h5 className="mb-1">{user?.name}</h5>
                <small className="text-muted text-capitalize">{user?.role}</small>
              </div>
            </div>

            {/* Form Fields */}
            <div className="col-12 col-md-8">
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label fw-medium">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedUser.name}
                      onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                      className="form-control"
                    />
                  ) : (
                    <div className="d-flex align-items-center text-dark">
                      <User size={16} className="text-muted me-2" />
                      <span>{user?.name}</span>
                    </div>
                  )}
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label fw-medium">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedUser.email}
                      onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                      className="form-control"
                    />
                  ) : (
                    <div className="d-flex align-items-center text-dark">
                      <Mail size={16} className="text-muted me-2" />
                      <span>{user?.email}</span>
                    </div>
                  )}
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label fw-medium">Department</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedUser.department}
                      onChange={(e) => setEditedUser({ ...editedUser, department: e.target.value })}
                      className="form-control"
                    />
                  ) : (
                    <div className="d-flex align-items-center text-dark">
                      <Shield size={16} className="text-muted me-2" />
                      <span>{user?.department}</span>
                    </div>
                  )}
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label fw-medium">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedUser.phone}
                      onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                      className="form-control"
                    />
                  ) : (
                    <div className="d-flex align-items-center text-dark">
                      <Phone size={16} className="text-muted me-2" />
                      <span>{editedUser.phone}</span>
                    </div>
                  )}
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label fw-medium">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedUser.location}
                      onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
                      className="form-control"
                    />
                  ) : (
                    <div className="d-flex align-items-center text-dark">
                      <MapPin size={16} className="text-muted me-2" />
                      <span>{editedUser.location}</span>
                    </div>
                  )}
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label fw-medium">Member Since</label>
                  <div className="d-flex align-items-center text-dark">
                    <Calendar size={16} className="text-muted me-2" />
                    <span>{new Date(user?.joinedDate || '').toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">Account Settings</h5>
        </div>
        <div className="card-body">
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Bell size={20} className="text-muted me-3" />
                <div>
                  <div className="fw-medium">Email Notifications</div>
                  <small className="text-muted">Receive updates about your account</small>
                </div>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" defaultChecked />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Lock size={20} className="text-muted me-3" />
                <div>
                  <div className="fw-medium">Two-Factor Authentication</div>
                  <small className="text-muted">Add an extra layer of security</small>
                </div>
              </div>
              <button className="btn btn-outline-secondary btn-sm">
                Enable
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;