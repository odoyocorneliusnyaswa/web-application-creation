"use client"

import React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Prof. Awino S. Omondi
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Materials</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/materials?type=notes" title="Lecture Notes">
                      Access course notes and study materials
                    </ListItem>
                    <ListItem href="/materials?type=publications" title="Publications">
                      Research papers and academic publications
                    </ListItem>
                    <ListItem href="/materials?type=video" title="Video Lectures">
                      Recorded video lectures and presentations
                    </ListItem>
                    <ListItem href="/materials?type=audio" title="Audio Content">
                      Podcasts and audio recordings
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/subscribe" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Subscription Plans</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2">
            <ModeToggle />
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <div className="px-4 py-2">
              <p className="font-medium mb-2">Materials</p>
              <div className="pl-4 flex flex-col space-y-2">
                <Link
                  href="/materials?type=notes"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Lecture Notes
                </Link>
                <Link
                  href="/materials?type=publications"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Publications
                </Link>
                <Link
                  href="/materials?type=video"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Video Lectures
                </Link>
                <Link
                  href="/materials?type=audio"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Audio Content
                </Link>
              </div>
            </div>
            <Link
              href="/subscribe"
              className="px-4 py-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Subscription Plans
            </Link>
            <Link href="/contact" className="px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex items-center justify-between pt-4 border-t">
              <ModeToggle />
              <Button asChild>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
