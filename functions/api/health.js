export async function onRequest() {
  return new Response(
    JSON.stringify({
      status: "ok",
      app: "AI Marketing Studio"
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
