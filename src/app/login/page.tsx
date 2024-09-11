import { auth } from "@/auth";
import React from "react";

export default async function LoginPage() {
  const session = await auth();
  return <div>page</div>;
}
