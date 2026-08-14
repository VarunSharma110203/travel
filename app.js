// App logic for Landing Page (index.html)

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const airportNames = {
  BLR: 'Bengaluru Intl',
  DEL: 'Delhi Intl',
  BOM: 'Mumbai Intl',
  HYD: 'Hyderabad',
  MAA: 'Chennai'
};

const prompts = {
  beach: '3 friends, ₹45k total, quiet beach package with travel included',
  mountains: 'A first-time mountain trip to Himachal with scenic views, gentle activities and a cosy pine chalet',
  international: 'An easy first international trip to Bali under ₹1 lakh, with flights, pool villa and stays included',
  food: 'A colourful food and culture weekender to Pondicherry with French Quarter bakery breakfast',
  culture: 'A relaxed 5-day Rajasthan culture trip to Jaipur and Udaipur with fort tours and lake boat rides',
  island: 'An island trip to Andaman with crystal waters, coral snorkelling and a beachfront resort stay',
  slow: 'A slow, scenic Kerala backwaters houseboat escape with serene waters and no rushed transfers'
};

/** Format a Date into "15 Aug" style */
function formatDate(d) {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

/** Get depart date from picker — fallback to next Friday */
function getDepartDate() {
  const picker = $('#depart-date');
  if (picker && picker.value) {
    // picker.value is "YYYY-MM-DD"
    const [y, m, d] = picker.value.split('-').map(Number);
    return new Date(y, m - 1, d);
  }
  // Default: next Friday
  const today = new Date();
  const daysToFri = (5 - today.getDay() + 7) % 7 || 7;
  const fri = new Date(today);
  fri.setDate(today.getDate() + daysToFri);
  return fri;
}

function submitBrief() {
  const airport  = $('#airport-select')  ? $('#airport-select').value  : 'BLR';
  const mode     = $('#travel-mode')     ? $('#travel-mode').value     : 'flights';
  const adults   = $('#adults-select')   ? $('#adults-select').value   : '2';
  const rooms    = $('#rooms-select')    ? $('#rooms-select').value    : '1';
  const duration = $('#trip-duration')   ? $('#trip-duration').value   : '5';

  const depart = getDepartDate();
  const returnDate = new Date(depart);
  returnDate.setDate(depart.getDate() + Number(duration));
  const dateStr = `${formatDate(depart)}–${formatDate(returnDate)}`;

  let brief = $('#brief') ? $('#brief').value.trim() : '';

  // If the brief has no date-like content, prepend the structured date
  const hasDate = /\b\d{1,2}\s*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\-|–|to)\b/i.test(brief);
  if (!brief) {
    brief = `${dateStr}, 3 friends, ₹45k total, open to beach or best seasonal options`;
  } else if (!hasDate) {
    brief = `${dateStr}, ${brief}`;
  }

  location.href = `results.html?brief=${encodeURIComponent(brief)}&airport=${airport}&mode=${mode}&adults=${adults}&rooms=${rooms}&depart=${depart.toISOString().slice(0,10)}&duration=${duration}`;
}


if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const briefTextarea = $('#brief');
    const briefCount = $('#brief-count');
    const tripForm = $('#trip-form');
    const departPicker = $('#depart-date');

    // Set default departure date to next Friday
    if (departPicker && !departPicker.value) {
      const fri = getDepartDate();
      // Format as YYYY-MM-DD for the input value
      departPicker.value = fri.toISOString().slice(0, 10);
    }

    if (briefTextarea && briefCount) {
      briefTextarea.addEventListener('input', e => {
        briefCount.textContent = `${e.target.value.length}/500`;
      });
    }

    if (tripForm) {
      tripForm.addEventListener('submit', e => {
        e.preventDefault();
        submitBrief();
      });
    }

    $$('[data-suggestion]').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.suggestion;
        if (prompts[type] && briefTextarea) {
          briefTextarea.value = prompts[type];
          if (briefCount) briefCount.textContent = `${prompts[type].length}/500`;
          submitBrief();
        }
      });
    });
  });
}
