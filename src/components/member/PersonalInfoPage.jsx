import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Calendar,
  ShieldCheck,
  Lock,
  Camera,
  CheckCircle2,
  Award,
  Smartphone,
  ExternalLink,
  UploadCloud,
  KeyRound,
  FileCode,
  Trash2,
  AlertTriangle
} from 'lucide-react';
import { MEMBER_PROFILE } from '../../data/memberData';

export default function PersonalInfoPage({ onToast }) {
  const [formData, setFormData] = useState({
    firstName: MEMBER_PROFILE.firstName,
    lastName: MEMBER_PROFILE.lastName,
    email: MEMBER_PROFILE.email,
    phone: MEMBER_PROFILE.phone,
    whatsappAlerts: MEMBER_PROFILE.whatsappAlerts,
    dob: MEMBER_PROFILE.dob,
    gender: MEMBER_PROFILE.gender,
    safetyName: MEMBER_PROFILE.safetyContactName,
    safetyPhone: MEMBER_PROFILE.safetyContactPhone
  });

  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleSave = (e) => {
    e?.preventDefault();
    setHasChanges(false);
    onToast?.('Personal profile updated successfully! ✓');
  };

  const handleDiscard = () => {
    setFormData({
      firstName: MEMBER_PROFILE.firstName,
      lastName: MEMBER_PROFILE.lastName,
      email: MEMBER_PROFILE.email,
      phone: MEMBER_PROFILE.phone,
      whatsappAlerts: MEMBER_PROFILE.whatsappAlerts,
      dob: MEMBER_PROFILE.dob,
      gender: MEMBER_PROFILE.gender,
      safetyName: MEMBER_PROFILE.safetyContactName,
      safetyPhone: MEMBER_PROFILE.safetyContactPhone
    });
    setHasChanges(false);
    onToast?.('Changes discarded');
  };

  return (
    <div className="personal-info-page">
      {/* ========================================================
          1. PROFILE HEADER CARD
          ======================================================== */}
      <section className="profile-hero-card">
        <div className="profile-hero-left">
          <div className="avatar-with-camera">
            <div className="profile-large-avatar">
              <span>DA</span>
            </div>
            <button
              className="avatar-cam-badge"
              title="Update Avatar"
              onClick={() => onToast?.('Upload profile picture modal')}
            >
              <Camera size={13} color="#ffffff" />
            </button>
          </div>

          <div className="profile-identity">
            <div className="profile-name-row">
              <h2 className="profile-full-name">{MEMBER_PROFILE.fullName}</h2>
              <span className="badge-gold">GOLD TIER</span>
            </div>
            <p className="profile-meta-sub">
              Citizen ID: <span className="mono-text">{MEMBER_PROFILE.citizenId}</span> • Member since {MEMBER_PROFILE.memberSince}
            </p>
            <div className="fast-track-cleared-tag">
              <span className="live-dot pulse-pink" />
              <span>{MEMBER_PROFILE.status}</span>
            </div>
          </div>
        </div>

        <div className="profile-privilege-card">
          <div className="privilege-icon-circle">
            <Award size={18} color="#ec4899" />
          </div>
          <div>
            <span className="privilege-label">CLUB PRIVILEGE</span>
            <div className="privilege-val">{MEMBER_PROFILE.tierMultiplier}</div>
            <p className="privilege-sub">Unlocks backstage guestlist access</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. TWO-COLUMN LAYOUT: PERSONAL PROFILE & SECURITY
          ======================================================== */}
      <div className="profile-two-column-grid">
        {/* Left Column: Personal Profile Form */}
        <div className="glass-panel profile-form-card">
          <div className="card-top-tag-row">
            <div className="card-title-group">
              <User size={16} color="#ec4899" />
              <h3 className="panel-card-title">Personal Profile</h3>
            </div>
            <span className="section-tag-subtle">Basic Information</span>
          </div>

          <form onSubmit={handleSave} className="profile-fields-stack">
            {/* Row 1: First Name & Last Name */}
            <div className="form-two-cols">
              <div className="form-group">
                <label className="form-label">FIRST NAME</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">LAST NAME</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                />
              </div>
            </div>

            {/* Row 2: Registered Email */}
            <div className="form-group">
              <div className="label-with-badge">
                <label className="form-label">REGISTERED EMAIL</label>
                <span className="badge-verified">
                  <CheckCircle2 size={11} /> VERIFIED
                </span>
              </div>
              <input
                type="email"
                className="form-input"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>

            {/* Row 3: Mobile Number */}
            <div className="form-group">
              <div className="label-with-badge">
                <label className="form-label">MOBILE NUMBER</label>
                <span className="badge-otp">OTP Secured</span>
              </div>
              <input
                type="text"
                className="form-input"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>

            {/* WhatsApp Integration Row */}
            <div className="whatsapp-toggle-row">
              <div className="wa-icon-box">
                <Smartphone size={18} color="#ec4899" />
              </div>
              <div className="wa-text-box">
                <div className="wa-title">Instant Gate Passes on WhatsApp</div>
                <div className="wa-sub">Receive offline barcode tickets & venue flash alerts</div>
              </div>
              <label className="switch-toggle">
                <input
                  type="checkbox"
                  checked={formData.whatsappAlerts}
                  onChange={(e) => handleChange('whatsappAlerts', e.target.checked)}
                />
                <span className="slider round" />
              </label>
            </div>

            {/* Row 4: DOB & Gender */}
            <div className="form-two-cols">
              <div className="form-group">
                <label className="form-label">DATE OF BIRTH (21+ VALIDATION)</label>
                <div className="input-with-icon">
                  <input
                    type="text"
                    className="form-input"
                    value={formData.dob}
                    onChange={(e) => handleChange('dob', e.target.value)}
                  />
                  <Calendar size={15} className="input-icon-right" />
                </div>
                <span className="field-hint-text">Required for late-night venues & liquor checkpoints</span>
              </div>

              <div className="form-group">
                <label className="form-label">GENDER / PRONOUNS</label>
                <select
                  className="form-select"
                  value={formData.gender}
                  onChange={(e) => handleChange('gender', e.target.value)}
                >
                  <option value="He / Him">He / Him</option>
                  <option value="She / Her">She / Her</option>
                  <option value="They / Them">They / Them</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            {/* Row 5: Nightlife Safety Contact */}
            <div className="safety-contact-section">
              <div className="safety-header">
                <span className="pink-star">★</span>
                <div>
                  <div className="safety-title">NIGHTLIFE SAFETY CONTACT</div>
                  <div className="safety-sub">
                    Designated person to reach in rare stadium evacuations or medical triage situations.
                  </div>
                </div>
              </div>

              <div className="form-two-cols" style={{ marginTop: '10px' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Contact Name & Relation"
                  value={formData.safetyName}
                  onChange={(e) => handleChange('safetyName', e.target.value)}
                />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Contact Phone"
                  value={formData.safetyPhone}
                  onChange={(e) => handleChange('safetyPhone', e.target.value)}
                />
              </div>
            </div>

            {/* Card Footer: Timestamp & Action Buttons */}
            <div className="profile-form-footer">
              <span className="last-updated-text">Last updated on 14 Jan 2026, 03:22 AM</span>
              <div className="form-actions-buttons">
                <button
                  type="button"
                  className="btn-secondary"
                  style={{ padding: '9px 18px', fontSize: '13px' }}
                  onClick={handleDiscard}
                  disabled={!hasChanges}
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '9px 22px', fontSize: '13px' }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column: Gate Accreditation & Access Security */}
        <div className="profile-side-column">
          {/* Gate Accreditation Card */}
          <div className="glass-panel profile-side-card">
            <div className="card-top-tag-row">
              <div className="card-title-group">
                <ShieldCheck size={16} color="#ec4899" />
                <h3 className="panel-card-title">Gate Accreditation</h3>
              </div>
              <span className="badge-pink" style={{ fontSize: '10.5px' }}>FAST TRACK</span>
            </div>

            <p className="panel-desc">
              Tokenized government ID for express QR scanner entry at VIP festival gates without physical wallet inspection.
            </p>

            <div className="aadhaar-vault-card">
              <div className="vault-top-row">
                <span className="vault-label">AADHAAR NATIONAL ID</span>
                <span className="vault-status">
                  <span className="live-dot pulse-pink" /> ENCRYPTED VAULT
                </span>
              </div>

              <div className="aadhaar-number-display">
                <span className="mono-dots">•••• •••• {MEMBER_PROFILE.aadhaarLast4}</span>
                <Lock size={15} color="#ec4899" />
              </div>

              <div className="vault-bottom-row">
                <span className="vault-sub">{MEMBER_PROFILE.aadhaarStatus}</span>
                <span className="vault-sub">{MEMBER_PROFILE.aadhaarValid}</span>
              </div>
            </div>

            <button
              className="btn-secondary"
              style={{ width: '100%', padding: '10px', fontSize: '13px', marginTop: '14px' }}
              onClick={() => onToast?.('Opening UIDAI DigiLocker re-verification portal...')}
            >
              <UploadCloud size={14} />
              <span>Update / Re-verify Document</span>
            </button>
          </div>

          {/* Access Security Card */}
          <div className="glass-panel profile-side-card">
            <div className="card-title-group" style={{ marginBottom: '14px' }}>
              <KeyRound size={16} color="#ec4899" />
              <h3 className="panel-card-title">Access Security</h3>
            </div>

            {/* Password Item */}
            <div className="security-item-row">
              <div>
                <div className="sec-item-title">Password</div>
                <div className="sec-item-sub">{MEMBER_PROFILE.passwordRotated}</div>
              </div>
              <button
                className="btn-secondary"
                style={{ padding: '6px 14px', fontSize: '12px' }}
                onClick={() => onToast?.('Password reset instructions sent to your email')}
              >
                Modify
              </button>
            </div>

            {/* 2FA Item */}
            <div className="security-item-row">
              <div>
                <div className="sec-item-title">
                  <span className="live-dot" /> Two-Factor Authentication
                </div>
                <div className="sec-item-sub">Authenticator App + Backup SMS</div>
              </div>
              <span className="badge-pink" style={{ fontSize: '11px' }}>ENABLED</span>
            </div>

            {/* Connected Ecosystems */}
            <div className="connected-ecosystems-block">
              <div className="ecosystems-heading">CONNECTED ECOSYSTEMS</div>

              {/* Spotify */}
              <div className="ecosystem-item">
                <div className="eco-icon-wrap" style={{ background: 'rgba(30, 215, 96, 0.15)', color: '#1ed760' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308c-.218.358-.682.473-1.04.255-2.852-1.742-6.443-2.137-10.672-1.17-.408.093-.815-.164-.908-.572-.093-.408.164-.815.572-.908 4.633-1.059 8.608-.616 11.793 1.332.358.218.473.682.255 1.04zm1.468-3.264c-.274.446-.86.587-1.306.313-3.264-2.007-8.24-2.589-12.099-1.417-.5.152-1.029-.133-1.181-.633-.152-.5.133-1.029.633-1.181 4.417-1.341 9.907-.692 13.64 1.606.446.274.587.86.313 1.306zm.126-3.41c-3.915-2.325-10.37-2.539-14.103-1.406-.601.182-1.237-.167-1.419-.768-.182-.601.167-1.237.768-1.419 4.296-1.304 11.419-1.057 15.932 1.621.541.321.72 1.02.399 1.561-.321.541-1.02.72-1.561.399z"/>
                  </svg>
                </div>
                <div className="eco-info">
                  <div className="eco-name">Spotify Music Sync</div>
                  <div className="eco-sub">Tailors rave line-ups to top artists</div>
                </div>
                <span className="text-emerald" style={{ fontSize: '12px', fontWeight: 600 }}>Connected</span>
              </div>

              {/* Google */}
              <div className="ecosystem-item">
                <div className="eco-icon-wrap" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                  </svg>
                </div>
                <div className="eco-info">
                  <div className="eco-name">Google SSO</div>
                  <div className="eco-sub">{MEMBER_PROFILE.email}</div>
                </div>
                <span className="text-muted" style={{ fontSize: '12px' }}>Linked</span>
              </div>

              {/* Apple */}
              <div className="ecosystem-item">
                <div className="eco-icon-wrap" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#ffffff' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.91-.91.04-2.02.61-2.67 1.38-.58.67-1.08 1.76-.94 2.81 1.02.08 2.04-.51 2.67-1.28z"/>
                  </svg>
                </div>
                <div className="eco-info">
                  <div className="eco-name">Apple Sign-In</div>
                  <div className="eco-sub">Not connected</div>
                </div>
                <button
                  className="link-button"
                  style={{ fontSize: '12px' }}
                  onClick={() => onToast?.('Apple ID authorization initiated...')}
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. DATA PRIVACY & ACCOUNT SOVEREIGNTY
          ======================================================== */}
      <section className="dashboard-section" style={{ marginTop: '24px' }}>
        <div className="glass-panel data-privacy-card">
          <div className="privacy-text-side">
            <h4 className="privacy-title">Data Privacy & Account Sovereignty</h4>
            <p className="privacy-desc">
              Export your encrypted festival booking history, venue attendance metadata, or initiate immediate account anonymization under Showora Nocturne Protocol.
            </p>
          </div>

          <div className="privacy-actions-side">
            <button
              className="btn-secondary"
              style={{ padding: '9px 18px', fontSize: '13px' }}
              onClick={() => onToast?.('Generating citizen encrypted JSON dump...')}
            >
              <FileCode size={14} />
              <span>Export My Data (.JSON)</span>
            </button>
            <button
              className="btn-danger-outline"
              style={{ padding: '9px 18px', fontSize: '13px' }}
              onClick={() => onToast?.('Account deactivation requires two-factor confirmation')}
            >
              <span>Deactivate Account</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
