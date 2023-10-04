import { NextUIProvider } from '@nextui-org/react'
import { AppProvider } from '@/context/AppProvider'
import { SessionProvider } from 'next-auth/react'
import 'react-notifications/lib/notifications.css'
import '@/styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </NextUIProvider>
    </SessionProvider>
  )
}
