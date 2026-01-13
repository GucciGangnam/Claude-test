import localtunnel from 'localtunnel';

(async () => {
  const tunnel = await localtunnel({ port: 5173 });

  console.log('\n=================================');
  console.log('Your app is now accessible at:');
  console.log(tunnel.url);
  console.log('=================================\n');

  tunnel.on('close', () => {
    console.log('Tunnel closed');
  });

  // Keep the process running
  process.stdin.resume();
})();
