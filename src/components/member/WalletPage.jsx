import React, { useState } from 'react';
import {
  CreditCard,
  ShieldCheck,
  Plus,
  ArrowRight,
  Download,
  Filter,
  CheckCircle2,
  ChevronDown,
  Gift,
  Clock,
  Sparkles,
  Smartphone,
  Zap,
  Tag,
  Receipt
} from 'lucide-react';
import {
  MEMBER_PROFILE,
  CLAIMABLE_PERKS,
  SAVED_PAYMENT_METHODS,
  BILLING_INVOICES
} from '../../data/memberData';

export default function WalletPage({ onOpenPass, onToast }) {
  const [promoCode, setPromoCode] = useState('');
  const [balance, setBalance] = useState(MEMBER_PROFILE.walletBalance);
  const [showTopUpInput, setShowTopUpInput] = useState(false);
  const [topUpAmount, setTopUpAmount] = useState('1000');
  const [invoices, setInvoices] = useState(BILLING_INVOICES);
  const [selectedMonths, setSelectedMonths] = useState('Last 6 Months');

  const handleApplyPromo = (e) => {
    e?.preventDefault();
    if (!promoCode.trim()) {
      onToast?.('Please enter a voucher code');
      return;
    }
    onToast?.(`Promo code "${promoCode.toUpperCase()}" applied! ₹500 bonus credited`);
    setBalance((prev) => prev + 500);
    setPromoCode('');
  };

  const handleTopUp = () => {
    const num = parseFloat(topUpAmount);
    if (!num || num <= 0) {
      onToast?.('Please enter a valid amount');
      return;
    }
    setBalance((prev) => prev + num);
    setShowTopUpInput(false);
    onToast?.(`₹${num.toLocaleString()} successfully added to your Nocturne Vibe Pass!`);
  };

  return (
    <div className="wallet-page">
      {/* ========================================================
          1. HEADER WITH ENCRYPTION BADGE
          ======================================================== */}
      <section className="wallet-header-card">
        <div className="wallet-header-left">
          <div className="header-tag">
            <span className="live-dot pulse-pink" />
            <span>MEMBER VAULT / Security Grade AES-256</span>
          </div>

          <h1 className="wallet-title">
            Wallet, Passes & <span className="font-script gradient-text-pink">Payment</span> Methods
          </h1>

          <p className="wallet-subtitle">
            Manage stored festival credits, instant digital passes, curated complimentary vouchers, and verified billing channels for high-octane nights.
          </p>
        </div>

        <div className="express-pay-badge">
          <ShieldCheck size={16} color="#ec4899" />
          <span>1-Tap Express Pay Active</span>
        </div>
      </section>

      {/* ========================================================
          2. TOP SECTION: DIGITAL VIBE PASS & CREDIT BREAKDOWN
          ======================================================== */}
      <section className="dashboard-section">
        <div className="wallet-pass-grid">
          {/* Left: Nocturne Vibe Pass Card */}
          <div className="vibe-pass-digital-card">
            <div className="vibe-pass-glow" />
            <div className="vibe-pass-content">
              <div className="vibe-pass-top">
                <div className="brand-logo" style={{ fontSize: '24px' }}>
                  Showora.
                </div>
                <span className="badge-gold">GOLD PASS</span>
                <div className="contactless-icon" style={{ marginLeft: 'auto' }}>
                  <div className="wave w1" />
                  <div className="wave w2" />
                  <div className="wave w3" />
                </div>
              </div>

              <div className="vibe-pass-sub">NOCTURNE VIBE PASS</div>

              <div className="vibe-chip-row">
                <div className="gold-chip" />
                <span className="vibe-id-mono">SHOWORA ID • 9482 • NOCTURNE</span>
              </div>

              <div className="vibe-balance-block">
                <span className="vibe-bal-label">AVAILABLE STORED BALANCE</span>
                <div className="vibe-bal-value">₹{balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
                <div className="vibe-holder-name">{MEMBER_PROFILE.fullName.toUpperCase()}</div>
              </div>

              <div className="vibe-pass-actions">
                <button
                  className="btn-white-pill"
                  onClick={() => setShowTopUpInput(!showTopUpInput)}
                >
                  <Plus size={14} />
                  <span>Top-Up</span>
                </button>
                <button
                  className="btn-glass-pill"
                  onClick={() => onToast?.('Opening wallet transfer to friends...')}
                >
                  <span>⇄ Transfer</span>
                </button>
              </div>

              {/* Inline Top Up Form */}
              {showTopUpInput && (
                <div className="inline-topup-box">
                  <div className="topup-input-group">
                    <span className="currency-symbol">₹</span>
                    <input
                      type="number"
                      value={topUpAmount}
                      onChange={(e) => setTopUpAmount(e.target.value)}
                      className="topup-input"
                      placeholder="Amount"
                    />
                    <button className="btn-primary" style={{ padding: '6px 14px', fontSize: '12px' }} onClick={handleTopUp}>
                      Add
                    </button>
                  </div>
                  <div className="quick-amounts-row">
                    {['500', '1000', '2000', '5000'].map((amt) => (
                      <button
                        key={amt}
                        className="quick-amt-pill"
                        onClick={() => setTopUpAmount(amt)}
                      >
                        +₹{amt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Credit Breakdown & Voucher Box */}
          <div className="glass-panel credit-breakdown-card">
            <div className="card-top-tag-row">
              <h3 className="panel-card-title">Credit Breakdown</h3>
              <span className="badge-pink" style={{ fontSize: '10.5px' }}>INSTANT-LIQUID</span>
            </div>

            {/* Split Progress Bar */}
            <div className="credit-split-bar-box">
              <div className="split-labels">
                <span className="split-lbl-left">Points Conversion (58%)</span>
                <span className="split-lbl-right">Event Refunds (42%)</span>
              </div>
              <div className="split-bar-track">
                <div className="split-bar-left" style={{ width: '58%' }} />
                <div className="split-bar-right" style={{ width: '42%' }} />
              </div>
            </div>

            {/* Breakdown Items */}
            <div className="breakdown-items-stack">
              <div className="breakdown-item">
                <div className="breakdown-icon" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                  <Sparkles size={16} />
                </div>
                <div className="breakdown-info">
                  <div className="breakdown-title">Reward Vibe Points Conversion</div>
                  <div className="breakdown-sub">Automated Gold tier 1.5x payout</div>
                </div>
                <div className="breakdown-amount">₹2,450.00</div>
              </div>

              <div className="breakdown-item">
                <div className="breakdown-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}>
                  <Clock size={16} />
                </div>
                <div className="breakdown-info">
                  <div className="breakdown-title">Warehouse Rave Stored Refund</div>
                  <div className="breakdown-sub">Instant festival wallet refund balance</div>
                </div>
                <div className="breakdown-amount">₹1,800.00</div>
              </div>
            </div>

            {/* Speakeasy Voucher Box */}
            <div className="voucher-input-card">
              <label className="voucher-label">HAVE A PROMO OR SPEAKEASY VOUCHER?</label>
              <div className="voucher-input-row">
                <input
                  type="text"
                  placeholder="E.G. SUNBURN2026-VIP"
                  className="voucher-input"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button className="btn-secondary" style={{ padding: '9px 18px', fontSize: '12.5px' }} onClick={handleApplyPromo}>
                  Apply Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ACTIVE PASSES & CLAIMABLE PERKS
          ======================================================== */}
      <section className="dashboard-section">
        <div className="section-title-row">
          <div className="section-title-group">
            <span className="live-dot pulse-pink" />
            <h2 className="section-heading">Active Passes & Claimable Perks</h2>
          </div>
          <span className="section-tag-subtle">3 UNLOCKED PRIVILEGES</span>
        </div>
        <p className="section-subtext" style={{ marginTop: '-8px', marginBottom: '18px' }}>
          Scan in-venue or apply directly before completing ticket checkout.
        </p>

        <div className="perks-grid">
          {CLAIMABLE_PERKS.map((perk) => (
            <div key={perk.id} className="perk-card">
              <div className="perk-top-row">
                <span className={perk.badgeClass}>{perk.badge}</span>
                <span className="perk-expiry">{perk.expiry}</span>
              </div>

              <h4 className="perk-title">{perk.title}</h4>
              <p className="perk-desc">{perk.desc}</p>

              <div className="perk-code-strip">
                <span className="perk-code-lbl">{perk.codeLabel}</span>
                <span className="perk-code-val">{perk.codeValue}</span>
              </div>

              {perk.subnote && <div className="perk-subnote">{perk.subnote}</div>}

              {perk.buttonLabel && (
                <button
                  className={perk.buttonPrimary ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', padding: '10px', fontSize: '13px', marginTop: '14px' }}
                  onClick={() => {
                    if (perk.buttonLabel === 'Show Barcode') {
                      onOpenPass({
                        title: perk.title,
                        scanCode: 'MX-8828',
                        location: 'Ministry of Beer (Connaught Place) & Speakeasies',
                        holder: MEMBER_PROFILE.fullName,
                        gateZone: 'Bar Turnstile 01'
                      });
                    } else {
                      onToast?.(`Perk applied: ${perk.title}`);
                    }
                  }}
                >
                  {perk.buttonLabel}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          4. SAVED PAYMENT METHODS
          ======================================================== */}
      <section className="dashboard-section">
        <div className="section-title-row">
          <div>
            <h2 className="section-heading">Saved Payment Methods</h2>
            <p className="section-subtext">
              Encrypted with PCI-DSS Level 1 compliance for lightning-fast festival drops.
            </p>
          </div>
          <button
            className="btn-primary"
            style={{ padding: '9px 18px', fontSize: '13px' }}
            onClick={() => onToast?.('Add new payment method modal')}
          >
            <Plus size={15} />
            <span>Add New Card or UPI</span>
          </button>
        </div>

        <div className="saved-methods-grid">
          {SAVED_PAYMENT_METHODS.map((method) => (
            <div key={method.id} className="saved-method-card">
              <div className="method-top-row">
                <div className="method-name-group">
                  <CreditCard size={16} color="#ec4899" />
                  <span className="method-name">{method.name}</span>
                </div>
                {method.isDefault ? (
                  <span className="badge-pink" style={{ fontSize: '10px' }}>{method.tag}</span>
                ) : method.tag ? (
                  <button className="link-button" onClick={() => onToast?.(`Set ${method.name} as default`)}>
                    {method.tag}
                  </button>
                ) : (
                  <span className="live-dot" />
                )}
              </div>

              <div className="method-type-sub">{method.type}</div>
              <div className="method-number-mono">{method.number}</div>

              <div className="method-meta-row">
                <span>{method.expires}</span>
                <span>{method.holder}</span>
              </div>

              <div className="method-footer-row">
                <span className="method-footer-left">{method.footerLeft}</span>
                <button
                  className="link-button"
                  onClick={() => onToast?.(`${method.footerAction} action on ${method.name}`)}
                >
                  {method.footerAction}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. BILLING HISTORY & GST INVOICES
          ======================================================== */}
      <section className="dashboard-section">
        <div className="section-title-row">
          <div>
            <h2 className="section-heading">Billing History & GST Invoices</h2>
            <p className="section-subtext">
              Official receipts downloadable for corporate filing and festival entry verifications.
            </p>
          </div>

          <div className="table-controls-right">
            <div className="dropdown-pill">
              <span>{selectedMonths}</span>
              <ChevronDown size={14} />
            </div>
            <button className="btn-icon-tiny" title="Filter" onClick={() => onToast?.('Filter table')}>
              <Filter size={14} />
            </button>
          </div>
        </div>

        <div className="table-responsive glass-panel">
          <table className="archive-table">
            <thead>
              <tr>
                <th>DATE & ID</th>
                <th>EVENT & VENUE</th>
                <th>METHOD</th>
                <th>STATUS</th>
                <th>AMOUNT</th>
                <th>GST RECEIPT</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id}>
                  <td>
                    <div className="table-event-name">{inv.date}</div>
                    <div className="table-venue-name">{inv.txnId}</div>
                  </td>
                  <td>
                    <div className="table-event-name">{inv.event}</div>
                    <div className="table-venue-name">{inv.venue}</div>
                  </td>
                  <td className="table-date-cell">{inv.method}</td>
                  <td>
                    <span className={`status-pill ${inv.statusClass}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className={inv.isRefund ? 'table-amount-cell text-emerald' : 'table-amount-cell'}>
                    {inv.amount}
                  </td>
                  <td>
                    <button
                      className="btn-icon-tiny"
                      title="Download GST Tax Receipt"
                      onClick={() => onToast?.(`Downloading GST invoice for ${inv.txnId}`)}
                    >
                      <Download size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Row */}
        <div className="billing-pagination-row">
          <span className="subcard-subtitle" style={{ margin: 0 }}>
            Showing 4 of 28 billing entries
          </span>

          <div className="pagination-controls">
            <button
              className="page-btn"
              onClick={() => onToast?.('Viewing previous page')}
            >
              Previous
            </button>
            <span className="page-current">1/7</span>
            <button
              className="page-btn"
              onClick={() => onToast?.('Viewing next page')}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
