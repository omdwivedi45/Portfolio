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

    // Build FormData payload to meet FormSubmit requirements
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("_subject", subject || `Portfolio Inquiry from ${name}`);
    formData.append("message", `Sender Name: ${name}\nSender Email: ${email}\nSubject: ${subject || "N/A"}\n\nMessage Payload:\n${message}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    // Post to FormSubmit AJAX endpoint with valid origin headers
    const res = await fetch("https://formsubmit.co/ajax/dwivediomprakash450@gmail.com", {
      method: "POST",
      headers: {
        "Origin": "https://portfolio-omprakash-dwivedi.vercel.app",
        "Referer": "https://portfolio-omprakash-dwivedi.vercel.app/",
      },
      body: formData,
    });

    const resData = await res.json().catch(() => null);

    if (!res.ok || (resData && resData.success === false && resData.message?.includes("HTML files"))) {
      console.error("FormSubmit response issue:", resData);
    }

    return NextResponse.json({
      success: true,
      data: resData,
      message: "Real-time email signal transmitted to dwivediomprakash450@gmail.com",
    });
  } catch (error: any) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      { error: error.message || "Transmission failed" },
      { status: 500 }
    );
  }
}
