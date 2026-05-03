let tasks = JSON.parse(localStorage.getItem('rainbowTasks') || '[]');
let filter = 'all';
let editId = null;

document.getElementById('taskDate').min = new Date().toISOString().split('T')[0];
document.getElementById('editDate').min = new Date().toISOString().split('T')[0];

function save() { localStorage.setItem('rainbowTasks', JSON.stringify(tasks)); }

function addTask() {split('T')[0];
  const name = document.getElementById('taskInput').value.trim();
  if (!name) { document.getElementById('taskInput').focus(); return; }
  tasks.unshift({
    id: Date.now(), name,
    date: document.getElementById('taskDate').value,
    priority: document.getElementById('taskPriority').value,
    done: false, added: Date.now()
  })
  document.getElementById('taskInput').value = '';
  document.getElementById('taskDate').value = '';
  document.getElementById('taskPriority').value = 'medium';
  save(); render();
}

document.getElementById('taskInput').addEventListener('keydown', e => { if(e.key==='Enter') addTask(); });

function toggleDone(id) {
  const t = tasks.find(t=>t.id===id);
  if(t) { t.done = !t.done; save(); render(); }
}

function deleteTask(id) {
  tasks = tasks.filter(t=>t.id!==id); save(); render();
}

function openEdit(id) {
  const t = tasks.find(t=>t.id===id);
  if(!t) return;
  editId = id;
  document.getElementById('editName').value = t.name;
  document.getElementById('editDate').value = t.date || '';
  document.getElementById('editPriority').value = t.priority;
  document.getElementById('modalOverlay').classList.remove('hidden');
}

function saveEdit() {
  const t = tasks.find(t=>t.id===editId);
  if(!t) return;
  t.name = document.getElementById('editName').value.trim() || t.name;
  t.date = document.getElementById('editDate').value;
  t.priority = document.getElementById('editPriority').value;
  save(); render(); closeModal();
}

function closeModal() { document.getElementById('modalOverlay').classList.add('hidden'); editId=null; }
document.getElementById('modalOverlay').addEventListener('click', e=>{ if(e.target===e.currentTarget) closeModal(); });

function setFilter(f, btn) {
  filter = f;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

function deadlineClass(dateStr) {
  if(!dateStr) return '';
  const d = new Date(dateStr), now = new Date(); now.setHours(0,0,0,0); d.setHours(0,0,0,0);
  const diff = (d-now)/(1000*60*60*24);
  if(diff < 0) return 'deadline-late';
  if(diff <= 2) return 'deadline-soon';
  return 'deadline-ok';
}
function deadlineEmoji(dateStr) {
  const c = deadlineClass(dateStr);
  return c==='deadline-late'?'❗':c==='deadline-soon'?'⏳':'📅';
}
function formatDate(dateStr) {
  if(!dateStr) return '';
  const [y,m,d] = dateStr.split('-');
  return `${d}.${m}.${y}`;
}
function priorityOrder(p) { return p==='high'?0:p==='medium'?1:2; }

function getSorted(list) {
  const sort = document.getElementById('sortSelect').value;
  return [...list].sort((a,b)=>{
    if(sort==='priority') return priorityOrder(a.priority)-priorityOrder(b.priority);
    if(sort==='date') {
      if(!a.date&&!b.date) return 0;
      if(!a.date) return 1; if(!b.date) return -1;
      return new Date(a.date)-new Date(b.date);
    }
    return b.added - a.added;
  });
}

function render() {
  const filtered = tasks.filter(t => filter==='all'?true:filter==='done'?t.done:!t.done);
  const sorted = getSorted(filtered);

  document.getElementById('stat-total').textContent = `📋 Всього: ${tasks.length}`;
  document.getElementById('stat-done').textContent = `✅ Виконано: ${tasks.filter(t=>t.done).length}`;
  document.getElementById('stat-active').textContent = `🔥 Активних: ${tasks.filter(t=>!t.done).length}`;

  const list = document.getElementById('tasksList');
  if(!sorted.length) {
    list.innerHTML = `<div class="empty">Тут ще немає завдань!<br>Додай своє перше ✨</div>`;
    return;
  }

  const priorityLabel = {high:'Високий',medium:'Середній',low:'Низький'};
  const priorityBadge = {high:'badge-high',medium:'badge-medium',low:'badge-low'};

  list.innerHTML = sorted.map(t => `
    <div class="task-item p-${t.priority} ${t.done?'done':''}" id="item-${t.id}">
      <div class="task-check" onclick="toggleDone(${t.id})">${t.done?'✓':''}</div>
      <div class="task-info">
        <span class="task-name">${escHtml(t.name)}</span>
        <div class="task-meta">
          ${t.date?`<span class="task-deadline ${deadlineClass(t.date)}">${deadlineEmoji(t.date)} ${formatDate(t.date)}</span>`:''}
          <span class="priority-badge ${priorityBadge[t.priority]}">${priorityLabel[t.priority]}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="action-btn edit-btn" onclick="openEdit(${t.id})" title="Редагувати">✏️</button>
        <button class="action-btn delete-btn" onclick="deleteTask(${t.id})" title="Видалити">🗑️</button>
      </div>
    </div>
  `).join('');
}

function escHtml(s) { const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }

render();
