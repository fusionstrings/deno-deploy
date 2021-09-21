async function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);

  // This is how the proxy works:
  // 1. A request comes in for a specific asset.
  // 2. We construct a URL to that asset.
  // 3. We fetch the asset and respond to the request.

  // Check if the request is for style.css.
  if (pathname.startsWith("/css")) {
    const file = await Deno.readFile(staticFile);

		// Respond to the request with the static file.
		return new Response(file, {
			headers: {
				"content-type": "text/css; charset=utf-8"
			},
		});
  }

  return new Response(
    `<html>
      <head>
        <link rel="stylesheet" href="css/style.css" />
      </head>
      <body>
        <h1>Deno Deploy Dev Container</h1>
        Pathname: ${pathname}<br> 
        import.meta.url: ${import.meta.url}<br> 
        headers: ${JSON.stringify(Object.fromEntries(request.headers), null, 2)}
        </main>
      </body>
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});

