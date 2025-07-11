import type { NextApiRequest, NextApiResponse } from "next";
import type { SignupPayload, SignupResponse } from "../../types/signup";

const subscribers: SignupPayload[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignupResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }
  const { name, email } = req.body as SignupPayload;
  if (!email || typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    res.status(400).json({ error: "Invalid email" });
    return;
  }
  subscribers.push({ name, email });
  // Store in-memory only; in real life, send to DB or CRM
  console.log("[SignUp] New subscriber:", { name, email });
  res.status(201).json({ success: true });
}
