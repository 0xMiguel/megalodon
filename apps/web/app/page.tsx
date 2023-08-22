import { Button, Header } from "ui";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Page() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Header text="Web" />
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <span>Hey, {user.email}!</span>
          <button>logout</button>
        </div>
      ) : (
        <Link
          href="/login"
          className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Login
        </Link>
      )}
    </>
  );
}
