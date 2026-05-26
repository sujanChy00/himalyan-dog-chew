import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/our-story')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/our-story"!</div>
}
