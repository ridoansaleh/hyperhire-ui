import { NextResponse } from "next/server";
import { jobs } from "./data";

export async function GET() {
  return NextResponse.json(jobs);
}
