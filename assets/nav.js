:root {
  --blue: #2563eb;
  --purple: #7c3aed;
  --pink: #ec4899;
  --bg-light: #f9fafb;
  --text-dark: #334155;
  --radius: 14px;
}

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background: linear-gradient(180deg, #f0f4ff, #fff);
  color: var(--text-dark);
  padding-bottom: 80px;
}

/* Header */
.topbar {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 18px;
}
.logo img {
  width: 28px;
  height: 28px;
}
.desktop-nav a {
  text-decoration: none;
  color: var(--text-dark);
  margin: 0 10px;
  font-weight: 500;
}
.desktop-nav a:hover {
  color: var(--purple);
}

/* Splash */
.splash {
  text-align: center;
  padding: 100px 20px;
}
.splash h1 {
  font-size: 2.2rem;
  color: var(--purple);
}
.splash button {
  margin-top: 20px;
  padding: 14px 28px;
  border: none;
  background: linear-gradient(90deg, var(--blue), var(--purple));
  color: white;
  border-radius: var(--radius);
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}
.splash button:hover {
  transform: scale(1.05);
}

/* Mobile navigation */
#mobileNav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  z-index: 999;
}
#mobileNav a {
  color: var(--text-dark);
  text-decoration: none;
  text-align: center;
  font-size: 13px;
}
#mobileNav a.active {
  color: var(--purple);
}
#mobileNav i {
  display: block;
  font-size: 20px;
  margin-bottom: 3px;
}

@media (min-width: 768px) {
  #mobileNav {
    display: none;
  }
}
