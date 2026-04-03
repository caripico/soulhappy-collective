export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		let path = url.pathname;

		// Route to correct HTML file
		if (path === "/" || path === "/index.html") {
			path = "/index.html";
		} else if (path === "/contact" || path === "/contact.html") {
			path = "/contact.html";
		}

		// Serve static assets from the ASSETS binding
		return env.ASSETS.fetch(request);
	},
} satisfies ExportedHandler<Env>;
