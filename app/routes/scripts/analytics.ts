/*
Used to load plausible in the window
*/

import { LoaderArgs } from "@remix-run/server-runtime";

export let loader = async ({request}: LoaderArgs) => {
  let script = "window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}"
  return new Response(script, {
    headers: {
      "Content-Type": "text/javascript",
    },
  });
};