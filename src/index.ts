const dxos = require("@dxos/client");

async function run() {
  const client = new dxos.Client();
  await client.initialize();
  // ensure an identity exists:
  if (!client.halo.identity.get()) await client.halo.createIdentity();
  // create a space:
  const space = await client.spaces.create();
}

// ...
run();