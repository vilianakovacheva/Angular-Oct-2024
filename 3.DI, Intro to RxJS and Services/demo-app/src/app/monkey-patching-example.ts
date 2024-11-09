// How Zone.js notifies Angular for async requests

// Async - SetTimeout, SetInterval, Async Pipe, API Calls, Click event

// Standard console.log
console.log(123);

// Monkey patched console.log
const originalConsoleLog = console.log;

console.log = (...args) => {
  originalConsoleLog(...args); // invokes the original copy

  // Additional logic
  // Notify Angular to detect changes
  console.warn('Notify Angular to render');
  // notifyAngularToDetectChanges()
}

console.log(3456);