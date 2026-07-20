const DATA=window.RESOURCE_DATA||[],view=document.body.dataset.view||"none";
const list=document.getElementById("resource-list"),search=document.getElementById("site-search"),count=document.getElementById("result-count");
let grade="all";
const esc=s=>String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
function inView(r){return view==="all"||((r.categories||[]).includes(view));}
function render(){
 if(!list)return;
 const q=(search?.value||"").toLowerCase().trim();
 let rows=DATA.filter(inView);
 if(grade!=="all")rows=rows.filter(r=>(r.evidence||"").startsWith(grade));
 if(q)rows=rows.filter(r=>JSON.stringify(r).toLowerCase().includes(q));
 rows.sort((a,b)=>(b.year-a.year)||a.title.localeCompare(b.title));
 count.textContent=`${rows.length} item${rows.length===1?"":"s"}`;
 list.innerHTML=rows.length?rows.map(r=>`<article class="card"><div class="card-top"><div><h3>${esc(r.title)}</h3><div class="meta">${r.year} · ${esc(r.venue)} · ${esc(r.kind)}</div></div><div class="links">${r.url?`<a class="link-btn" href="${r.url}" target="_blank" rel="noopener">Primary source ↗</a>`:""}${r.repo?`<a class="link-btn repo" href="${r.repo}" target="_blank" rel="noopener">Repository ↗</a>`:""}</div></div><p>${esc(r.summary)}</p><div class="badges"><span class="badge evidence">${esc(r.evidence)}</span>${(r.access||[]).map(x=>`<span class="badge">${esc(x)}</span>`).join("")}${(r.tags||[]).map(x=>`<span class="badge">${esc(x)}</span>`).join("")}</div></article>`).join(""):'<div class="empty">No items match this view and filter.</div>';
}
search?.addEventListener("input",render);
document.querySelectorAll("[data-grade]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-grade]").forEach(x=>x.classList.remove("active"));b.classList.add("active");grade=b.dataset.grade;render()}));
document.querySelector(".mobile-toggle")?.addEventListener("click",()=>document.querySelector(".sidebar")?.classList.toggle("open"));
render();
