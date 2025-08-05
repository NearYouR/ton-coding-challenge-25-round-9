export function main(ctx: TolkBuilder) {
  const current = ctx.uint("current", 0n);

  ctx.external("Inc", (msg) => {
    const delta = msg.body.uint(32);
    current.set(current.get() + delta);
  });

  ctx.external("Sub", (msg) => {
    const delta = msg.body.uint(32);
    current.set(current.get() - delta);
  });

  ctx.getter("Fetch", () => {
    return current.get();
  });
}
