import React, { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const tabName = ['all', 'pending', 'completed']
  const [tabs, setTabs] = useState('all')

  const handleTabls = (tab: string) => {
    setTabs(tab)
  }

  const renderTabs = () => {
    if (tabName.length > 0) {
      return tabName.map((tab) => {
        const activeTabs =
          tab === tabs
            ? 'bg-[#334155] text-[#fff]'
            : 'text-[#334155] border-[1px] border-[#E2E8F0]'
        return (
          <Tabs.Trigger
            key={tab}
            value={tab}
            className={`mr-2 gap-2 rounded-[10px]  px-6 py-3 text-sm font-bold capitalize ${activeTabs}`}
          >
            {tab}
          </Tabs.Trigger>
        )
      })
    }
  }

  const renderTabsContent = () => {
    if (tabName.length > 0) {
      return tabName.map((tab) => {
        const status = tab == tabs ? tabs : ''
        return (
          <Tabs.TabsContent key={tab} value={status}>
            <TodoList status={status} />
          </Tabs.TabsContent>
        )
      })
    }
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root
          defaultValue="all"
          value={tabs}
          orientation="vertical"
          className="mt-10"
          onValueChange={handleTabls}
        >
          <Tabs.List aria-label="tabs example">{renderTabs()}</Tabs.List>
          <div className="pt-10">{renderTabsContent()}</div>
        </Tabs.Root>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
