"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams } from "next/navigation"
import { Check, CreditCard, Landmark, Smartphone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

export default function SubscribePage() {
  const searchParams = useSearchParams()
  const initialPlan = searchParams.get("plan") || "standard"
  const [selectedPlan, setSelectedPlan] = useState(initialPlan)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would connect to a payment processor
    toast({
      title: "Subscription Successful!",
      description: `You now have ${selectedPlan} access to all materials.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Subscription Plans</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose a plan that works for you and gain access to premium academic materials
        </p>
      </div>

      {/* Subscription Plans */}
      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue={selectedPlan} onValueChange={setSelectedPlan} className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>
          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Basic Plan</CardTitle>
                <CardDescription>Essential access for students on a budget</CardDescription>
                <div className="text-3xl font-bold mt-2">$9.99/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Access to lecture notes
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />5 downloads per month
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
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
                    Premium publications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="standard">
            <Card>
              <CardHeader>
                <CardTitle>Standard Plan</CardTitle>
                <CardDescription>Comprehensive access for serious students</CardDescription>
                <div className="text-3xl font-bold mt-2">$19.99/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Access to all lecture notes
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    20 downloads per month
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Full audio content
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Limited video lectures
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
                    Monthly Q&A sessions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="premium">
            <Card>
              <CardHeader>
                <CardTitle>Premium Plan</CardTitle>
                <CardDescription>Complete access for researchers and professionals</CardDescription>
                <div className="text-3xl font-bold mt-2">$39.99/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Unlimited access to all content
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Unlimited downloads
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Early access to new materials
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Monthly Q&A session access
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Payment Form */}
        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <RadioGroup
                defaultValue={paymentMethod}
                onValueChange={setPaymentMethod}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" /> Credit/Debit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mobile" id="mobile" />
                  <Label htmlFor="mobile" className="flex items-center">
                    <Smartphone className="mr-2 h-4 w-4" /> Mobile Money
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="flex items-center">
                    <Landmark className="mr-2 h-4 w-4" /> Bank Transfer
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {paymentMethod === "card" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input id="cardName" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" required />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "mobile" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input id="phoneNumber" placeholder="+254 712 345 678" required />
                </div>
                <p className="text-sm text-muted-foreground">
                  You will receive a payment prompt on your mobile phone to complete the transaction.
                </p>
              </div>
            )}

            {paymentMethod === "bank" && (
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-md">
                  <h3 className="font-medium mb-2">Bank Account Details</h3>
                  <p className="text-sm mb-1">Bank: Kenya Commercial Bank</p>
                  <p className="text-sm mb-1">Account Name: Prof. Dr. Awino S. Omondi</p>
                  <p className="text-sm mb-1">Account Number: 1234567890</p>
                  <p className="text-sm mb-1">Branch: University Way</p>
                  <p className="text-sm">Reference: Your Full Name</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transferReference">Transfer Reference Number</Label>
                  <Input id="transferReference" placeholder="Enter your bank transfer reference" required />
                </div>
              </div>
            )}

            <div className="mt-6">
              <Button type="submit" className="w-full">
                Subscribe Now - ${selectedPlan === "basic" ? "9.99" : selectedPlan === "standard" ? "19.99" : "39.99"}
                /month
              </Button>
              <p className="text-sm text-center text-muted-foreground mt-2">
                You can cancel your subscription at any time
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
