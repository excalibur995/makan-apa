import Layout from "layout/Layout";
import Seo from "layout/Seo";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import { trpc } from "../utils/trpc";
import "styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Seo>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Seo>
    </SessionContextProvider>
  );
}
export default trpc.withTRPC(MyApp);
