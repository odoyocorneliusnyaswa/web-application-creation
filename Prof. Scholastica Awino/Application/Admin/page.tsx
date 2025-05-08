"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { BookOpen, FileText, Headphones, Upload, Users, Video } from "lucide-react"

export default function AdminPage() {
  const { toast } = useToast()
  const [materialType, setMaterialType] = useState("notes")
  const [materialTitle, setMaterialTitle] = useState("")
  const [materialDescription, setMaterialDescription] = useState("")
  const [materialCategory, setMaterialCategory] = useState("")
  const [isPremium, setIsPremium] = useState("false")

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would upload the file to a storage service
    toast({
      title: "Material Uploaded",
      description: `Your ${materialType} has been successfully uploaded.`,
    })
    // Reset form
    setMaterialTitle("")
    setMaterialDescription("")
    setMaterialCategory("")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-xl text-muted-foreground">Manage your academic materials and monitor user subscriptions</p>
      </div>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">124</div>
              <div className="bg-primary/10 p-2 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">12 added this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">87</div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">↑ 14% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">3,542</div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Upload className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">245 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">$2,874</div>
              <div className="bg-primary/10 p-2 rounded-full">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">↑ 7% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="upload" className="mb-12">
        <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full mb-8">
          <TabsTrigger value="upload">Upload Materials</TabsTrigger>
          <TabsTrigger value="manage">Manage Content</TabsTrigger>
          <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Upload New Material</CardTitle>
              <CardDescription>Add new academic content for your students and subscribers</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpload} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="material-type">Material Type</Label>
                  <Select value={materialType} onValueChange={setMaterialType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select material type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="notes">
                        <div className="flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          <span>Lecture Notes</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="publications">
                        <div className="flex items-center">
                          <BookOpen className="mr-2 h-4 w-4" />
                          <span>Publication</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="video">
                        <div className="flex items-center">
                          <Video className="mr-2 h-4 w-4" />
                          <span>Video Lecture</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="audio">
                        <div className="flex items-center">
                          <Headphones className="mr-2 h-4 w-4" />
                          <span>Audio Recording</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter material title"
                    value={materialTitle}
                    onChange={(e) => setMaterialTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter a detailed description of the material"
                    rows={4}
                    value={materialDescription}
                    onChange={(e) => setMaterialDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={materialCategory} onValueChange={setMaterialCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="educational-psychology">Educational Psychology</SelectItem>
                        <SelectItem value="curriculum-development">Curriculum Development</SelectItem>
                        <SelectItem value="teaching-methods">Teaching Methods</SelectItem>
                        <SelectItem value="educational-technology">Educational Technology</SelectItem>
                        <SelectItem value="research-methodology">Research Methodology</SelectItem>
                        <SelectItem value="child-development">Child Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="access-level">Access Level</Label>
                    <Select value={isPremium} onValueChange={setIsPremium}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select access level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="false">Free Access</SelectItem>
                        <SelectItem value="true">Premium (Paid) Access</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Upload File</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop your file here, or click to browse
                    </p>
                    <Input id="file" type="file" className="hidden" />
                    <Button type="button" variant="outline" size="sm">
                      Browse Files
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">Maximum file size: 500MB</p>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Upload Material
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="manage">
          <Card>
            <CardHeader>
              <CardTitle>Manage Content</CardTitle>
              <CardDescription>Edit, update, or remove your existing academic materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Title</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Category</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Access</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Date Added</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 align-middle">Introduction to Educational Psychology</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center">
                            <FileText className="mr-2 h-4 w-4" />
                            <span>Notes</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">Educational Psychology</td>
                        <td className="p-4 align-middle">Free</td>
                        <td className="p-4 align-middle">May 15, 2023</td>
                        <td className="p-4 align-middle">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="destructive" size="sm">
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 align-middle">Cognitive Development in Early Childhood</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center">
                            <Video className="mr-2 h-4 w-4" />
                            <span>Video</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">Child Development</td>
                        <td className="p-4 align-middle">Premium</td>
                        <td className="p-4 align-middle">Jun 22, 2023</td>
                        <td className="p-4 align-middle">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="destructive" size="sm">
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 align-middle">
                          The Impact of Technology on Modern Educational Methodologies
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center">
                            <BookOpen className="mr-2 h-4 w-4" />
                            <span>Publication</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">Educational Technology</td>
                        <td className="p-4 align-middle">Free</td>
                        <td className="p-4 align-middle">Mar 10, 2023</td>
                        <td className="p-4 align-middle">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="destructive" size="sm">
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="subscribers">
          <Card>
            <CardHeader>
              <CardTitle>Subscriber Management</CardTitle>
              <CardDescription>View and manage your subscribers and their access levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Plan</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Joined</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 align-middle">John Doe</td>
                        <td className="p-4 align-middle">john.doe@example.com</td>
                        <td className="p-4 align-middle">Premium</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                            Active
                          </div>
                        </td>
                        <td className="p-4 align-middle">Jan 15, 2023</td>
                        <td className="p-4 align-middle">
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 align-middle">Mary Kamau</td>
                        <td className="p-4 align-middle">mary.k@research.org</td>
                        <td className="p-4 align-middle">Standard</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                            Active
                          </div>
                        </td>
                        <td className="p-4 align-middle">Mar 22, 2023</td>
                        <td className="p-4 align-middle">
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 align-middle">David Ochieng</td>
                        <td className="p-4 align-middle">d.ochieng@uonbi.ac.ke</td>
                        <td className="p-4 align-middle">Basic</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                            Expiring
                          </div>
                        </td>
                        <td className="p-4 align-middle">Feb 10, 2023</td>
                        <td className="p-4 align-middle">
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 align-middle">Sarah Wanjiku</td>
                        <td className="p-4 align-middle">swanjiku@gmail.com</td>
                        <td className="p-4 align-middle">Premium</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                            Expired
                          </div>
                        </td>
                        <td className="p-4 align-middle">Nov 5, 2022</td>
                        <td className="p-4 align-middle">
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
