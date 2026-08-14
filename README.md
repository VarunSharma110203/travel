# Drift — exploratory travel search prototype

An interview prototype for an APM assignment: build a working exploratory search engine for first-time travel package buyers.

## Product thesis

First-time package buyers usually have a feeling, not a destination — and they expect the system to understand practical context such as “I’m in Bengaluru,” fixed dates, party size, total budget, and whether transport needs to be included. They abandon traditional OTAs when they are asked to make too many decisions before they understand the trade-offs. Drift reduces that anxiety with a compact context bar, a natural-language trip brief, a lightweight “here’s what we heard” confirmation, one high-value clarifying question, a small curated shortlist, and an all-in price breakdown.

## Screen-by-screen demo flow

1. **Landing screen** — start with the feeling, suggested briefs, trust promises, editorial inspiration, and browse-by-feeling.
2. **Results screen** — refine the brief, show “AI heard you,” region/budget controls, and curated package cards.
3. **Package detail screen** — show the sticky all-in price rail, inclusions, stay, transport, day-by-day rhythm, and feedback.
4. **Saved screen** — give users a lightweight shortlist without requiring account creation.

Try the main brief: “15–17 August from Bengaluru, 3 friends, ₹45k total, transport included, open to beach or best seasonal options.”

## MVP requirements

- Accept a free-form trip brief; destination knowledge is not required.
- Carry forward origin, fixed dates, party size, total budget, and whether transport is required.
- Use seasonality / weather / travel-time rules to suppress unrealistic recommendations and explain why.
- Translate the brief into visible, editable preference tags.
- Ask only the minimum clarifying question needed when the search is ambiguous; keep other filters optional.
- Explain recommendation rationale in plain language: match, seasonal fit, transfer friction, and budget fit.
- Return no more than three curated package options to reduce choice overload.
- Explain match relevance through vibe chips, summary copy, and match score.
- Show all-in per-person pricing and an itemized breakdown.
- Surface verified operator, reviews, inclusions, and cancellation signals.
- Let users adjust budget and filter the shortlist without restarting the search.
- Support save and hold actions as lightweight planning commitments.

## What I would validate next

- Does “here’s what we heard” increase confidence before users compare options?
- Which trust signal moves users most: all-in cost, verified operator, reviews, or cancellation?
- Does three options outperform a larger result set for first-time buyers?
- Measure brief-to-shortlist completion, time to first viable trip, shortlist interactions, package-detail opens, and hold / booking intent.

## Run locally

Open `index.html` in a browser. The prototype is deliberately dependency-free; imagery is loaded from Unsplash for presentation only.
