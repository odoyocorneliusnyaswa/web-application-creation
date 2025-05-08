import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Video } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Prof. Dr. Awino Scholastica Omondi</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Expert in Educational Psychology and Curriculum Development
          </p>
          <p className="mb-8">
            Welcome to my academic website. I share my research, publications, and educational materials for students
            and researchers in the field of education.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/materials">
                Browse Materials <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Prof. Dr. Awino Scholastica Omondi"
              width={600}
              height={600}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Latest Publication</h3>
                <p className="text-muted-foreground mb-4">
                  "The Impact of Technology on Modern Educational Methodologies"
                </p>
                <Button variant="outline" asChild>
                  <Link href="/publications">View Publication</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Recent Lecture</h3>
                <p className="text-muted-foreground mb-4">"Cognitive Development in Early Childhood Education"</p>
                <Button variant="outline" asChild>
                  <Link href="/materials?type=video">Watch Lecture</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Course Materials</h3>
                <p className="text-muted-foreground mb-4">Access lecture notes, presentations, and study guides</p>
                <Button variant="outline" asChild>
                  <Link href="/materials">Browse Materials</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-center">Access My Materials</h2>
        <p className="text-center text-muted-foreground mb-8">Choose a subscription plan that works for you</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">Basic Access</h3>
                <div className="text-3xl font-bold mb-2">$9.99</div>
                <p className="text-muted-foreground mb-1">Monthly</p>
                <ul className="mb-6 space-y-2 text-left w-full">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Access to lecture notes
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    5 downloads per month
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Limited audio content
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                    Video lectures
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/subscribe?plan=basic">Subscribe Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">Standard Access</h3>
                <div className="text-3xl font-bold mb-2">$19.99</div>
                <p className="text-muted-foreground mb-1">Monthly</p>
                <ul className="mb-6 space-y-2 text-left w-full">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Access to all lecture notes
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    20 downloads per month
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Full audio content
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Limited video lectures
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/subscribe?plan=standard">Subscribe Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">Premium Access</h3>
                <div className="text-3xl font-bold mb-2">$39.99</div>
                <p className="text-muted-foreground mb-1">Monthly</p>
                <ul className="mb-6 space-y-2 text-left w-full">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Unlimited access to all content
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Unlimited downloads
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Early access to new materials
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Monthly Q&A session access
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/subscribe?plan=premium">Subscribe Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">JD</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">John Doe</h4>
                    <p className="text-sm text-muted-foreground">PhD Student, University of Nairobi</p>
                  </div>
                </div>
                <p className="italic">
                  "Prof. Omondi's materials have been invaluable for my research. The depth of content and clarity of
                  explanation is unmatched. The subscription is worth every penny."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">MK</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Mary Kamau</h4>
                    <p className="text-sm text-muted-foreground">Education Researcher</p>
                  </div>
                </div>
                <p className="italic">
                  "The video lectures and supplementary materials have transformed my understanding of educational
                  psychology. Prof. Omondi explains complex concepts in such an accessible way."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
