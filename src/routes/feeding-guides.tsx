import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/feeding-guides')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/feeding-guides"!</div>
}
