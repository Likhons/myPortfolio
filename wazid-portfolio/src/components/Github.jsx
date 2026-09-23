import { useEffect, useRef, useState } from 'react';

const USERNAME = 'Likhons';
const API = 'https://api.github.com';

const LANG_COLORS = {
  HTML: '#e34c26',
  CSS: '#563d7c',
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  PHP: '#4F5D95',
  default: '#00d4ff',
};

function langColor(lang) {
  return LANG_COLORS[lang] || LANG_COLORS.default;
}

function StatCard({ icon, label, value, loaded }) {
  const numRef = useRef(null);
  const cardRef = useRef(null);

  // Animate the number up from 0 once this card scrolls into view
  useEffect(() => {
    if (!loaded) return;
    const el = numRef.current;
    const card = cardRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const start = performance.now();
            const duration = 1000;
            function step(now) {
              const progress = Math.min((now - start) / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              el.textContent = Math.round(value * ease);
              if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [loaded, value]);

  return (
    <div className="gh-stat-card" ref={cardRef}>
      <i className={`bx ${icon}`}></i>
      <span className="gh-stat-num" ref={numRef}>{loaded ? 0 : '—'}</span>
      <span className="gh-stat-label">{label}</span>
    </div>
  );
}

function Github() {
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`${API}/users/${USERNAME}`),
          fetch(`${API}/users/${USERNAME}/repos?sort=updated&per_page=6&type=public`),
        ]);
        if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub fetch failed');
        const profileData = await profileRes.json();
        const reposData = await reposRes.json();
        setProfile(profileData);
        setRepos(reposData);
        setStatus('success');
      } catch (err) {
        console.warn('GitHub API error:', err);
        setStatus('error');
      }
    }
    load();
  }, []);

  const loaded = status === 'success';
  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  return (
    <section className="github-section" id="github">
      <h2 className="heading">GitHub <span>Activity</span></h2>
      <p className="section-subtitle">My open source presence</p>

      <div className="gh-stats-row">
        <StatCard icon="bx-book-open" label="Public Repos" value={profile?.public_repos ?? 0} loaded={loaded} />
        <StatCard icon="bx-group" label="Followers" value={profile?.followers ?? 0} loaded={loaded} />
        <StatCard icon="bx-user-plus" label="Following" value={profile?.following ?? 0} loaded={loaded} />
        <StatCard icon="bx-star" label="Total Stars" value={totalStars} loaded={loaded} />
      </div>

      <div className="gh-repos-grid">
        {status === 'loading' && (
          <div className="gh-loading">
            <span className="gh-loader"></span>
            <p>Fetching repositories…</p>
          </div>
        )}

        {status === 'error' && (
          <div className="gh-error">
            <i className="bx bx-wifi-off"></i>
            <p>
              Could not load GitHub data.{' '}
              <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener">Visit profile →</a>
            </p>
          </div>
        )}

        {status === 'success' && repos.length === 0 && (
          <p className="gh-empty">No public repositories found.</p>
        )}

        {status === 'success' && repos.map((repo) => (
          <a key={repo.id} className="gh-repo-card" href={repo.html_url} target="_blank" rel="noopener">
            <div className="gh-repo-top">
              <i className="bx bx-book-open gh-repo-icon"></i>
              <h4 className="gh-repo-name">{repo.name}</h4>
            </div>
            <p className="gh-repo-desc">{repo.description || 'No description provided.'}</p>
            <div className="gh-repo-meta">
              {repo.language && (
                <span className="gh-lang">
                  <span className="gh-lang-dot" style={{ background: langColor(repo.language) }}></span>
                  {repo.language}
                </span>
              )}
              <span className="gh-meta-item"><i className="bx bx-star"></i> {repo.stargazers_count}</span>
              <span className="gh-meta-item"><i className="bx bx-git-repo-forked"></i> {repo.forks_count}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="gh-profile-link">
        <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener" className="btn">
          <i className="bx bxl-github"></i> View Full Profile
        </a>
      </div>
    </section>
  );
}

export default Github;