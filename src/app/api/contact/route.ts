import { NextRequest, NextResponse } from "next/server";
import { insertContactSchema } from "@/lib/schema";
import { z } from "zod";
import { randomUUID } from "crypto";

const contactSubmissions: Map<string, {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: Date;
}> = new Map();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertContactSchema.parse(body);

    const id = randomUUID();
    const submission = {
      ...validatedData,
      id,
      createdAt: new Date(),
    };
    contactSubmissions.set(id, submission);

    console.log("New contact submission received:", {
      id: submission.id,
      name: `${submission.firstName} ${submission.lastName}`,
      email: submission.email,
      phone: submission.phone,
      service: submission.service,
      createdAt: submission.createdAt,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! We'll be in touch within 24 hours.",
      id: submission.id,
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: "Validation failed",
        errors: error.errors,
      }, { status: 400 });
    }
    console.error("Contact form error:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred. Please try again later.",
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const submissions = Array.from(contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
    return NextResponse.json(submissions);
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while fetching submissions.",
    }, { status: 500 });
  }
}
