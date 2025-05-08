"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useSearchParams } from "next/navigation"
import { BookOpen, FileText, Headphones, Lock, Video } from "lucide-react"
import Link from "next/link"

// Sample data for materials
const materials = [
  {
    id: 1,
    title: "Introduction to Educational Psychology",
    type: "notes",
    category: "Educational Psychology",
    description:
      "Comprehensive lecture notes covering the fundamentals of educational psychology, learning theories, and cognitive development.",
    date: "2023-05-15",
    isPremium: false,
    fileSize: "2.4 MB",
    downloads: 1245,
  },
  {
    id: 2,
    title: "Cognitive Development in Early Childhood",
    type: "video",
    category: "Child Development",
    description:
      "A detailed lecture on cognitive development stages in early childhood, with practical examples and case studies.",
    date: "2023-06-22",
    isPremium: true,
    duration: "1h 24m",
    views: 876,
  },
  {
    id: 3,
    title: "The Impact of Technology on Modern Educational Methodologies",
    type: "publications",
    category: "Educational Technology",
    description:
      "Research paper published in the International Journal of Education exploring how technology is transforming teaching methods.",
    date: "2023-03-10",
    isPremium: false,
    journal: "International Journal of Education",
    citations: 32,
  },
  {
    id: 4,
    title: "Podcast: Rethinking Assessment in Higher Education",
    type: "audio",
    category: "Higher Education",
    description: "Discussion with leading educators about innovative approaches to assessment in university settings.",
    date: "2023-07-05",
    isPremium: true,
    duration: "45m",
    listens: 543,
  },
  {
    id: 5,
    title: "Curriculum Development Framework",
    type: "notes",
    category: "Curriculum Studies",
    description: "Detailed guide on designing, implementing, and evaluating educational curricula at various levels.",
    date: "2023-04-18",
    isPremium: true,
    fileSize: "3.8 MB",
    downloads: 987,
  },
  {
    id: 6,
    title: "Indigenous Knowledge in Modern Education",
    type: "publications",
    category: "Cultural Education",
    description:
      "Research exploring the integration of traditional knowledge systems into contemporary educational frameworks.",
    date: "2023-02-28",
    isPremium: false,
    journal: "Comparative Education Review",
    citations: 45,
  },
  {
    id: 7,
    title: "Effective Teaching Strategies Workshop",
    type: "video",
    category: "Teaching Methods",
    description: "Recorded workshop demonstrating practical teaching techniques for engaging diverse learners.",
    date: "2023-08-12",
    isPremium: true,
    duration: "2h 10m",
    views: 1203,
  },
  {
    id: 8,
    title: "Educational Policy Analysis: Kenya Case Study",
    type: "notes",
    category: "Educational Policy",
    description: "Analysis of recent educational policy reforms in Kenya and their impact on learning outcomes.",
    date: "2023-01-20",
    isPremium: false,
    fileSize: "1.7 MB",
    downloads: 765,
  },
  {
    id: 9,
    title: "Interview: The Future of Education in Africa",
    type: "audio",
    category: "Educational Futures",
    description: "In-depth discussion about emerging trends and challenges in African education systems.",
    date: "2023-09-05",
    isPremium: false,
    duration: "52m",
    listens: 421,
  },
  {
    id: 10,
    title: "Teacher Professional Development Models",
    type: "publications",
    category: "Teacher Education",
    description: "Comparative study of different approaches to ongoing teacher training and development.",
    date: "2023-07-30",
    isPremium: true,
    journal: "Journal of Teacher Education",
    citations: 18,
  },
  {
    id: 11,
    title: "Classroom Management Techniques",
    type: "video",
    category: "Teaching Methods",
    description: "Video series demonstrating effective strategies for creating positive learning environments.",
    date: "2023-05-28",
    isPremium: false,
    duration: "1h 35m",
    views: 1567,
  },
  {
    id: 12,
    title: "Educational Research Methods",
    type: "notes",
    category: "Research Methodology",
    description: "Comprehensive guide to qualitative and quantitative research methods in educational studies.",
    date: "2023-03-15",
    isPremium: true,
    fileSize: "4.2 MB",
    downloads: 1089,
  },
]

export default function MaterialsPage() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get("type") || "all"

  const [activeTab, setActiveTab] = useState(initialType)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Get unique categories from materials
  const categories = ["all", ...new Set(materials.map((item) => item.category))]

  // Filter materials based on active tab, search query, and category
  const filteredMaterials = materials.filter((material) => {
    const matchesTab = activeTab === "all" || material.type === activeTab
    const matchesSearch =
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || material.category === categoryFilter

    return matchesTab && matchesSearch && matchesCategory
  })

  // Function to render the appropriate icon based on material type
  const renderIcon = (type: string) => {
    switch (type) {
      case "notes":
        return <FileText className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      case "audio":
        return <Headphones className="h-5 w-5" />
      case "publications":
        return <BookOpen className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Academic Materials</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Access lecture notes, publications, videos, and audio recordings
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-64">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Material Tabs */}
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="video">Videos</TabsTrigger>
          <TabsTrigger value="audio">Audio</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.length > 0 ? (
          filteredMaterials.map((material) => (
            <Card key={material.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-full">{renderIcon(material.type)}</div>
                    <Badge variant={material.isPremium ? "default" : "outline"}>
                      {material.isPremium ? "Premium" : "Free"}
                    </Badge>
                  </div>
                  <Badge variant="secondary">{material.category}</Badge>
                </div>
                <CardTitle className="mt-2">{material.title}</CardTitle>
                <CardDescription className="line-clamp-2">{material.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {material.type === "notes" && (
                    <p>
                      File size: {material.fileSize} • {material.downloads} downloads
                    </p>
                  )}
                  {material.type === "video" && (
                    <p>
                      Duration: {material.duration} • {material.views} views
                    </p>
                  )}
                  {material.type === "audio" && (
                    <p>
                      Duration: {material.duration} • {material.listens} listens
                    </p>
                  )}
                  {material.type === "publications" && (
                    <p>
                      Journal: {material.journal} • {material.citations} citations
                    </p>
                  )}
                  <p className="mt-1">Added: {new Date(material.date).toLocaleDateString()}</p>
                </div>
              </CardContent>
              <CardFooter>
                {material.isPremium ? (
                  <Button className="w-full" asChild>
                    <Link href={`/subscribe?redirect=/materials/${material.id}`}>
                      <Lock className="mr-2 h-4 w-4" /> Unlock Content
                    </Link>
                  </Button>
                ) : (
                  <Button className="w-full" asChild>
                    <Link href={`/materials/${material.id}`}>Access Content</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-muted-foreground mb-4">No materials found matching your criteria</div>
            <Button
              onClick={() => {
                setSearchQuery("")
                setCategoryFilter("all")
                setActiveTab("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
