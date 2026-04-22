/**
 * A self-contained async/await example.
 * Run this directly in your console or save as a single .js file.
 */
async function runSelfContainedProcess() {
  try {
    console.log("1. Process started...");

    // This Promise is defined locally and requires no external data
    const localTask = new Promise((resolve, reject) => {
      const isSuccessful = true; // Manual toggle for testing

      // Simulate a small delay (500ms)
      setTimeout(() => {
        if (isSuccessful) {
          resolve("Internal task finished successfully.");
        } else {
          reject(new Error("The internal task failed."));
        }
      }, 500);
    });

    // 'await' waits for the local Promise to resolve
    const result = await localTask;
    console.log("2. Result:", result);

  } catch (error) {
    // Catches the error if isSuccessful is false
    console.error("2. Caught Error:", error.message);
  } finally {
    // Runs no matter what
    console.log("3. Process finalized.");
  }
}

// Execute the function
runSelfContainedProcess();