function fetchWithTimeout(url, timeout) {
  const fetchPromise = fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${url}`);
    }
    return response.json();
  });

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timeout")), timeout)
  );

  return Promise.race([fetchPromise, timeoutPromise]);
}
 
async function fetchMultiple(timeoutMs = 3000) {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/users/1",
  ];

  const promises = urls.map(url => fetchWithTimeout(url, timeoutMs));
  const results  = await Promise.allSettled(promises);

  return results.map((result, index) => {
    if (result.status === "fulfilled") {
      return {
        url: urls[index],
        status: "success",
        data: result.value,
      };
    } else {
      const message = result.reason?.message || "Unknown error";
      return {
        url: urls[index],
        status: "error",
        error: message.includes("timeout") ? "Request timeout" : message,
      };
    }
  });
}

(async () => {
  console.log(" Запит із нормальним таймаутом (3000 мс)");
  const normalResults = await fetchMultiple(3000);
  normalResults.forEach(r => {
    if (r.status === "success") {
      console.log(`✓ ${r.url}`);
      console.log("  Дані🤷‍♂️:", r.data);
    } else {
      console.log(`✗ ${r.url} → ${r.error}`);
    }
  });

  console.log("\nАпаздавші🛀 (50мс)");
  const timeoutResults = await fetchMultiple(50);
  timeoutResults.forEach(r => {
    if (r.status === "success") {
      console.log(`✓ ${r.url}`);
      console.log("  Дані:", r.data);
    } else {
      console.log(`✗ ${r.url} → ${r.error}`);
    }
  });
})();