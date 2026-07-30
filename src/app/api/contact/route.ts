import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      _subject: subject || `Portfolio Inquiry from ${name}`,
      message: `Sender Name: ${name}\nSender Email: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
      _template: "table",
      _captcha: "false",
    };

    // Primary Service: FormSubmit AJAX endpoint for dwivediomprakash450@gmail.com
    const res = await fetch("https://formsubmit.co/ajax/dwivediomprakash450@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const resData = await res.json().catch(() => null);

    return NextResponse.json({
      success: true,
      data: resData,
      message: "Email signal transmitted to dwivediomprakash450@gmail.com",
    });
  } catch (error: any) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      { error: error.message || "Transmission failed" },
      { status: 500 }
    );
  }
}
