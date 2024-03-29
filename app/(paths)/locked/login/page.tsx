import AuthForm from "./auth-form";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/supabase/database.types";

export default async function Page() {
  return (
    <main className="mx-3 my-4 flex flex-grow flex-col">
      <div className="mx-auto flex max-w-2xl flex-grow flex-col">
        <div className="text-sm">
          This sign-in page is slightly broken. After a successful sign-in, it
          WON'T automatically redirect you. Click the 'LOCKED' tab once more
          after clicking the 'Sign in'. 
          
          Sign-ups are closed.
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
