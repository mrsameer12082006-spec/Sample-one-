import React from 'react';
import {
  LayoutDashboard,
  Ticket,
  Award,
  User,
  CreditCard,
  LogOut,
  Zap,
  Sparkles
} from 'lucide-react';

export const MEMBER_TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'bookings', label: 'My Bookings', icon: Ticket, badge: '3 ACTIVE' },
  { id: 'rewards', label: 'Rewards & Tiers', icon: Award },
  { id: 'profile', label: 'Personal Info', icon: User },
  { id: 'wallet', label: 'Wallet & Passes', icon: CreditCard }
];

export default function MemberLayout({ activeTab, onSelectTab, onToast, onDisconnect, children }) {
  return (
    <div className="member-layout">
      {/* ========================================================
          LEFT SIDEBAR (MEMBER SPACE)
          ======================================================== */}
      <aside className="member-sidebar">
        <div className="member-sidebar-header">
          <span className="member-space-title">MEMBER SPACE</span>
        </div>

        <nav className="member-nav">
          <ul className="member-nav-list">
            {MEMBER_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <li key={tab.id} className="member-nav-item">
                  <button
                    className={`member-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => onSelectTab(tab.id)}
                  >
                    <span className="member-nav-label-group">
                      <span>{tab.label}</span>
                    </span>
                    {tab.badge && (
                      <span className={`member-nav-badge ${isActive ? 'badge-on-active' : ''}`}>
                        {tab.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Nocturne Status Card */}
        <div className="sidebar-bottom-panel">
          <div className="nocturne-status-card">
            <div className="status-card-header">
              <span className="live-dot pulse-pink" />
              <span className="status-card-title">NOCTURNE STATUS</span>
            </div>
            <p className="status-card-text">
              Gold Pass active. 1.5x point accelerator on tonight's events.
            </p>
          </div>

          <button
            className="btn-disconnect"
            onClick={() => {
              onToast?.('Session is synchronized with cloud pass');
              onDisconnect?.();
            }}
          >
            <LogOut size={15} />
            <span>Disconnect Session</span>
          </button>
        </div>
      </aside>

      {/* ========================================================
          MAIN CONTENT AREA FOR CURRENT TAB
          ======================================================== */}
      <section className="member-main-content">
        {children}
      </section>
    </div>
  );
}
