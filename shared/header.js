(function(){
  const mountId = 'site-header';
  const mount = document.getElementById(mountId);
  if(!mount){ return; }
  function applyStyles(){
    if(document.querySelector('link[data-shared-header]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'shared/header.css';
    link.setAttribute('data-shared-header','true');
    document.head.appendChild(link);
  }
  // 直接内联头部HTML，避免本地环境下fetch受限
  const headerHTML = 
    '<header class="site-header">\n' +
    '  <div class="nav-container">\n' +
    '    <div class="brand"><a href="index.html">学园偶像大师汉化</a></div>\n' +
    '    <nav class="nav-links">\n' +
    '      <a href="#intro">介绍</a>\n' +
    '      <a href="#download">下载</a>\n' +
    '      <a href="#qa">Q&A</a>\n' +
    '      <a href="#community">交流</a>\n' +
    '    </nav>\n' +
    '  </div>\n' +
    '</header>';

  mount.innerHTML = headerHTML;
  applyStyles();
  // 为正文添加顶部内边距，避免固定头部遮挡内容
  const headerEl = mount.querySelector('.site-header');
  function adjustBodyPadding(){
    const h = headerEl ? headerEl.offsetHeight : 60;
    document.body.style.paddingTop = h + 'px';
  }
  adjustBodyPadding();
  window.addEventListener('resize', adjustBodyPadding);
})();
