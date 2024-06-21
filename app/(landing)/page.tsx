import { redirect } from 'next/navigation';

export default function Page() {
  // Perform the redirect
  redirect('/explore');

  return null; // This component doesn't render anything
}
