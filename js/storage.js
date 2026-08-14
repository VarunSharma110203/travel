// Centralized Storage & Navigation Badge Helper for Trustpack

const SAVED_KEY = 'trustpack_saved_trips';

/** Get array of saved trip IDs */
function getSavedTripIds() {
  try {
    const raw = localStorage.getItem(SAVED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading saved trips:', e);
    return [];
  }
}

/** Save or unsave a trip ID */
function toggleSaveTrip(id) {
  const current = getSavedTripIds();
  const index = current.indexOf(id);
  let isSaved = false;

  if (index >= 0) {
    current.splice(index, 1);
    isSaved = false;
  } else {
    current.push(id);
    isSaved = true;
  }

  try {
    localStorage.setItem(SAVED_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Error updating saved trips:', e);
  }

  updateNavBadges();
  return isSaved;
}

/** Check if trip ID is saved */
function isTripSaved(id) {
  return getSavedTripIds().includes(id);
}

/** Update count on all .nav-count elements */
function updateNavBadges() {
  const count = getSavedTripIds().length;
  const badges = document.querySelectorAll('.nav-count');
  badges.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline-block' : 'none';
  });
}

/** Show temporary toast notification */
function showToast(message) {
  let toastEl = document.getElementById('toast');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'toast';
    toastEl.className = 'toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = message;
  toastEl.classList.add('show');
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2400);
}

/** Show APM Product Thesis Modal for interview presentation */
function openApmThesisModal() {
  let modal = document.getElementById('apm-thesis-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'apm-thesis-modal';
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
      <div class="modal-card" style="max-width: 650px; text-align: left;">
        <button class="modal-close" onclick="document.getElementById('apm-thesis-modal').classList.remove('active')">&times;</button>
        <p class="eyebrow" style="justify-content: flex-start; margin-bottom: 6px;">✦ APM Assignment Product Thesis</p>
        <h2 style="font-family: var(--font-serif); font-size: 26px; margin: 0 0 12px;">Exploratory Search for First-Time Package Buyers</h2>
        
        <div style="font-size: 13px; color: var(--text-muted); line-height: 1.6; display: flex; flex-direction: column; gap: 12px; max-height: 60vh; overflow-y: auto; padding-right: 8px;">
          <div style="background: var(--primary-light); padding: 12px 16px; border-radius: 8px; border-left: 4px solid var(--primary);">
            <strong style="color: var(--primary);">Core Hypothesis:</strong> First-time buyers have a <em>feeling</em> (budget, pace, vibe), not airport codes. They abandon traditional OTAs due to decision anxiety. Trustpack reduces friction with visible context, top-3 curation, and all-in prices.
          </div>

          <div>
            <strong style="color: var(--text-dark); font-size: 14px;">Key Product Decisions:</strong>
            <ul style="margin: 6px 0 0; padding-left: 20px;">
              <li><strong>Choice Overload Mitigation:</strong> Default to top 3 curated packages instead of endless lists.</li>
              <li><strong>Zero Hidden Fees:</strong> Itemized sticker pricing including flights, stays, transfers & GST.</li>
              <li><strong>Low-Friction Commitments:</strong> 24-hour free hold & zero-login shortlist saving.</li>
              <li><strong>Plain-Language Rationale:</strong> Match %, transfer friction, seasonal fit & budget headroom.</li>
            </ul>
          </div>

          <div>
            <strong style="color: var(--text-dark); font-size: 14px;">Metrics to Validate Next:</strong>
            <ul style="margin: 6px 0 0; padding-left: 20px;">
              <li>Brief-to-Shortlist completion rate</li>
              <li>Time to first viable package selection</li>
              <li>24-Hour Hold to Booking conversion rate</li>
            </ul>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    modal.classList.add('active');
  }
}

// Auto update badges on DOM load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    updateNavBadges();

    // Wire APM Thesis buttons
    document.querySelectorAll('#apm-thesis-btn').forEach(btn => {
      btn.addEventListener('click', openApmThesisModal);
    });
  });
}

if (typeof window !== 'undefined') {
  window.getSavedTripIds = getSavedTripIds;
  window.toggleSaveTrip = toggleSaveTrip;
  window.isTripSaved = isTripSaved;
  window.updateNavBadges = updateNavBadges;
  window.showToast = showToast;
  window.openApmThesisModal = openApmThesisModal;
}


