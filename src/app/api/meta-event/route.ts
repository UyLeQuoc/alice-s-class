// src/app/api/meta-event/route.ts

import { NextResponse } from 'next/server';
// Import crypto for hashing - Node.js built-in
import crypto from 'crypto';

// --- IMPORTANT: Environment Variables ---
// You MUST set these in your Vercel/hosting environment or in a .env.local file
// NEVER write your actual Access Token directly in the code!
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '996511195660551'; // Or get from your existing setup
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || 'EAAI7urIAbuwBOZBFtpJUwlbBzWzYs7ILZBihgRNVWKTfQaAD8bHZBkc3kUpPlLnCgamxxwGfv1ugnb4TZAH5tGMpveC2be9qrcy6FHM3zrk7E0uYShzZB2xGEBp0S9QzfYfCZBt8JyPNSbDcqUglnb3ZApZBs63nsXdjxz4hd58pgpGHntMNxDwjWmb7t8mpkgG6jQZDZD';

// Function to hash user data (as required by Meta)
// NOTE: This is a simplified example; review Meta's specific hashing requirements.
function hashData(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex');
}

// This function handles POST requests made to /api/meta-event
export async function POST(request: Request) {
  // --- 1. Get Data Sent From Your Form ---
  // We expect the client (your ContactForm) to send data in the request body
  let eventData;
  try {
    eventData = await request.json();
    // Example: You might send { eventName: 'Lead', name: '...', email: '...', phone: '...' }
    // from your ContactForm after successful submission to Google Sheets.
  } catch (error) {
    console.error('Error parsing request body:', error);
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }

  const { eventName, name, email, phone, // Add other relevant data you might send
          event_source_url, // You should send the URL where the event happened
        } = eventData;

  if (!eventName || !email || !phone || !name || !event_source_url) {
     return NextResponse.json({ message: 'Missing required event data' }, { status: 400 });
  }

  // --- 2. Prepare Event Payload for Meta CAPI ---
  // See Meta docs for all parameters: https://developers.facebook.com/docs/marketing-api/conversions-api/parameters
  const currentTimestamp = Math.floor(Date.now() / 1000);

  const payload = {
    "data": [
        {
            "event_name": "Purchase",
            "event_time": 1743411259,
            "action_source": "website",
            "user_data": {
                "em": [
                    "7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"
                ],
                "ph": [
                    null
                ]
            },
            "attribution_data": {
                "attribution_share": "0.3"
            },
            "custom_data": {
                "currency": "USD",
                "value": "142.52"
            },
            "original_event_data": {
                "event_name": "Purchase",
                "event_time": 1743411259
            }
        }
    ]
}

  // --- 3. Send Data to Meta ---
  const url = `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`;
  // Note: Use the latest API version (e.g., v19.0) from Meta docs

  try {
    const metaResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseData = await metaResponse.json();

    if (!metaResponse.ok) {
      console.error('Error sending event to Meta:', responseData);
      // Don't expose detailed Meta errors to the client for security
      return NextResponse.json({ message: 'Failed to send event to Meta' }, { status: 500 });
    }

    console.log('Event sent successfully to Meta:', responseData);
    // Return a success response to your ContactForm
    return NextResponse.json({ message: 'Event received and forwarded' }, { status: 200 });

  } catch (error) {
    console.error('Network or fetch error sending event to Meta:', error);
    return NextResponse.json({ message: 'Failed to send event to Meta due to network error' }, { status: 500 });
  }
}