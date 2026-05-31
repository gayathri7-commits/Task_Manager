const COLS = ['todo', 'inprog', 'done'];
const COL_LABELS = { todo: 'Todo', inprog: 'In Progress', done: 'Done' };
const COL_BADGE_CLASS = { todo: 'col-badge-todo', inprog: 'col-badge-inprog', done: 'col-badge-done' };

let tasks = [
  { id: 1, title: 'Eat', desc: 'Eat well', col: 'todo' },
  { id: 2, title: 'Drink', desc: 'Drink water', col: 'inprog' },
  { id: 3, title: 'Run daily', desc: 'Run for 5 hours', col: 'done' }
];
let nextId = 4;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'screenDash') renderBoard();
}

function addTask() {
  const inp = document.getElementById('newTaskTitle');
  const title = inp.value.trim();
  if (!title) return;
  tasks.push({ id: nextId++, title, desc: '', col: 'todo' });
  inp.value = '';
  renderBoard();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderBoard();
}

function moveTask(id, dir) {
  const t = tasks.find(t => t.id === id);
  if (!t) return;
  const idx = COLS.indexOf(t.col);
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= COLS.length) return;
  t.col = COLS[newIdx];
  renderBoard();
}

function renderBoard() {
  const board = document.getElementById('kanbanBoard');
  if (!board) return; // Guard clause in case element isn't present
  
  board.innerHTML = '';
  COLS.forEach(col => {
    const colTasks = tasks.filter(t => t.col === col);
    const div = document.createElement('div');
    div.className = `col col-${col}`;
    const badgeClass = COL_BADGE_CLASS[col];
    
    div.innerHTML = `
      <div class="col-head">
        <span class="col-title">${COL_LABELS[col]}</span>
        <span class="col-badge ${badgeClass}">${colTasks.length}</span>
      </div>
      <div class="col-body" id="col-${col}">
        ${colTasks.length === 0 ? '<div class="empty-col">No tasks yet</div>' : ''}
        ${colTasks.map(t => `
          <div class="task-card" id="task-${t.id}">
            <div class="task-title">${escHtml(t.title)}</div>
            ${t.desc ? `<div class="task-desc">${escHtml(t.desc)}</div>` : ''}
            <div class="task-actions">
              <button class="arrow-btn" title="Move left" onclick="moveTask(${t.id},-1)">
                <svg viewBox="0 0 16 16"><polyline points="10 4 6 8 10 12"/></svg>
              </button>
              <button class="delete-btn" onclick="deleteTask(${t.id})">Delete</button>
              <button class="arrow-btn" title="Move right" onclick="moveTask(${t.id},1)">
                <svg viewBox="0 0 16 16"><polyline points="6 4 10 8 6 12"/></svg>
              </button>
            </div>
          </div>
        `).join('')}
      </div>`;
    board.appendChild(div);
  });
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Initial paint of the board
renderBoard();