import { Link } from "react-router-dom";
import { TableCellsIcon, UserIcon } from '@heroicons/react/24/solid'
import { useAuth } from "../../context/AuthContext";
import { useMemo } from "react";
import { MenuItem } from "../../types/General";

const Sidebar = () => {
  const { user } = useAuth()
  const menuItems: MenuItem[] = useMemo(() => {
    switch (user?.role) {
      case "admin":
      case "moderator":
        return [
          { id: "Pq4Xj7Lm1Vb8Zr6", name: 'Submissions', link: "/home/officer/submissions", icon: TableCellsIcon, adminOnly: true },
        ]
      case "user":
        return [
          { id: "Xy2Zk8LmN4Qp7Rt", name: 'Info', link: `/home/user/info`, icon: UserIcon, adminOnly: false },
        ]
      default:
        return []
    }
  }, [user])

  return (
    <aside id="sidebar" className="fixed top-0 left-0 z-20 flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
      <div className="flex flex-col flex-1 gap-3 pt-5 pb-4 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200">
        <ul className="pb-2 space-y-2">
          {
            menuItems.map((item: MenuItem) => (
              <li key={item.id}>
                <Link to={item.link}
                  className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                  {
                    (typeof item.icon === "string") ?
                      <img className="h-8 mr-3" src={item.icon} alt="icon" />
                      :
                      <item.icon width={32} className="mr-3" />
                  }
                  <span className="ml-3" sidebar-toggle-item="">{item.name}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar