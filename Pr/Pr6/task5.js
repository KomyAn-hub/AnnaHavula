const URLS = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
];


function fetchData(url) {
  if (Math.random() < 0.3) {
    return Promise.reject(
      new Error(`Симульована помилка для: ${url}`)
    );
  }

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${url}`);
    }
    return response.json();
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchAllData(urls) {
  console.log(`Перша спроба: ${urls.length} запитів одночасно...`);

  let results = await Promise.allSettled(urls.map(url => fetchData(url)));

  const failed = results
    .map((result, index) => ({ result, index, url: urls[index] }))
    .filter(item => item.result.status === "rejected");

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`  ✓ ${urls[index]} → OK`);
    } else {
      console.log(`  ✗ ${urls[index]} → ${result.reason?.message}`);
    }
  });

  if (failed.length > 0) {
    console.log(`\n${failed.length} запит(и) зазнали невдачі. Retry через 1 секунду...`);
    await delay(1000);

    const retryResults = await Promise.allSettled(
      failed.map(item => fetchData(item.url))
    );

    console.log("Результати retry:");
    failed.forEach((item, retryIndex) => {
      const retryResult = retryResults[retryIndex];

      results[item.index] = retryResult;

      if (retryResult.status === "fulfilled") {
        console.log(`  ✓ (retry) ${item.url} → OK`);
      } else {
        console.log(`  ✗ (retry) ${item.url} → ${retryResult.reason?.message}`);
      }
    });
  } else {
    console.log("Всі запити успішні, retry не потрібний.");
  }

  const successCount = results.filter(r => r.status === "fulfilled").length;
  console.log(`\nПідсумок: ${successCount}/${urls.length} успішно.`);

  return results;
}

(async () => {
  console.log("=== fetchAllData з retry ===\n");
  const finalResults = await fetchAllData(URLS);

  console.log("\n=== Фінальні дані ===");
  finalResults.forEach((result, index) => {
    if (result.status === "fulfilled") {
      const data = result.value;
      const preview = data.title
        ? `title: "${data.title.slice(0, 40)}..."`
        : data.name
        ? `name: "${data.name}", email: "${data.email}"`
        : JSON.stringify(data).slice(0, 60);
      console.log(`[${index}] ✓ ${preview}`);
    } else {
      console.log(`[${index}] ✗ Помилка: ${result.reason?.message}`);
    }
  });
})();