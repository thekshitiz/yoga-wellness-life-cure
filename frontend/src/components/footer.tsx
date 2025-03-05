import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-lg font-medium text-primary">
              Harmony
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} Harmony Yoga & Plants. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center">
            Designed with <Heart className="h-3 w-3 mx-1 text-primary" /> for wellness and nature
          </p>
        </div>
      </div>
    </footer>
  )
}

