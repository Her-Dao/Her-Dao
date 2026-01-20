export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      <img src="/her-dao-colour-dots.svg" alt="Her Dao logo" className="absolute left-4 top-4 sm:left-6 sm:top-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 z-10" />
      <main className="text-center px-6"> 
        <h1 className="text-6xl sm:text-7xl font-extrabold text-black mb-12">New site coming soon</h1>
      </main>
      <footer className="absolute bottom-30 left-0 right-0 flex items-center justify-center">
        <div className="flex items-center gap-6">
          <a href="https://x.com/_herdao" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-700 hover:text-black">
            <img src="/twitterlogo.jpg" alt="Twitter logo" className="w-8 h-8 object-contain" />
          </a>
          <a href="https://www.linkedin.com/company/h-e-r-dao/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-black">
            <img src="/LinkedInLogo.svg" alt="LinkedIn logo" className="w-10 h-8 object-contain" />
          </a>
          <a href="https://instagram.com/h.e.r.dao" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-700 hover:text-black">
            <img src="/instagram-logo.jpg" alt="Instagram logo" className="w-6 h-6 object-contain" />
          </a>
          <a href="https://t.me/herdao" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-700 hover:text-black">
            <img src="/telegramlogo.png" alt="Telegram logo" className="w-6 h-6 object-contain" />
          </a>
          <a href="Contact@her-dao.xyz" aria-label="Email" className="text-gray-700 hover:text-black">
            <img src="/emaillogo.jpg" alt="Email logo" className="w-10 h-8 object-contain" />
          </a>
        </div>
      </footer>
    </div>
  );
}
