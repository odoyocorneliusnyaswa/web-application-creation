import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Prof. Dr. Awino Scholastica Omondi</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Dedicated to advancing knowledge in educational psychology and curriculum development through research,
              teaching, and community engagement.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/materials" className="text-muted-foreground hover:text-foreground">
                  Materials
                </Link>
              </li>
              <li>
                <Link href="/subscribe" className="text-muted-foreground hover:text-foreground">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Department of Education
                <br />
                University of Nairobi
                <br />
                P.O. Box 30197
                <br />
                Nairobi, Kenya
              </li>
              <li>
                <Link href="mailto:prof.omondi@uonbi.ac.ke" className="text-muted-foreground hover:text-foreground">
                  prof.omondi@uonbi.ac.ke
                </Link>
              </li>
              <li>
                <Link href="tel:+254123456789" className="text-muted-foreground hover:text-foreground">
                  +254 123 456 789
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Prof. Dr. Awino Scholastica Omondi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
