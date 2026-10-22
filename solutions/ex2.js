function ipv4Parser(ip, mask) {
  let ipParts = ip.split('.').map(Number);
  let maskParts = mask.split('.').map(Number);
  let netParts = [];
  let hostParts = [];
  for (let i = 0; i < 4; i++) {
    let net = ipParts[i] & maskParts[i];
    let host = ipParts[i] & (~maskParts[i] & 255);
    netParts.push(net);
    hostParts.push(host);
  }
  let network = netParts.join('.');
  let host = hostParts.join('.');
  return [network, host];
}