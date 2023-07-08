import type { V2_MetaFunction } from "@vercel/remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStyles from "./tailwind.css"

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
    { 
      rel: "preconnect", 
      href: "//fonts.gstatic.com", 
      crossOrigin: "anonymous" 
    },
    { 
      rel: "preload", 
      as: "style",
      href: tailwindStyles 
    },
    {
      rel: 'manifest', 
      href: '/site.webmanifest'
    },
    { 
      rel: 'icon', 
      href: '/favicon.ico'
    },
    { 
      rel: "stylesheet", 
      href: tailwindStyles 
    },
  ]
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Roger Stringer" },
    {
      property: "og:title",
      content: "Roger Stringer",
    },
    {
      name: "description",
      content: "",
    },
  ];
};

const Plausible = () => {
  return (
    <>
        <script 
          defer 
          data-domain="rser.me" 
          src="/stats/js/script.js"
          data-api="/stats/api/event"></script>
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-mirage-400 pb-20">
        <Outlet />
        <ScrollRestoration />
        <Plausible />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
