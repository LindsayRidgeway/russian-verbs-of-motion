// Main data loader for Russian Verbs of Motion Practice App
// This file coordinates loading of individual prefix modules

let verbData = [];
let availablePrefixes = [];

// Define all available prefix modules
const prefixModules = [
  { 
    prefix: "", 
    name: "(basic forms)", 
    file: "unprefixed-motion.js",
    loaded: false,
    data: null
  },
  { 
    prefix: "у", 
    name: "у-", 
    file: "u-prefix-motion.js",
    loaded: false,
    data: null
  },
  { 
    prefix: "при", 
    name: "при-", 
    file: "pri-prefix-motion.js",
    loaded: false,
    data: null
  },
  { 
    prefix: "по", 
    name: "по-", 
    file: "po-prefix-motion.js",
    loaded: false,
    data: null
  },
  { 
    prefix: "в", 
    name: "в-", 
    file: "v-prefix-motion.js",
    loaded: false,
    data: null
  },
  { 
    prefix: "вы", 
    name: "вы-", 
    file: "vy-prefix-motion.js",
    loaded: false,
    data: null
  },
  { 
    prefix: "до", 
    name: "до-", 
    file: "do-prefix-motion.js",
    loaded: false,
    data: null
  },
  { 
    prefix: "за", 
    name: "за-", 
    file: "za-prefix-motion.js",
    loaded: false,
    data: null
  },
  { 
    prefix: "про", 
    name: "про-", 
    file: "pro-prefix-motion.js",
    loaded: false,
    data: null
  },
  { 
    prefix: "от", 
    name: "от-", 
    file: "ot-prefix-motion.js",
    loaded: false,
    data: null
  }
];

// Function to load a specific prefix module
async function loadPrefixModule(prefix) {
  const module = prefixModules.find(m => m.prefix === prefix);
  if (!module) {
    console.error(`Unknown prefix: ${prefix}`);
    return null;
  }

  if (module.loaded) {
    return module.data;
  }

  try {
    // Create a script element to load the module
    const script = document.createElement('script');
    script.src = `motion-verbs-data/${module.file}`;
    
    // Return a promise that resolves when the script loads
    return new Promise((resolve, reject) => {
      script.onload = () => {
        // Each module will set a global variable with its data
        const globalVarName = `${prefix || 'unprefixed'}MotionData`;
        if (window[globalVarName]) {
          module.data = window[globalVarName];
          module.loaded = true;
          resolve(module.data);
        } else {
          reject(new Error(`Module ${module.file} did not set expected global variable ${globalVarName}`));
        }
      };
      
      script.onerror = () => {
        reject(new Error(`Failed to load ${module.file}`));
      };
      
      document.head.appendChild(script);
    });
  } catch (error) {
    console.error(`Error loading prefix module ${prefix}:`, error);
    return null;
  }
}

// Function to load multiple prefix modules
async function loadSelectedPrefixes(selectedPrefixes) {
  verbData = []; // Clear existing data
  
  const loadPromises = selectedPrefixes.map(async (prefix) => {
    try {
      const data = await loadPrefixModule(prefix);
      if (data) {
        verbData.push(data);
      }
    } catch (error) {
      console.error(`Failed to load prefix ${prefix}:`, error);
    }
  });

  await Promise.all(loadPromises);
  return verbData;
}

// Function to get list of available prefixes (for UI building)
function getAvailablePrefixes() {
  return prefixModules.map(m => ({
    prefix: m.prefix,
    name: m.name,
    loaded: m.loaded
  }));
}

// Function to check if a prefix is loaded
function isPrefixLoaded(prefix) {
  const module = prefixModules.find(m => m.prefix === prefix);
  return module ? module.loaded : false;
}

// Function to get loaded data for a specific prefix
function getPrefixData(prefix) {
  const module = prefixModules.find(m => m.prefix === prefix);
  return module && module.loaded ? module.data : null;
}

// Initialize available prefixes list
availablePrefixes = getAvailablePrefixes();