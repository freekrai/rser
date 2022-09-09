import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStyles from "./styles/global.css"

export let links = () => {
  return [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicons/favicon-16x16.png',
    },
    { rel: "preconnect", href: "//fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "preload", as: "style",href: tailwindStyles },    
    {rel: 'manifest', href: '/site.webmanifest'},
    {rel: 'icon', href: '/favicon.ico'},
    { rel: "stylesheet", href: tailwindStyles },
  ]
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Roger Stringer",
  viewport: "width=device-width,initial-scale=1",
});

const Plausible = () => {
  return (
    <>
        <script defer data-domain="rser.me" src="https://pa.devsites.me/js/plausible.js"></script>
        <script
          async
          id="plausible-init"
          dangerouslySetInnerHTML={{
            __html: `
            window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}
          `,
          }}
        />
    </>
  )
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-blue-50">
        <Outlet />
        <ScrollRestoration />
        <Plausible />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
