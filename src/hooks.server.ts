export const handle = async ({ event, resolve }) => {
    const response = await resolve(event, {
      // Add your Umami domain to script-src
      csp: {
        directives: {
          'script-src': [
            "'self'",
            'https://myumani8.voicewave.uk' // ← Your Umami domain
          ],
        },
      },
    });
    return response;
  };
  