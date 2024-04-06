import os from "os";

// Get the operating system platform
const platform = os.platform();
console.log("Platform:", platform);

// Get the CPU architecture
const arch = os.arch();
console.log("Architecture:", arch);

// Get the number of CPU cores
const cpus = os.cpus();
console.log("CPU Cores:", cpus.length);

// Get total system memory
const totalMemory = os.totalmem();
console.log(
  "Total Memory:",
  (totalMemory / (1024 * 1024 * 1024)).toFixed(2),
  "GB"
);

// Get free system memory
const freeMemory = os.freemem();
console.log(
  "Free Memory:",
  (freeMemory / (1024 * 1024 * 1024)).toFixed(2),
  "GB"
);

// Get the user's home directory
const homeDirectory = os.homedir();
console.log("Home Directory:", homeDirectory);

// Get the current user's username
const username = os.userInfo().username;
console.log("Username:", username);

// Get the system uptime
const uptime = os.uptime();
console.log("Uptime:", uptime, "seconds");

// Get the hostname of the operating system
const hostname = os.hostname();
console.log("Hostname:", hostname);

// Get the network interfaces
const networkInterfaces = os.networkInterfaces();
console.log("Network Interfaces:", networkInterfaces);

// Get the endianness of the CPU
const endianness = os.endianness();
console.log("Endianness:", endianness);

// Get the load average
const loadAverage = os.loadavg();
console.log("Load Average (1 minute):", loadAverage[0]);
console.log("Load Average (5 minutes):", loadAverage[1]);
console.log("Load Average (15 minutes):", loadAverage[2]);

// Get the temporary directory
const tempDirectory = os.tmpdir();
console.log("Temporary Directory:", tempDirectory);

// Get the path delimiter
const pathDelimiter = os.delimiter;
console.log("Path Delimiter:", pathDelimiter);

// Get the newline character sequence
const newline = os.EOL;
console.log("Newline Character Sequence:", newline);
