import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import Header from "src/components/layout/header/Header";
import { Footer } from "src/components/layout/footer/Footer";
import PlugInLogo from "../assets/icons/PlugInLogo.png";

import "./app.css";
import { useEffect, useRef } from "react";
import { ClerkProvider } from "@clerk/react";

export function Layout({ children }: { children: React.ReactNode }) {
  // hide footer when the page is loading
  const hideFooter = useRef<boolean>(false);
  useEffect(() => {
    hideFooter.current = true;
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href={PlugInLogo} />
        <title>Plug In</title>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <ClerkProvider
          publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
        >
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          {hideFooter.current ? <Footer /> : <></>}

          <ScrollRestoration />
          <Scripts />
        </ClerkProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
