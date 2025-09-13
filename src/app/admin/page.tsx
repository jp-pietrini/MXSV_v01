"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Settings,
  Users,
  Building,
  Ticket,
  Package,
  Mail,
  HelpCircle,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Download
} from "lucide-react"
import { Container, SectionHeader, Card, CardContent, CardHeader, CardTitle, Button, Badge } from "@/components/ui"
import speakersData from "@/data/speakers.json"
import sponsorsData from "@/data/sponsors.json"
import ticketsData from "@/data/tickets.json"
import sectionsData from "@/data/sections.json"

const AdminStats = () => {
  const stats = [
    { label: "Total Speakers", value: speakersData.length, icon: Users },
    { label: "Active Sponsors", value: sponsorsData.filter(s => s.isVisible).length, icon: Building },
    { label: "Ticket Types", value: ticketsData.length, icon: Ticket },
    { label: "Contact Forms", value: 23, icon: Mail }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <stat.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

const SectionVisibilityToggle = () => {
  const [sections, setSections] = useState(sectionsData)

  const toggleVisibility = (sectionId: string) => {
    setSections(prev => prev.map(section =>
      section.id === sectionId
        ? { ...section, isVisible: !section.isVisible }
        : section
    ))
  }

  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Settings className="h-5 w-5" />
          <span>Section Visibility</span>
        </CardTitle>
        <p className="text-sm text-gray-600">
          Control which sections are visible on the website
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {sections.map((section) => (
            <div key={section.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="font-medium text-gray-900">{section.displayName}</span>
                <Badge variant={section.isVisible ? "default" : "secondary"}>
                  {section.isVisible ? "Visible" : "Hidden"}
                </Badge>
              </div>
              <button
                onClick={() => toggleVisibility(section.id)}
                className={`p-2 rounded-lg transition-colors ${
                  section.isVisible
                    ? "text-green-600 hover:bg-green-50"
                    : "text-gray-400 hover:bg-gray-50"
                }`}
              >
                {section.isVisible ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const DataTable = ({ title, data, icon: Icon }: any) => {
  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon className="h-5 w-5" />
            <span>{title}</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 font-medium text-gray-900">Name</th>
                <th className="text-left py-2 font-medium text-gray-900">Status</th>
                <th className="text-left py-2 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 5).map((item: any, index: number) => (
                <tr key={item.id || index} className="border-b border-gray-100">
                  <td className="py-3">
                    <div>
                      <p className="font-medium text-gray-900">{item.name || item.title}</p>
                      {item.company && (
                        <p className="text-xs text-gray-600">{item.company}</p>
                      )}
                      {item.tier && (
                        <p className="text-xs text-gray-600 capitalize">{item.tier}</p>
                      )}
                    </div>
                  </td>
                  <td className="py-3">
                    <Badge variant={item.isVisible || item.isActive ? "default" : "secondary"}>
                      {item.isVisible || item.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </td>
                  <td className="py-3">
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {data.length > 5 && (
            <div className="text-center py-4">
              <Button variant="ghost" size="sm">
                View All ({data.length})
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <SectionHeader
              subtitle="Admin Panel"
              title="Content Management"
              description="Manage your MXSV website content and settings"
              size="md"
              centered={false}
            />

            <div className="hidden sm:flex space-x-3">
              <Link href="/experiments">
                <Button variant="ghost">
                  View Experiments
                </Button>
              </Link>
              <Button>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <AdminStats />

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Data Tables */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <DataTable
                title="Speakers"
                data={speakersData}
                icon={Users}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <DataTable
                title="Sponsors"
                data={sponsorsData}
                icon={Building}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <DataTable
                title="Tickets"
                data={ticketsData}
                icon={Ticket}
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Section Visibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <SectionVisibilityToggle />
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="secondary" className="w-full justify-start">
                      <Package className="h-4 w-4 mr-2" />
                      Add New Product
                    </Button>
                    <Button variant="secondary" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Import Speakers
                    </Button>
                    <Button variant="secondary" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Newsletter
                    </Button>
                    <Button variant="secondary" className="w-full justify-start">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Website</span>
                      <Badge variant="default">Online</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Database</span>
                      <Badge variant="default">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Email Service</span>
                      <Badge variant="default">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Storage</span>
                      <Badge variant="secondary">Static Files</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 text-sm text-gray-600"
        >
          <p>
            Admin panel for MXSV 2026 • Using static data for demonstration •
            Key: <code className="px-2 py-1 bg-gray-100 rounded text-xs">Arbol2026</code>
          </p>
        </motion.div>
      </Container>
    </div>
  )
}