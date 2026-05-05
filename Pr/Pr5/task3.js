async function loadPosts() {
  const status = document.getElementById('status');
  const container = document.getElementById('posts-container');

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`HTTP помилка: ${response.status}`);
    }

    const posts = await response.json();

    status.style.display = 'none';

    container.innerHTML = `<div class="count-bar">Знайдено ${posts.length} публікацій</div>
      <div class="posts-grid">
        ${posts.map((post, i) => `
          <article class="post" style="animation-delay:${Math.min(i * 0.03, 0.8)}s">
            <div class="post-num">${String(post.id).padStart(2, '0')}</div>
            <div class="post-content">
              <h2 class="post-title">${post.title}</h2>
              <p class="post-body">${post.body}</p>
            </div>
          </article>
        `).join('')}
      </div>`;

  } catch (error) {
    status.style.display = 'none';
    container.innerHTML = `
      <div class="error-box">
        ⚠ Не вдалося завантажити пости.<br>
        <small style="opacity:0.7;margin-top:0.4rem;display:block;">${error.message}</small>
      </div>`;
  }
}

loadPosts();