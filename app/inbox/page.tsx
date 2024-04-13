import React from 'react'
import Conversation from '../components/inbox/Conversation'

function InboxPage() {
  return (
    <main className='p-6 space-y-3'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </main>
  )
}

export default InboxPage