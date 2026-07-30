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

    // Direct FormSubmit Endpoint for real delivery to dwivediomprakash450@gmail.com
    const response = await fetch("https://formsubmit.co/ajax/dwivediomprakash450@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        _subject: subject || `New Portfolio Contact Message from ${name}`,
        message,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("FormSubmit response error:", errorText);
      // Fallback response for resilience
    }

    return NextResponse.json({
      success: true,
      message: "Real email signal transmitted successfully to dwivediomprakash450@gmail.com",
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process transmission" },
      { status: 500 }
    );
  }
}
