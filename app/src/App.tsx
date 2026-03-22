import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'

const asset = (name: string) => `/assets/${name}`

type CameraProps = {
  children?: React.ReactNode
  title?: string
  showDots?: boolean
  centerTo?: string
}

function CameraLayout({ children, title, showDots, centerTo = '/camera/searching' }: CameraProps) {
  const navigate = useNavigate()

  return (
    <main className="phone camera-shell">
      <StatusBar dark />
      <button className="flag-chip-btn" type="button" onClick={() => navigate('/camera/quests')}>
        <img className="flag-chip" src={asset('group-33308.png')} alt="quests" />
      </button>
      {title ? <h2 className="camera-title">{title}</h2> : null}
      {showDots ? <SearchingDots /> : null}
      {children}
      <BottomNav centerTo={centerTo} />
    </main>
  )
}

function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`status-row ${dark ? 'dark' : ''}`}>
      <span>9:41</span>
      <span>···</span>
    </div>
  )
}

function BottomNav({ centerTo }: { centerTo: string }) {
  return (
    <nav className="bottom-nav" aria-label="Bottom navigation">
      <NavLink className="nav-link" to="/profile">
        <img src={asset('group-33304.png')} alt="Profile" />
      </NavLink>
      <NavLink className="nav-link center" to={centerTo}>
        <img src={asset('group-33303.png')} alt="Camera" />
      </NavLink>
      <NavLink className="nav-link" to="/camera/quests">
        <img src={asset('group-33302.png')} alt="Collection" />
      </NavLink>
    </nav>
  )
}

function GradientButton({ text, to }: { text: string; to: string }) {
  const navigate = useNavigate()
  return (
    <button className="btn-primary" type="button" onClick={() => navigate(to)}>
      {text}
    </button>
  )
}

function PaleButton({ text, to }: { text: string; to: string }) {
  const navigate = useNavigate()
  return (
    <button className="btn-secondary" type="button" onClick={() => navigate(to)}>
      {text}
    </button>
  )
}

function AuthScreen({
  login,
  filled,
}: {
  login: boolean
  filled: boolean
}) {
  const navigate = useNavigate()

  return (
    <main className="phone light-shell auth-screen">
      <StatusBar />
      <section className="auth-wrap">
        <h1>{login ? "Let's Get You Logged In!" : "Let's Get You Started!"}</h1>
        <label>
          Username
          <input defaultValue={filled ? 'Hunter' : ''} />
        </label>
        <label>
          Password
          <input defaultValue={filled ? 'CATALYST2026' : ''} />
        </label>
        {!login ? (
          <label>
            Confirm Password
            <input defaultValue={filled ? 'CATALYST2026' : ''} />
          </label>
        ) : null}

        <button className="auth-image-btn" type="button" onClick={() => navigate('/camera/tutorial/1')}>
          <img src={asset(login ? 'frame-144-3.png' : 'frame-144-2.png')} alt={login ? 'Log In' : 'Sign Up'} />
        </button>
        <button className="auth-image-btn" type="button" onClick={() => navigate('/camera/tutorial/1')}>
          <img src={asset('frame-145-1.png')} alt="Continue as Guest" />
        </button>
        <img className="social-strip" src={asset('group-33311.png')} alt="social login" />
        <p className="auth-switch">
          {login ? "Don't have an account yet?" : 'Already have an account?'}
          <NavLink className="auth-link" to={login ? '/signup' : '/login'}>
            {login ? ' Sign Up' : ' Log In'}
          </NavLink>
        </p>
        {login ? <img className="auth-mascot right" src={asset('noto-dog.png')} alt="mascot" /> : null}
      </section>
    </main>
  )
}

function TutorialCard({ title, body, step, icon }: { title: string; body: string; step: number; icon: string }) {
  const navigate = useNavigate()
  const classes = ['bubble', step === 4 ? 'bubble-top' : 'bubble-bottom', `bubble-step-${step}`].join(' ')
  const nextRoute = step === 4 ? '/camera' : `/camera/tutorial/${step + 1}`
  return (
    <CameraLayout centerTo={step === 4 ? '/camera' : '/camera/searching'}>
      <section className={classes}>
        <h3>
          {title} <img src={asset(icon)} alt="" />
        </h3>
        <p>{body}</p>
        <button className="chevron" type="button" onClick={() => navigate(nextRoute)} aria-label="Next">
          ›
        </button>
        <div className="pager">
          {[1, 2, 3, 4].map((i) => (
            <button
              key={i}
              type="button"
              className={i === step ? 'active' : ''}
              onClick={() => navigate(`/camera/tutorial/${i}`)}
              aria-label={`Go to step ${i}`}
            />
          ))}
        </div>
      </section>
    </CameraLayout>
  )
}

function ModalCard({
  children,
  rainbow = false,
  className = '',
}: {
  children: React.ReactNode
  rainbow?: boolean
  className?: string
}) {
  return (
    <section className={`modal-card ${rainbow ? 'rainbow' : ''} ${className}`.trim()}>
      <div className="modal-inner">{children}</div>
    </section>
  )
}

function ProfileScreen() {
  const categories = [
    { name: 'Handheld Items', color: 'teal', icon: '4.png' },
    { name: 'Textures', color: 'gold', icon: '5.png' },
    { name: 'Furniture', color: 'pink', icon: '6.png' },
  ]

  return (
    <main className="phone light-shell profile-screen">
      <StatusBar />
      <img className="hero-cat" src={asset('group-33309.png')} alt="Hunter mascot" />
      <h2 className="profile-name">Hunter</h2>
      <section className="stats-pill">
        <div>
          <small>Total XP</small>
          <strong>126</strong>
        </div>
        <div>
          <small>Total Items</small>
          <strong>34</strong>
        </div>
      </section>

      <section className="category-bands" aria-label="Categories">
        {categories.map((category) => (
          <article key={category.name} className={`category-band ${category.color}`}>
            <span>{category.name}</span>
            <div className="band-right">
              <img src={asset(category.icon)} alt="" aria-hidden="true" />
              <img className="band-arrow" src={asset('iconamoon-arrow-up-2-bold.png')} alt="" aria-hidden="true" />
            </div>
          </article>
        ))}
      </section>

      <section className="collection-panel">
        <section className="grid-card">
          {[
            'fluent-emoji-flat-teddy-bear.png',
            'devicon-gitea.png',
            'emojione-red-apple.png',
            'game-icons-pillow.png',
            'noto-v1-womans-hat.png',
            'twemoji-laptop.png',
          ].map((name) => (
            <article key={name}>
              <img src={asset(name)} alt="collectible" />
            </article>
          ))}
        </section>

        <NavLink className="hunt-more" to="/camera/tutorial/1" aria-label="Hunt for More">
          <img src={asset('frame-145.png')} alt="Hunt for More!" />
        </NavLink>
      </section>
    </main>
  )
}

function LevelScreen() {
  return (
    <main className="phone light-shell level-screen">
      <StatusBar />
      <img src={asset('group-33307.png')} className="level-badge" alt="level 1" />
      <div className="xp-bar" />
      <section className="reward-grid-wrap">
        <h2>Rewards</h2>
        <div className="reward-grid">
          {[
            'group-33332.png',
            'group-33334.png',
            'group-33333.png',
            'group-33329.png',
            'group-33331.png',
            'group-33330.png',
            'streamline-color-moon-cloud-flat.png',
            'fluent-emoji-flat-tram-car.png',
          ].map((name) => (
            <article key={name}>
              <img src={asset(name)} alt="reward item" />
            </article>
          ))}
        </div>
      </section>
      <GradientButton text="View Leaderboard" to="/leaderboard" />
      <PaleButton text="Exit to Profile" to="/profile" />
    </main>
  )
}

function LeaderboardScreen() {
  const names = [
    ['Devon Lane', 'group-33315.png'],
    ['Daisy04', 'group-33318.png'],
    ['Enol', 'group-33316.png'],
    ['Renee', 'group-33317.png'],
    ['Devon', 'group-33319.png'],
    ['Guest_6813', 'group-33320.png'],
    ['Paul', 'group-33321.png'],
  ]

  return (
    <main className="phone light-shell leaderboard-screen">
      <StatusBar />
      <h1 className="board-title">Leaderboard</h1>
      <section className="board-tabs">
        <span>Friends</span>
        <span className="active">Global</span>
      </section>
      <section className="rank-list">
        {names.map(([name, badge], idx) => (
          <article key={name} className={`rank-row rank-${idx + 1}`}>
            <strong>{idx + 1}</strong>
            <span>{name}</span>
            <img src={asset(badge)} alt="score" />
          </article>
        ))}
      </section>
      <article className="my-rank">
        <strong>5691</strong>
        <span>Hunter (me)</span>
        <img src={asset('group-33325.png')} alt="my score" />
      </article>
      <PaleButton text="Back to Profile" to="/profile" />
    </main>
  )
}

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<AuthScreen login={false} filled={false} />} />
        <Route path="/signup" element={<AuthScreen login={false} filled={false} />} />
        <Route path="/signup/filled" element={<AuthScreen login={false} filled />} />
        <Route path="/login" element={<AuthScreen login filled={false} />} />
        <Route path="/login/filled" element={<AuthScreen login filled />} />

        <Route path="/camera" element={<CameraLayout centerTo="/camera/searching" />} />
        <Route path="/camera/searching" element={<CameraLayout title="searching..." showDots centerTo="/camera/fact" />} />

        <Route
          path="/camera/tutorial/1"
          element={<TutorialCard step={1} title="Explore" body="Turn everyday places into playful scavenger hunts!" icon="lets-icons-map-fill.png" />}
        />
        <Route
          path="/camera/tutorial/2"
          element={<TutorialCard step={2} title="Snap" body="Snap a pic and see if you've found the right match!" icon="mdi-camera.png" />}
        />
        <Route
          path="/camera/tutorial/3"
          element={<TutorialCard step={3} title="Collect" body="Earn collectibles and learn something new every time!" icon="bi-collection-fill.png" />}
        />
        <Route
          path="/camera/tutorial/4"
          element={<TutorialCard step={4} title="Finish" body="Wrap up anytime and see what you've earned!" icon="ph-flag-checkered-fill.png" />}
        />

        <Route
          path="/camera/quests"
          element={
            <CameraLayout showDots centerTo="/camera/searching">
              <ModalCard className="quests-modal">
                <div className="modal-header">
                  <h3 className="modal-title">Current Quests</h3>
                  <NavLink className="close-btn" to="/camera">
                    <img src={asset('group-33293.png')} alt="Close quests" />
                  </NavLink>
                </div>
                {['Find something with a wooden texture', 'Find a plushie', 'Find a couch'].map((q) => (
                  <article key={q} className="quest-row">
                    <span>{q}</span>
                    <img src={asset('fxemoji-present.png')} alt="reward" />
                  </article>
                ))}
              </ModalCard>
            </CameraLayout>
          }
        />

        <Route
          path="/camera/fact"
          element={
            <CameraLayout centerTo="/camera/searching">
              <ModalCard>
                <h3 className="modal-title">Did You Know?</h3>
                <img src={asset('group-33332.png')} className="center-tree" alt="tree collectible" />
                <p className="fact-body">
                  Trees communicate and share nutrients through an underground network of fungi,
                  often called the "wood wide web," which can warn neighbors of pest attacks!
                </p>
                <GradientButton text="Claim Reward" to="/camera/reward" />
              </ModalCard>
            </CameraLayout>
          }
        />

        <Route
          path="/camera/reward"
          element={
            <CameraLayout showDots centerTo="/camera/searching">
              <ModalCard rainbow>
                <h3 className="modal-title">Well Done!</h3>
                <img src={asset('group-33332.png')} className="center-tree" alt="tree collectible" />
                <img src={asset('group-33307.png')} className="sparkles" alt="sparkles" />
                <p className="reward-copy">+ 1 Cottonwood Tree Collectible</p>
                <p className="reward-copy">+ 36 XP</p>
                <GradientButton text="Continue Hunting" to="/camera" />
              </ModalCard>
            </CameraLayout>
          }
        />

        <Route
          path="/camera/finish"
          element={
            <CameraLayout showDots centerTo="/camera/searching">
              <ModalCard>
                <h3 className="modal-title">Finish Your Hunt?</h3>
                <p className="reward-copy">You've earned 120 XP and 7 collectibles so far.</p>
                <GradientButton text="Finish Hunt" to="/level" />
                <PaleButton text="Keep Exploring" to="/camera" />
              </ModalCard>
            </CameraLayout>
          }
        />

        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/level" element={<LevelScreen />} />
        <Route path="/leaderboard" element={<LeaderboardScreen />} />
      </Routes>
    </div>
  )
}

function SearchingDots() {
  return (
    <div className="search-dots" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, idx) => (
        <span key={idx} style={{ '--delay': `${idx * 0.1}s` } as React.CSSProperties} />
      ))}
    </div>
  )
}

export default App
