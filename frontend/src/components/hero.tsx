import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-6 text-foreground">Find Your Balance with Yoga & Nature</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            A harmonious space where mindful movement meets the healing power of plants. Nurture your body and home with
            our curated yoga sessions and plant collection.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#yoga">Book a Session</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="#plants">Browse Plants</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 bg-cover bg-center"></div>
    </section>
  )
}

