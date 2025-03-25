import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-transparent to-black/90 py-12 text-white/80">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4 text-white">J & S</h3>
            <p className="text-sm max-w-xs">
              Join us for our magical wedding day under the northern lights. We can't wait to share our special moment with you.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/rsvp" className="hover:text-white transition-colors">
                  RSVP
                </Link>
              </li>
              <li>
                <Link href="/registry" className="hover:text-white transition-colors">
                  Registry
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-white transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Contact</h3>
            <p className="text-sm mb-2">Questions? Reach out to us:</p>
            <a
              href="mailto:couple@wedding.com"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              couple@wedding.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-xs">
          <p>© {currentYear} J & S Wedding. All rights reserved.</p>
          <p className="mt-2">
            Made with love for our special day under the northern lights.
          </p>
        </div>
      </div>
    </footer>
  );
}
