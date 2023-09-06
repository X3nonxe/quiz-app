import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import SigninButton from "./components/SigninButton";
import { getAuthSession } from "./lib/next-auth";
import { redirect } from "next/navigation";

// `app/page.tsx` is the UI for the `/` URL
export default async function Page() {
  const session = await getAuthSession();

  if (session?.user) {
    // If the user is already signed in, redirect to the dashboard
    redirect("/dashboard");
  }
  
  return (
    <div className="grid h-screen place-items-center">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizqu</CardTitle>
          <CardDescription>
            Quizqu is a quiz app that allows you to create quizzes and share them with your friends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SigninButton text="Sign with google!" />
        </CardContent>
      </Card>
    </div>
  );
}
