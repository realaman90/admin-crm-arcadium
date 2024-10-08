'use client'

import * as React from "react"
import { Search, ChevronDown, RefreshCcw, Import, Upload, Plus } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

const contacts = [
  { id: 1, name: "Thelma Hartmann", company: "Virtual at Spinka - Zemlak", tasks: 2, lastActivity: "today at 2:50 PM", status: "active", tags: [] },
  { id: 2, name: "Dario Tromp", company: "Cutting-edge at Wehner, Bechtelar and Parisian", tasks: 0, lastActivity: "today at 2:46 PM", status: "idle", tags: ["football-fan", "holiday-card"] },
  { id: 3, name: "Osvaldo McKenzie", company: "Bricks-and-clicks at Kling, Hackett and Hills", tasks: 0, lastActivity: "today at 2:45 PM", status: "inactive", tags: ["holiday-card", "vip"] },
  { id: 4, name: "Homer Borer", company: "Open-source at Spinka - Zemlak", tasks: 0, lastActivity: "today at 2:42 PM", status: "active", tags: ["manager"] },
  { id: 5, name: "Angel Schneider", company: "World-class at Franecki, Stamm and Sipes", tasks: 3, lastActivity: "today at 2:40 PM", status: "idle", tags: [] },
  { id: 6, name: "Emmett Bailey", company: "Transparent at Franecki, Stamm and Sipes", tasks: 3, lastActivity: "today at 2:37 PM", status: "inactive", tags: ["manager", "musician"] },
]

export function Contacts() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Atomic CRM</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="opacity-80">DASHBOARD</a></li>
                <li><a href="#" className="font-semibold">CONTACTS</a></li>
                <li><a href="#" className="opacity-80">COMPANIES</a></li>
                <li><a href="#" className="opacity-80">DEALS</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <RefreshCcw className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Jane Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>Jane Doe</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-white shadow rounded-lg">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="text-blue-600">
                SORT BY LAST SEEN DESCENDING
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-blue-600">
                <Import className="mr-2 h-4 w-4" />
                IMPORT
              </Button>
              <Button variant="outline" className="text-blue-600">
                <Upload className="mr-2 h-4 w-4" />
                EXPORT
              </Button>
            </div>
            <Button className="bg-blue-600 text-white">
              <Plus className="mr-2 h-4 w-4" />
              NEW CONTACT
            </Button>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Search className="text-gray-400" />
              <Input placeholder="Search name, company" className="w-64" />
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="pb-2"></th>
                  <th className="pb-2">NAME</th>
                  <th className="pb-2">COMPANY</th>
                  <th className="pb-2">LAST ACTIVITY</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="border-t">
                    <td className="py-2">
                      <Checkbox />
                    </td>
                    <td className="py-2">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarFallback>{contact.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{contact.name}</p>
                          <p className="text-sm text-gray-500">{contact.tasks} tasks</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2">
                      <p>{contact.company}</p>
                      <div className="flex space-x-1 mt-1">
                        {contact.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="py-2">
                      <p>{contact.lastActivity}</p>
                      <div className={`w-2 h-2 rounded-full mt-1 ${
                        contact.status === 'active' ? 'bg-green-500' :
                        contact.status === 'idle' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}