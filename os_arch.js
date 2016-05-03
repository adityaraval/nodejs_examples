//file name: node_os_interface.js
var os = require('os');

console.log("OS Temp Dir: " + os.tmpdir());
console.log("CPU is BigEndian(BE) or LittleEndian(LE): " + os.endianness());
console.log("OS Hostname: " + os.hostname());
console.log("OS Type: " + os.type());
console.log("OS Platform: " + os.platform());
console.log("OS CPU Architecture: " + os.arch());
console.log("OS Release: " + os.release());
console.log("OS Uptime (seconds): " + os.uptime());
console.log("OS load average (Returns 0,0,0 in windows): " + os.loadavg());
console.log("Total RAM (mb): " + (os.totalmem()/1024)/1024);
console.log("Free RAM (mb): " + (os.freemem()/1024)/1024)
var cpus = os.cpus();
console.log("CPU Information: " + JSON.stringify(cpus, null, 2));
console.log("Network Interfaces: " + JSON.stringify(os.networkInterfaces(), null, 2));
console.log("EOL Marker for OS: " + os.EOL);
