(function(){
  try {
    var pagePath = window.__page_path || '';
    var repo = window.__github_repo || '';
    if (!pagePath || !repo) return;
    var parts = repo.split('/');
    if (parts.length !== 2) return;
    var owner = parts[0], repoName = parts[1];

    var apiUrl = 'https://api.github.com/repos/' + owner + '/' + repoName + '/commits?path=' + encodeURIComponent(pagePath) + '&per_page=1';

    fetch(apiUrl, { headers: { 'Accept': 'application/vnd.github.v3+json' } })
      .then(function(res){ if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
      .then(function(data){
        if (!Array.isArray(data) || data.length === 0) return;
        var commit = data[0] && data[0].commit;
        var dateStr = (commit && commit.committer && commit.committer.date) || (commit && commit.author && commit.author.date);
        if (!dateStr) return;
        var dt = new Date(dateStr);
        function pad(n){ return n < 10 ? '0'+n : n; }
        var formatted = dt.getFullYear() + '-' + pad(dt.getMonth()+1) + '-' + pad(dt.getDate()) + ' ' + pad(dt.getHours()) + ':' + pad(dt.getMinutes());
        var el = document.getElementById('js-last-modified-value');
        if (el){ el.textContent = formatted; var container = document.getElementById('js-last-modified'); if (container) container.style.display = 'block'; }
      })
      .catch(function(err){
        // fail silently — do not break site
        console.debug('last-modified:', err && err.message);
      });
  } catch(e) { console.debug(e && e.message); }
})();