// Logic for Results Page (results.html) with APM Product Features

const query = typeof location !== 'undefined' ? new URLSearchParams(location.search) : new URLSearchParams('');
let currentBrief = query.get('brief') || '';
const currentAirport = query.get('airport') || 'BLR';
const currentMode = query.get('mode') || 'flights';
let currentAdults = query.get('adults') || '2';
let currentRooms = query.get('rooms') || '1';
const currentDepart = query.get('depart') || '';   // "YYYY-MM-DD" from date picker
const currentDuration = query.get('duration') || '5'; // days as string

const airportNames = {
  BLR: 'Bengaluru Intl',
  DEL: 'Delhi Intl',
  BOM: 'Mumbai Intl',
  HYD: 'Hyderabad',
  MAA: 'Chennai'
};

// Filter State
let activeRegion = 'all';
let activeGroup = 'all';
let activeVibe = 'all';
let activeSort = 'match';
let isPerPersonMode = false;
let maxBudgetCap = 250000;
let showAllResults = false; // APM requirement: default to top 3 curated to reduce choice overload

/** Format a YYYY-MM-DD string to "Fri, 15 Aug" */
function formatDepartDate(iso) {
  if (!iso) return null;
  const d = new Date(iso + 'T00:00:00'); // local midnight
  const days  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const returnD = new Date(d);
  returnD.setDate(d.getDate() + Number(currentDuration));
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} – ${returnD.getDate()} ${months[returnD.getMonth()]} (${currentDuration}d)`;
}

// Parse Brief for Context
function parseBrief(text) {
  if (!text) {
    return {
      budget: null,
      dates: null,
      group: 'all',
      vibe: 'all',
      isPerPerson: false,
      isAmbiguous: !currentDepart  // structured date from picker resolves ambiguity
    };
  }

  const lower = text.toLowerCase();
  
  let extractedBudget = null;
  const budgetMatch = lower.match(/(?:₹|rs\.?|inr)\s*([\d,]+)\s*(k|l|lakh|lakhs)?/i) || lower.match(/\b(\d+)\s*(k|lakh|lakhs)\b/i);
  if (budgetMatch) {
    const num = Number(budgetMatch[1].replace(/,/g, ''));
    const multiplier = (budgetMatch[2] && budgetMatch[2].toLowerCase().startsWith('l')) ? 100000 : 1000;
    extractedBudget = num * multiplier;
  }

  // Match "15 Aug–20 Aug", "15–17 August", "next 3 months", month names
  const datesMatch = text.match(/\b\d{1,2}\s*[A-Za-z]*\s*(?:–|-|to)\s*\d{1,2}\s*[A-Za-z]+/i)?.[0]
    || text.match(/\b\d{1,2}\s*(?:–|-|to)\s*\d{1,2}\s*[a-z]+/i)?.[0]
    || text.match(/\b(?:next\s+(?:3|six)\s+months|(?:january|february|march|april|may|june|july|august|september|october|november|december))\b/i)?.[0]
    || null;

  let group = 'all';
  if (/friends?/i.test(lower)) group = 'friends';
  else if (/couple|wife|husband|honeymoon/i.test(lower)) group = 'couple';
  else if (/family|kids?|children/i.test(lower)) group = 'family';
  else if (/solo|myself|alone/i.test(lower)) group = 'solo';

  let vibe = 'all';
  if (/beach|coast|sea|resort|island/i.test(lower)) vibe = 'beach';
  else if (/culture|food|heritage|palace|french/i.test(lower)) vibe = 'culture';
  else if (/mountain|pine|hills|snow|valley/i.test(lower)) vibe = 'mountains';
  else if (/nature|houseboat|backwaters|forest/i.test(lower)) vibe = 'nature';

  return {
    budget: extractedBudget,
    dates: datesMatch,
    group: group,
    vibe: vibe,
    isPerPerson: /per\s*person|p\.p\.?|each/i.test(lower),
    // Ambiguous only if BOTH text-dates and structured date are missing
    isAmbiguous: !datesMatch && !currentDepart && !extractedBudget
  };
}

function formatMoney(amount) {
  if (amount >= 100000) {
    return '₹' + (amount / 100000).toFixed(1) + 'L';
  }
  return '₹' + Math.round(amount / 1000) + 'k';
}

function calculateDynamicMatchScore(pkg, briefText) {
  if (!briefText) return 94;
  const lower = briefText.toLowerCase();
  let score = 82;

  if (lower.includes(pkg.id) || lower.includes(pkg.place.toLowerCase()) || lower.includes(pkg.country.toLowerCase())) {
    score += 16;
  }

  pkg.tags.forEach(t => {
    if (lower.includes(t.toLowerCase())) score += 4;
  });

  return Math.min(99, score);
}

function updateHeardBanner(context) {
  const tags = [`✈ ${airportNames[currentAirport] || currentAirport}`];
  tags.push(`👥 ${currentAdults} Guest${Number(currentAdults) > 1 ? 's' : ''} · ${currentRooms} Room${Number(currentRooms) > 1 ? 's' : ''}`);

  // Structured date from picker takes priority over brief-parsed date
  const structuredDate = formatDepartDate(currentDepart);
  if (structuredDate) {
    tags.push(`📅 ${structuredDate}`);
  } else if (context.dates) {
    tags.push(`📅 ${context.dates}`);
  }

  if (context.vibe && context.vibe !== 'all') tags.push(`✨ ${context.vibe}`);
  if (context.budget) tags.push(`💰 ${formatMoney(context.budget)} ${context.isPerPerson ? 'p.p.' : 'total'}`);
  if (currentMode === 'flights') tags.push('✈ Flights Included');

  const heardTagsEl = document.getElementById('heard-tags');
  if (heardTagsEl) {
    heardTagsEl.innerHTML = tags.map(t => `<span>${t}</span>`).join('');
  }

  // Dynamic AI copy
  const heardCopyEl = document.getElementById('heard-copy');
  if (heardCopyEl) {
    const datePart = structuredDate ? ` · ${structuredDate}` : (context.dates ? ` · ${context.dates}` : '');
    heardCopyEl.textContent = `AI matched your brief: ${airportNames[currentAirport] || currentAirport}${datePart} · ${currentAdults} guests. Here are your top packages.`;
  }

  // Handle Clarifying Question Card (APM requirement)
  const clarifierCard = document.getElementById('clarifying-card');
  if (clarifierCard) {
    // Only show if there IS a brief and it's still ambiguous (no flight/road keyword)
    if (currentBrief && context.isAmbiguous && !currentBrief.includes('flight') && !currentBrief.includes('road')) {
      clarifierCard.style.display = 'block';
    } else {
      clarifierCard.style.display = 'none';
    }
  }

  // Dynamically update destination pills based on brief/vibe context!
  renderDynamicCityPills(context);
}

/** Dynamically render location pills matching user's vibe/brief + custom location search button */
function renderDynamicCityPills(context) {
  const container = document.getElementById('city-pills');
  if (!container) return;

  const lower = (currentBrief + ' ' + (context.vibe || '')).toLowerCase();
  
  let suggestedCities = [
    { id: 'all', label: '🌐 All' },
    { id: 'goa', label: '📍 Goa' },
    { id: 'varkala', label: '📍 Varkala' },
    { id: 'kerala', label: '📍 Kerala' },
    { id: 'bali', label: '📍 Bali' },
    { id: 'himachal', label: '📍 Himachal' },
    { id: 'rajasthan', label: '📍 Rajasthan' },
    { id: 'pondy', label: '📍 Pondicherry' },
    { id: 'vietnam', label: '📍 Vietnam' },
    { id: 'andaman', label: '📍 Andaman' }
  ];

  if (lower.includes('beach') || lower.includes('sea') || lower.includes('coast') || lower.includes('island')) {
    suggestedCities = [
      { id: 'all', label: '🌐 All Beaches' },
      { id: 'goa', label: '📍 Goa' },
      { id: 'varkala', label: '📍 Varkala Beach' },
      { id: 'pondy', label: '📍 Pondicherry' },
      { id: 'bali', label: '📍 Bali Reef' },
      { id: 'andaman', label: '📍 Andaman Island' }
    ];
  } else if (lower.includes('mountain') || lower.includes('hill') || lower.includes('snow')) {
    suggestedCities = [
      { id: 'all', label: '🌐 All Mountains' },
      { id: 'himachal', label: '📍 Himachal (Manali)' },
      { id: 'ladakh', label: '📍 Ladakh Pass' },
      { id: 'kashmir', label: '📍 Kashmir Valley' }
    ];
  } else if (lower.includes('culture') || lower.includes('food') || lower.includes('heritage')) {
    suggestedCities = [
      { id: 'all', label: '🌐 All Cultural' },
      { id: 'rajasthan', label: '📍 Rajasthan Forts' },
      { id: 'pondy', label: '📍 French Pondicherry' },
      { id: 'vietnam', label: '📍 Da Nang & Hoi An' }
    ];
  }

  let html = `<span style="font-size: 11px; color: var(--text-muted); font-weight: 700; align-self: center; margin-right: 4px;">Context Destinations:</span>`;
  
  html += suggestedCities.map(c => {
    const isActive = (c.id === 'all' && !currentBrief) || (currentBrief && currentBrief.toLowerCase().includes(c.id));
    return `
      <button class="city-pill ${isActive ? 'active' : ''}" data-city="${c.id}" style="border: 1px solid var(--border-light); background: ${isActive ? 'var(--primary-light)' : 'var(--bg-card)'}; color: ${isActive ? 'var(--primary)' : 'var(--text-muted)'}; font-size: 11px; font-weight: ${isActive ? '700' : '500'}; padding: 4px 10px; border-radius: 20px; cursor: pointer;">
        ${c.label}
      </button>
    `;
  }).join('');

  // Add the "🔍 Search custom location +" button at the end of the pill list!
  html += `
    <button id="custom-loc-btn" style="border: 1px dashed var(--primary); background: #ffffff; color: var(--primary); font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; cursor: pointer; display: flex; align-items: center; gap: 4px;">
      🔍 Custom Location +
    </button>
  `;

  container.innerHTML = html;

  // Re-wire pill handlers
  container.querySelectorAll('.city-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      window.customLocationQuery = null;
      const city = btn.dataset.city;
      currentBrief = (city === 'all') ? '' : city;
      const briefInput = document.getElementById('result-brief');
      if (briefInput) briefInput.value = currentBrief;
      updateHeardBanner(parseBrief(currentBrief));
      renderResults();
    });
  });

  // Wire Custom Location expander button
  const customLocBtn = document.getElementById('custom-loc-btn');
  if (customLocBtn) {
    customLocBtn.addEventListener('click', () => {
      const customPlace = prompt('Type any city, state or country name (e.g. Varkala, Ladakh, Dubai, Coorg, Kashmir):');
      if (customPlace && customPlace.trim()) {
        window.customLocationQuery = customPlace.trim();
        currentBrief = customPlace.trim();
        const briefInput = document.getElementById('result-brief');
        if (briefInput) briefInput.value = currentBrief;
        updateHeardBanner(parseBrief(currentBrief));
        renderResults();
      }
    });
  }
}

function renderResults() {
  const resultList = document.getElementById('result-list');
  const resultCount = document.getElementById('result-count');
  if (!resultList || typeof TRIPS === 'undefined') return;

  const numAdults = Number(currentAdults) || 2;
  const numRooms = Number(currentRooms) || Math.ceil(numAdults / 2);

  const scoredTrips = TRIPS.map(pkg => {
    // Dynamic transport pricing based on selected travel mode
    const flightCostPP = pkg.priceBreakdown ? Math.round(pkg.priceBreakdown[0].cost / 2) : 4300;
    let perPersonPrice = pkg.perPersonPrice;
    if (currentMode === 'self') {
      perPersonPrice = Math.max(3000, pkg.perPersonPrice - flightCostPP);
    } else if (currentMode === 'ground') {
      perPersonPrice = Math.max(4500, pkg.perPersonPrice - Math.round(flightCostPP * 0.6));
    }

    const totalPackagePrice = perPersonPrice * numAdults;
    return {
      ...pkg,
      calculatedTotal: totalPackagePrice,
      calculatedPerPerson: perPersonPrice,
      computedMatchScore: calculateDynamicMatchScore(pkg, currentBrief)
    };
  });

  // Filter packages
  let filtered = scoredTrips.filter(pkg => {
    if (activeRegion === 'india' && pkg.region !== 'india') return false;
    if (activeRegion === 'global' && pkg.region !== 'global') return false;

    if (activeVibe !== 'all') {
      const matchVibe = pkg.tags.some(t => t.toLowerCase().includes(activeVibe.toLowerCase())) ||
                        pkg.name.toLowerCase().includes(activeVibe.toLowerCase()) ||
                        pkg.copy.toLowerCase().includes(activeVibe.toLowerCase());
      if (!matchVibe) return false;
    }

    const checkPrice = isPerPersonMode ? pkg.calculatedPerPerson : pkg.calculatedTotal;
    if (checkPrice > maxBudgetCap) return false;

    return true;
  });

  // Only generate a custom AI package if the user explicitly searched for a custom place (via Custom Location prompt or direct city name search)
  const isExplicitCustomSearch = window.customLocationQuery && window.customLocationQuery.trim().length > 1;

  if (isExplicitCustomSearch) {
    const rawPlaceName = window.customLocationQuery.trim();
    const capitalizedPlace = rawPlaceName.charAt(0).toUpperCase() + rawPlaceName.slice(1);
    
    // Dynamically insert an AI-generated package card for the user's custom location!
    const customPkg = {
      id: 'custom-' + rawPlaceName.toLowerCase().replace(/[^a-z0-9]/g, ''),
      name: `${capitalizedPlace} Coastal & Scenic Escape — Custom AI Explorer`,
      place: `${capitalizedPlace}, Featured Region`,
      country: 'Custom Destination',
      region: 'india',
      days: '4 days · 3 nights',
      price: 16000 * numAdults,
      perPersonPrice: 16000,
      calculatedTotal: 16000 * numAdults,
      calculatedPerPerson: 16000,
      computedMatchScore: 98,
      img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85',
      tags: ['custom ai', rawPlaceName.toLowerCase(), 'tailored itinerary'],
      copy: `Dynamically generated 4-day itinerary for ${capitalizedPlace} with flights, boutique stay, private transfers & GST included.`,
      fit: `Custom itinerary generated live for your search '${capitalizedPlace}'.`,
      season: 'Optimal seasonal timing applied.',
      operator: 'Trustpack AI Concierge & Verified Operator',
      rating: 4.9,
      reviewsCount: 142,
      transport: { airline: 'Top Partner Airline', duration: 'Direct Flight + AC Sedan Cab', notes: 'Private airport pickup included.' }
    };
    filtered.unshift(customPkg);
  }

  // Sort packages
  if (activeSort === 'price-low') {
    filtered.sort((a, b) => a.calculatedTotal - b.calculatedTotal);
  } else if (activeSort === 'price-high') {
    filtered.sort((a, b) => b.calculatedTotal - a.calculatedTotal);
  } else {
    filtered.sort((a, b) => b.computedMatchScore - a.computedMatchScore);
  }

  const totalMatchesCount = filtered.length;

  // Choice overload mitigation: slice to top 3 curated unless showAllResults is true
  const displayed = showAllResults ? filtered : filtered.slice(0, 3);

  if (resultCount) {
    resultCount.innerHTML = `
      <span>Showing <strong>${displayed.length} of ${totalMatchesCount}</strong> curated matches</span>
      <small style="color: var(--text-muted); font-size: 11px; margin-left: 8px;">(Top 3 curated to prevent choice overload)</small>
    `;
  }

  if (filtered.length === 0) {
    resultList.innerHTML = `
      <div class="empty-results">
        <strong>No packages match the selected budget cap</strong>
        <p style="color: var(--text-muted); font-size: 13px; margin: 8px 0 16px;">Try increasing your max budget slider or switching region to "All Destinations".</p>
        <button class="primary-button" onclick="resetFilters()" style="margin: 0 auto;">Reset Filters & Show All</button>
      </div>
    `;
    return;
  }

  let html = displayed.map(pkg => {
    const saved = isTripSaved(pkg.id);
    return `
      <article class="package-card" data-id="${pkg.id}">
        <div class="package-img" style="background-image: url('${pkg.img}')">
          <span class="match">✦ ${pkg.computedMatchScore}% match</span>
          <button class="card-save-btn ${saved ? 'saved' : ''}" data-save-id="${pkg.id}" title="${saved ? 'Remove from saved' : 'Save package'}">
            ${saved ? '♥' : '♡'}
          </button>
        </div>
        <div class="package-content">
          <div class="package-top">
            <span class="verified">✓ Verified Operator</span>
            <div class="package-price">
              ${formatMoney(isPerPersonMode ? pkg.calculatedPerPerson : pkg.calculatedTotal)}
              <small>${isPerPersonMode ? `${formatMoney(pkg.calculatedTotal)} total for ${numAdults} adults` : `total for ${numAdults} adults (${numRooms} Room${numRooms > 1 ? 's' : ''}) · ${formatMoney(pkg.calculatedPerPerson)} p.p.`}</small>
            </div>
          </div>
          <div class="package-place">${pkg.place} · ${pkg.days}</div>
          <h2>${pkg.name}</h2>
          <p>${pkg.copy}</p>

          <!-- APM Rationale Chips -->
          <div style="background: var(--bg-subtle); padding: 8px 10px; border-radius: 6px; margin: 8px 0; font-size: 11px; color: var(--text-muted); display: flex; flex-direction: column; gap: 3px;">
            <div><strong>🚗 Logistics:</strong> ${pkg.transport.duration} (${pkg.transport.airline})</div>
            <div><strong>🌦️ Seasonality:</strong> ${pkg.season}</div>
          </div>

          <div class="tag-row">
            ${pkg.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
          <div class="package-fit">
            ${pkg.fit}
          </div>
          <div class="package-bottom">
            <span>★ ${pkg.rating} <small>(${pkg.reviewsCount} reviews)</small></span>
            <button class="view-btn" data-detail-id="${pkg.id}">See details →</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Add "Show All / Show Less" Toggle Button if more than 3 matches exist
  if (totalMatchesCount > 3) {
    html += `
      <div style="grid-column: 1 / -1; text-align: center; margin-top: 16px;">
        <button id="toggle-results-count" class="primary-button" style="margin: 0 auto; background: var(--bg-card); color: var(--primary); border: 1.5px solid var(--primary);">
          ${showAllResults ? 'Show Top 3 Curated Shortlist ↑' : `Explore All ${totalMatchesCount} Packages ↓`}
        </button>
      </div>
    `;
  }

  resultList.innerHTML = html;

  // Toggle results count button event listener
  const toggleBtn = document.getElementById('toggle-results-count');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      showAllResults = !showAllResults;
      renderResults();
    });
  }

  // Wire event listeners for Save buttons and Detail navigation
  document.querySelectorAll('[data-save-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.saveId;
      const nowSaved = toggleSaveTrip(id);
      btn.classList.toggle('saved', nowSaved);
      btn.innerHTML = nowSaved ? '♥' : '♡';
      showToast(nowSaved ? 'Package saved to your shortlist!' : 'Package removed from shortlist');
    });
  });

  document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-save-id]')) return;
      const id = card.dataset.id;
      location.href = `detail.html?id=${id}&brief=${encodeURIComponent(currentBrief)}&airport=${currentAirport}&adults=${currentAdults}&rooms=${currentRooms}&depart=${currentDepart}&duration=${currentDuration}`;
    });
  });
}

function resetFilters() {
  activeRegion = 'all';
  activeGroup = 'all';
  activeVibe = 'all';
  maxBudgetCap = 150000;
  isPerPersonMode = false;
  showAllResults = false;
  
  const slider = document.getElementById('result-range');
  if (slider) slider.value = 150;
  
  const budgetText = document.getElementById('result-budget');
  if (budgetText) budgetText.textContent = '₹150k+';

  document.querySelectorAll('.region').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.region === 'all');
  });

  document.querySelectorAll('#interest-options button').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.vibe === 'all');
  });

  renderResults();
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const parsed = parseBrief(currentBrief);
    if (parsed.budget && parsed.budget > 15000) {
      maxBudgetCap = Math.max(parsed.budget, 60000);
    }

    // Persist user context to localStorage so saved.html can display correct prices
    localStorage.setItem('tp_adults', currentAdults);
    localStorage.setItem('tp_rooms', currentRooms);

    const briefInput = document.getElementById('result-brief');
    if (briefInput) briefInput.value = currentBrief;

    const slider = document.getElementById('result-range');
    const budgetText = document.getElementById('result-budget');
    if (slider && budgetText) {
      const val = Math.min(250, Math.max(15, Math.round(maxBudgetCap / 1000)));
      slider.value = val;
      budgetText.textContent = formatMoney(maxBudgetCap);

      slider.addEventListener('input', e => {
        maxBudgetCap = Number(e.target.value) * 1000;
        budgetText.textContent = formatMoney(maxBudgetCap);
        renderResults();
      });
    }

    const modeTotal = document.getElementById('mode-total');
    const modePerson = document.getElementById('mode-person');
    if (modeTotal && modePerson) {
      modeTotal.addEventListener('click', () => {
        isPerPersonMode = false;
        modeTotal.classList.add('selected');
        modePerson.classList.remove('selected');
        renderResults();
      });
      modePerson.addEventListener('click', () => {
        isPerPersonMode = true;
        modePerson.classList.add('selected');
        modeTotal.classList.remove('selected');
        renderResults();
      });
    }

    const adultsCtrl = document.getElementById('adults-control');
    const roomsCtrl = document.getElementById('rooms-control');
    if (adultsCtrl) {
      adultsCtrl.value = currentAdults;
      adultsCtrl.addEventListener('change', e => {
        currentAdults = e.target.value;
        localStorage.setItem('tp_adults', currentAdults);
        updateHeardBanner(parsed);
        renderResults();
      });
    }
    if (roomsCtrl) {
      roomsCtrl.value = currentRooms;
      roomsCtrl.addEventListener('change', e => {
        currentRooms = e.target.value;
        localStorage.setItem('tp_rooms', currentRooms);
        updateHeardBanner(parsed);
        renderResults();
      });
    }

    document.querySelectorAll('.region').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.region').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeRegion = btn.dataset.region;
        renderResults();
      });
    });

    document.querySelectorAll('#interest-options button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#interest-options button').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        activeVibe = btn.dataset.vibe;
        renderResults();
      });
    });

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        activeSort = e.target.value;
        renderResults();
      });
    }

    const searchAgainBtn = document.getElementById('search-again');
    if (searchAgainBtn && briefInput) {
      const triggerSearch = () => {
        const newText = briefInput.value.trim();
        if (newText) {
          currentBrief = newText;
          const newParsed = parseBrief(newText);
          updateHeardBanner(newParsed);
          renderResults();
        }
      };

      searchAgainBtn.addEventListener('click', triggerSearch);
      briefInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') triggerSearch();
      });
    }

    // City pills event handlers
    document.querySelectorAll('.city-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.city-pill').forEach(b => {
          b.style.background = 'var(--bg-card)';
          b.style.color = 'var(--text-muted)';
          b.style.fontWeight = '500';
        });
        btn.style.background = 'var(--primary-light)';
        btn.style.color = 'var(--primary)';
        btn.style.fontWeight = '700';

        const city = btn.dataset.city;
        if (city === 'all') {
          currentBrief = '';
        } else {
          currentBrief = city;
        }
        if (briefInput) briefInput.value = currentBrief;
        updateHeardBanner(parseBrief(currentBrief));
        renderResults();
      });
    });

    // Clarifying question options handlers
    const optionFlight = document.getElementById('clarify-flight');
    const optionRoad = document.getElementById('clarify-road');
    if (optionFlight) {
      optionFlight.addEventListener('click', () => {
        currentBrief += ' flights included';
        if (briefInput) briefInput.value = currentBrief;
        updateHeardBanner(parseBrief(currentBrief));
        renderResults();
      });
    }
    if (optionRoad) {
      optionRoad.addEventListener('click', () => {
        currentBrief += ' road trip';
        if (briefInput) briefInput.value = currentBrief;
        updateHeardBanner(parseBrief(currentBrief));
        renderResults();
      });
    }

    updateHeardBanner(parsed);
    renderResults();
  });
}

if (typeof window !== 'undefined') {
  window.resetFilters = resetFilters;
}
