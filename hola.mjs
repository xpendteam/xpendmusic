// routes: function () {
//   let dedicatedServers = servers.dedicatedServers.map(server => `/products/dedicated-servers/${server.id}`)
//   let cloudServers = servers.cloudServers.map(server => `/products/cloud-servers/${server.id}`)
//   return Promise.all([dedicatedServers, cloudServers]).then(values => {
//       return values.join().split(',');
//   })
// }