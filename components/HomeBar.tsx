import Link from "next/link"
import { config } from "../config"

export function HomeBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-20 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white hover:text-gray-300 font-bold text-xl">
              {config.projectName}
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href={config.tutorialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Tutorial
            </Link>
            <Link
              href={config.contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

