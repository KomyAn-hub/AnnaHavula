async function loadProfile() {
  const sidebar = document.getElementById('profile-sidebar');
  const postsList = document.getElementById('posts-list');
  const postsCount = document.getElementById('posts-count');

  try {
    const [userRes, postsRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    ]);

    if (!userRes.ok || !postsRes.ok) throw new Error('Помилка мережі');

    const [user, posts] = await Promise.all([userRes.json(), postsRes.json()]);

    // --- Профіль ---
    const initials = user.name.split(' ').map(w => w[0]).join('').slice(0, 2);

    sidebar.innerHTML = `
      <div class="profile-card">
        <div class="avatar-band">
          <div class="avatar">${initials}</div>
        </div>
        <div class="profile-body">
          <div class="profile-name">${user.name}</div>
          <div class="profile-username">@${user.username}</div>
          <div class="profile-stat">
            <span class="icon">✉</span>
            <a href="mailto:${user.email}">${user.email}</a>
          </div>
          <div class="profile-stat">
            <span class="icon">📍</span>
            ${user.address.city}
          </div>
          <div class="profile-stat">
            <span class="icon">🌐</span>
            <a href="https://${user.website}" target="_blank">${user.website}</a>
          </div>
          <hr class="profile-divider">
          <div class="company-label">Компанія</div>
          <div class="company-name">${user.company.name}</div>
          <div class="company-phrase">"${user.company.catchPhrase}"</div>
        </div>
      </div>
    `;

    // --- Пости ---
    postsCount.textContent = posts.length + ' постів';

    postsList.innerHTML = posts.map(function(post, i) {
      return `
        <article class="post-card">
          <div class="post-title">${post.title}</div>
          <div class="post-body">${post.body}</div>
        </article>
      `;
    }).join('');

  } catch (err) {
    sidebar.innerHTML = `
      <div class="error-msg">⚠ Помилка завантаження профілю:<br><small>${err.message}</small></div>
    `;
    postsList.innerHTML = `
      <div class="error-msg">⚠ Пости недоступні.</div>
    `;
  }
}

loadProfile();