import dns from "dns/promises";

const records = await dns.resolveSrv(
  "_mongodb._tcp.cluster0.yvxp8il.mongodb.net"
);

console.log(records);