const mainLogo = "https://i.ibb.co/1t83h0Dn/x.jpg";

// Movies (all download-only)
const movies = [
  { name: "Ghost", icon: "https://i.ibb.co/CK8rY52s/x.jpg", download: "https://drive.google.com/file/d/1OQ32dEF7eQnCtNVnx2M_V3iMqh6jH9p8/view?usp=drive_link", tags: ["HD", "Action"] },
  { name: "John Luther", icon: "https://i.ibb.co/0pbndhSQ/x.jpg", download: "https://drive.google.com/file/d/1qPAeFr1gVVPeKvxf7WN13vmTVez4tzt7/view?usp=drive_link", tags: ["HD", "Thriller"] },
  { name: "Deep cover", icon: "https://i.ibb.co/TMdkCYhb/x.jpg", download: "https://drive.google.com/file/d/1qPAeFr1gVVPeKvxf7WN13vmTVez4tzt7/view?usp=drive_link", tags: ["HD"] },
  { name: "SuperMan (Imetafsiriwa)", icon: "https://i.ibb.co/zhZY2mC0/x.jpg", download: "https://drive.google.com/file/d/1qPAeFr1gVVPeKvxf7WN13vmTVez4tzt7/view?usp=drive_link", tags: ["HD"] },
  { name: "Off the Grind", icon: "https://i.ibb.co/KpYny5HT/x.jpg", download: "https://drive.google.com/file/d/1qPAeFr1gVVPeKvxf7WN13vmTVez4tzt7/view?usp=drive_link", tags: ["Action"] },
  { name: "THUNDERBOLTS", icon: "https://i.ibb.co/mCYRvz1Q/x.jpg", download: "https://drive.google.com/file/d/1qPAeFr1gVVPeKvxf7WN13vmTVez4tzt7/view?usp=drive_link", tags: ["Action"] },
  { name: "Heard of State", icon: "https://i.ibb.co/xKY7mg0m/x.jpg", download: "https://drive.google.com/file/d/1qPAeFr1gVVPeKvxf7WN13vmTVez4tzt7/view?usp=drive_link", tags: ["Action"] },
  { name: "SHADOW FORCE", icon: "https://i.ibb.co/ZpJtxPVm/x.jpg", download: "https://drive.google.com/file/d/1qPAeFr1gVVPeKvxf7WN13vmTVez4tzt7/view?usp=drive_link", tags: ["Action"] }
].map(m => ({ ...m, icon: m.icon || mainLogo }));

function makeMovieCard({name, icon, tags, primaryActionHTML}) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${icon}" alt="${name} poster">
    <div class="movie-info">
      ${tags && tags.length ? tags.map(t => `<span class='badge'>${t}</span>`).join('') : ""}
      <h3 class="mt-2 font-semibold text-sm">${name}</h3>
      <div class="mt-3 flex gap-2">${primaryActionHTML}</div>
    </div>
  `;
  return card;
}

function populateMovies() {
  const row = document.getElementById("moviesRow");
  row.innerHTML = "";
  movies.forEach(m => {
    const card = makeMovieCard({
      name: m.name,
      icon: m.icon,
      tags: m.tags,
      primaryActionHTML: `<a href="${m.download}" target="_blank" rel="noopener" class="flex-1 text-center bg-cyan-400 text-black font-semibold py-2 rounded-xl hover:bg-cyan-300 transition">⬇️ Download</a>`
    });
    row.appendChild(card);
  });
}

// Show popup on first visit
function showWelcomePopup() {
  if (!localStorage.getItem('hasVisited')) {
    const popup = document.getElementById('welcomePopup');
    popup.classList.remove('hidden');
    document.getElementById('popupOkay').addEventListener('click', () => {
      popup.classList.add('hidden');
      localStorage.setItem('hasVisited', 'true');
    });
  }
}

// Init
document.addEventListener('DOMContentLoaded', function() {
  populateMovies();
  showWelcomePopup();
});