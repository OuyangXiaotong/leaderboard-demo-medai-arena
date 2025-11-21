async function loadModels() {
  const res = await fetch('data/models.json');
  const models = await res.json();
  return models;
}

function renderTable(models) {
  const tbody = document.getElementById('models-tbody');
  tbody.innerHTML = '';
  models.forEach(m => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${m.name}</td>
      <td>${m.type}</td>
      <td>${m.elo}</td>
      <td>${m.organization}</td>
      <td><button class="btn-detail" data-id="${m.id}">详情</button></td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const models = await loadModels();
  renderTable(models);
  // 绑定排序、搜索、detail modal 等事件
});
