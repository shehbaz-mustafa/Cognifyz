import type { ReactNode } from 'react'

type IconName = 'screen' | 'mentor' | 'growth' | 'calendar' | 'clock'

const applicationLink = 'mailto:internships@cognifyz.com?subject=Web%20Developer%20Internship%20Application'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    screen: <><rect x="3" y="4" width="18" height="13" /><path d="M8 21h8m-4-4v4" /></>,
    mentor: <><circle cx="12" cy="8" r="4" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></>,
    growth: <path d="m4 14 4-4 4 4 8-8M15 6h5v5" />,
    calendar: <><path d="M7 2v3m10-3v3M4 9h16M5 4h14v17H5z" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

function Footer() {
  return <footer id="contact"><div className="wrap"><div className="footer-grid"><div><p className="footer-title">Cognifyz Technologies</p><p className="footer-copy">Supporting emerging talent with practical, thoughtful technology experiences.</p></div><div><p className="footer-label">Inquiries</p><a href="mailto:internships@cognifyz.com">internships@cognifyz.com</a><a href="tel:+910000000000">+91 00000 00000</a></div><div><p className="footer-label">Information</p><a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms &amp; Conditions</a></div></div><div className="copyright"><span>© 2026 Cognifyz Technologies. All rights reserved.</span><span>Web Developer Internship Program</span></div></div></footer>
}

function PolicyPage({ terms = false }: { terms?: boolean }) {
  const title = terms ? 'Terms & Conditions' : 'Privacy Policy'
  return <><main className="legal wrap"><a href="/">← Back to internship program</a><h1>{title}</h1><p>Last updated: September 18, 2026</p>{terms ? <><p>These terms govern use of the Cognifyz Technologies Web Developer Internship information page and submission of internship inquiries.</p><h2>Program information</h2><p>Program details, including duration, eligibility, and availability, may change. Submission of an inquiry or application does not guarantee placement in the program.</p><h2>Applicant responsibilities</h2><p>Applicants must provide accurate information and retain ownership of materials submitted with their application.</p></> : <><p>Cognifyz Technologies uses the contact details you provide for internship inquiries only to respond to your application or question.</p><h2>Information we collect</h2><p>We may collect your name, email address, phone number, résumé, portfolio links, and any other information you submit when contacting us.</p><h2>How we use information</h2><p>We use this information to evaluate internship applications, communicate about the program, and maintain relevant application records.</p></>}<h2>Contact</h2><p>Questions can be sent to <a href="mailto:internships@cognifyz.com">internships@cognifyz.com</a>.</p></main><Footer /></>
}

function LandingPage() {
  const benefits = [
    ['screen', 'Real-world experience', 'Work through meaningful front-end tasks and develop a portfolio you can confidently discuss.'],
    ['mentor', 'Mentorship and feedback', 'Receive clear guidance, code feedback, and support from professionals as you grow.'],
    ['growth', 'Career-ready habits', 'Practice collaboration, problem-solving, and communication alongside technical fundamentals.'],
  ] as const
  const skills = ['HTML5 and semantic markup', 'CSS3 and responsive layouts', 'JavaScript fundamentals', 'Git and GitHub basics', 'Basic UI and UX awareness', 'Clear written communication']
  return <><div className="topbar"><div className="wrap"><span>Applications are open for the next internship cohort.</span><a href="mailto:internships@cognifyz.com">internships@cognifyz.com</a></div></div><header><nav className="wrap"><a className="brand" href="#top"><span className="brand-mark">C</span>Cognifyz Technologies</a><ul className="nav-links"><li><a href="#program">Program</a></li><li><a href="#qualifications">Qualifications</a></li><li><a href="#contact">Contact</a></li></ul><a className="button" href={applicationLink}>Apply Now</a></nav></header><main id="top"><section className="hero"><div className="wrap hero-grid"><div><span className="eyebrow">Career program</span><h1>Web Developer Internship Opportunities at Cognifyz Technologies</h1><p className="lead">Join a focused, 8-week remote internship designed to help emerging developers turn core web skills into practical project experience.</p><div className="hero-actions"><a className="button" href={applicationLink}>Apply Now</a><a className="button secondary" href="#program">Explore the program</a></div></div><aside className="info-card"><h2>A practical start to your development career.</h2><div className="fact"><Icon name="calendar" /><div><strong>8-week program</strong><span>Structured learning, project work, and feedback.</span></div></div><div className="fact"><Icon name="clock" /><div><strong>Remote and flexible</strong><span>Build experience from wherever you work best.</span></div></div></aside></div></section><section id="program"><div className="wrap"><div className="section-heading"><span className="eyebrow">Why intern with us</span><h2>Build skills that hold up beyond the classroom.</h2><p>The program pairs guided practice with work that mirrors the day-to-day rhythm of a web development team.</p></div><div className="grid-3">{benefits.map(([icon, title, copy]) => <article className="benefit" key={title}><div className="icon"><Icon name={icon} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section><section className="qualifications" id="qualifications"><div className="wrap qual-grid"><div className="qual-copy"><span className="eyebrow">Who should apply</span><h2>Curious developers ready to learn by building.</h2><p>We welcome students and early-career developers with a sound foundation and a willingness to ask questions, take feedback, and improve.</p></div><ul className="skill-list">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div></section><section className="apply"><div className="wrap apply-inner"><div><h2>Ready to start building?</h2><p>Send us your application and a link to your GitHub or portfolio, if available.</p></div><a className="button" href={applicationLink}>Apply Now</a></div></section></main><Footer /></>
}

export default function App() {
  if (window.location.pathname === '/privacy-policy') return <PolicyPage />
  if (window.location.pathname === '/terms-and-conditions') return <PolicyPage terms />
  return <LandingPage />
}
