import AuthForm from "./auth-form";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/supabase/database.types";

export default async function Page() {
  return (
    <main className="mx-3 my-4 flex flex-grow flex-col">
      <div className="flex max-w-2xl flex-grow flex-col">
        <div>
          Sign in using a link sent to your email address. Sign-ups are closed
          (contact me).
        </div>
        <div className="my-4 flex flex-grow flex-col justify-around">
          <div>
            <AuthForm />
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
