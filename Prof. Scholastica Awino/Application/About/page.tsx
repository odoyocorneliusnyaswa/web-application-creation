import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About Prof. Dr. Awino Scholastica Omondi</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Educational Psychologist, Researcher, and Academic Leader
        </p>
      </div>

      {/* Biography Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-xl mb-6">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Prof. Dr. Awino Scholastica Omondi"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Email:</span>
                    <a href="mailto:prof.omondi@uonbi.ac.ke" className="text-primary hover:underline">
                      prof.omondi@uonbi.ac.ke
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Office:</span>
                    <span>Department of Education, University of Nairobi, Room 305</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Phone:</span>
                    <a href="tel:+254123456789" className="text-primary hover:underline">
                      +254 123 456 789
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Office Hours:</span>
                    <span>Tuesdays and Thursdays, 2:00 PM - 4:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Biography</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Prof. Dr. Awino Scholastica Omondi is a distinguished scholar in the field of Legal studies and
                Curriculum Development with over 20 years of experience in academia. She currently serves as a Professor
                of Law at the University of Nairobi, where she leads research initiatives focused on innovative
                teaching methodologies and educational policy development in East Africa.
              </p>

              <p>
                Born and raised in Migori County, Kenya, Prof. Omondi developed an early interest in education and its
                transformative potential. She completed her undergraduate studies at University of Nairobi, where she
                graduated with First Class Honors in Education. She went on to earn her Master's degree in Educational
                Psychology from the University of Cape Town and her Ph.D. in Law and Sociology from the University of
                Nairobi and Kenyatta University respectively, where her doctoral research on "Integrating Indigenous Knowledge Systems in Modern
                Educational Curricula" received international acclaim.
              </p>

              <p>
                Throughout her career, Prof. Omondi has been committed to bridging the gap between educational theory
                and practice. Her research has been published in numerous peer-reviewed journals, and she has authored
                three books on educational psychology and curriculum development. Her work has influenced educational
                policy in several African countries and has been recognized with multiple awards, including the African
                Educational Research Award (2018) and the Global Teaching Excellence Award (2020).
              </p>

              <p>
                As an educator, Prof. Omondi is known for her engaging teaching style and her dedication to mentoring
                the next generation of educational researchers and practitioners. She has supervised over 30 Ph.D.
                candidates and countless Master's students, many of whom have gone on to make significant contributions
                to the field of education.
              </p>

              <p>
                Beyond her academic work, Prof. Omondi is actively involved in community outreach programs aimed at
                improving educational outcomes in underserved communities. She founded the Educational Empowerment
                Initiative, a non-profit organization that provides resources and support to schools in rural Kenya.
              </p>

              <p>
                Prof. Omondi's current research focuses on the integration of technology in education, particularly in
                resource-constrained environments, and the development of culturally responsive teaching methodologies.
                She is also exploring the impact of COVID-19 on educational systems in Africa and strategies for
                building resilient educational infrastructures.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Research Interests</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Educational Psychology and Cognitive Development</li>
                <li>Curriculum Design and Implementation</li>
                <li>Technology Integration in Education</li>
                <li>Indigenous Knowledge Systems in Modern Education</li>
                <li>Teacher Professional Development</li>
                <li>Educational Policy and Reform</li>
                <li>Comparative Education Systems</li>
                <li>Assessment and Evaluation Methodologies</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-bold">Ph.D. in Curriculum Studies</div>
                  <div>University of Cambridge, UK (2005)</div>
                  <div className="text-muted-foreground">
                    Thesis: "Integrating Indigenous Knowledge Systems in Modern Educational Curricula"
                  </div>
                </li>
                <li>
                  <div className="font-bold">M.Ed. in Educational Psychology</div>
                  <div>University of Cape Town, South Africa (2001)</div>
                  <div className="text-muted-foreground">
                    Thesis: "Cognitive Development Patterns in Early Childhood Education in East Africa"
                  </div>
                </li>
                <li>
                  <div className="font-bold">B.Ed. in Education (First Class Honors)</div>
                  <div>Kenyatta University, Kenya (1998)</div>
                  <div className="text-muted-foreground">Specialization: Mathematics and Physics Education</div>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Professional Experience</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-bold">Professor of Education</div>
                  <div>University of Nairobi, Kenya (2015 - Present)</div>
                </li>
                <li>
                  <div className="font-bold">Associate Professor</div>
                  <div>University of Nairobi, Kenya (2010 - 2015)</div>
                </li>
                <li>
                  <div className="font-bold">Assistant Professor</div>
                  <div>Kenyatta University, Kenya (2005 - 2010)</div>
                </li>
                <li>
                  <div className="font-bold">Visiting Scholar</div>
                  <div>Stanford University, USA (2012 - 2013)</div>
                </li>
                <li>
                  <div className="font-bold">Educational Consultant</div>
                  <div>UNESCO (2008 - Present)</div>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Awards and Recognition</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-bold">Global Teaching Excellence Award (2020)</div>
                  <div className="text-muted-foreground">
                    Awarded by the International Association for Educational Excellence
                  </div>
                </li>
                <li>
                  <div className="font-bold">African Educational Research Award (2018)</div>
                  <div className="text-muted-foreground">
                    For outstanding contribution to educational research in Africa
                  </div>
                </li>
                <li>
                  <div className="font-bold">Distinguished Service Award (2016)</div>
                  <div className="text-muted-foreground">University of Nairobi</div>
                </li>
                <li>
                  <div className="font-bold">Best Research Publication Award (2014)</div>
                  <div className="text-muted-foreground">African Educational Research Network</div>
                </li>
              </ul>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild size="lg">
                <Link href="/materials">Explore My Academic Materials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
