import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, description, timeToCall } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be less than 100 characters' },
        { status: 400 }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        { error: 'Email must be less than 254 characters' },
        { status: 400 }
      );
    }

    if (phone.length > 20) {
      return NextResponse.json(
        { error: 'Phone number must be less than 20 characters' },
        { status: 400 }
      );
    }

    if (description && description.length > 1000) {
      return NextResponse.json(
        { error: 'Description must be less than 1000 characters' },
        { status: 400 }
      );
    }

    if (timeToCall && timeToCall.length > 200) {
      return NextResponse.json(
        { error: 'Time to call must be less than 200 characters' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation for Bulgarian numbers)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Sanitize inputs (trim whitespace)
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedPhone = phone.trim();
    const sanitizedDescription = description ? description.trim() : '';
    const sanitizedTimeToCall = timeToCall ? timeToCall.trim() : '';

    // Prepare data for .NET service
    const emailData = {
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone, 
      content: sanitizedDescription,
      ttc: sanitizedTimeToCall
    };

    // Call the .NET service
    const dotNetServiceUrl = 'https://vitelink-faarhndxgahvefeb.italynorth-01.azurewebsites.net';
    const response = await fetch(`${dotNetServiceUrl}/api/ExternalEmail/it-nastavnik/sendmail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      console.error('Failed to send email via .NET service:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      );
    }

    // Log successful submission
    console.log('Contact form submitted successfully:', {
      name,
      email,
      phone,
      description,
      timeToCall,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
