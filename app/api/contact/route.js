import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contactSchema";

export async function POST(request) {
  try {
    const body = await request.json();

    const validatedData = contactSchema.parse(body);

    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to process your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
