"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient, signIn } from "@/lib/auth-client";
import { Github } from "lucide-brands";
import toast from "react-hot-toast";
import { cn } from "cn";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import AuthShell, {
  authFieldInput,
  authFieldLabel,
  authSocialButton,
  authSubmitButton,
  GoogleIcon,
} from "@/components/auth/auth-shell";
import { buttonStyles } from "@/lib/ui";

export default function LogInPage() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(
      formData.entries()
    ) as Record<string, string>;

    setIsLoading(true);

    try {
      const { data: resData, error } = await signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/",
      });

      if (resData) {
        toast.success("Sign In successfull!");
      }

      if (error) {
        toast.error(error.message || "Could not log in");
        return;
      }
    } catch (error) {
      console.error("Something went wrong:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Log in to your account"
      subtitle="Sign in to register for events, track your volunteer hours and manage the events you organise."
      backLabel="Back to home"
    >
      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          autoComplete="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9.\_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              return "Enter a valid email address";
            }

            return null;
          }}
        >
          <Label className={authFieldLabel}>Email</Label>

          <Input
            placeholder="you@example.com"
            className={authFieldInput}
          />

          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          name="password"
          type="password"
          autoComplete="current-password"
        >
          <Label className={authFieldLabel}>Password</Label>

          <Input
            placeholder="Write your password"
            className={authFieldInput}
          />

          <FieldError />
        </TextField>

        {/* Log in Button */}
        <Button
          type="submit"
          className={cn(buttonStyles("primary"), authSubmitButton)}
          isDisabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Log in"}
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-forest/15 dark:bg-white/15" />

          <span className="font-display text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
            or
          </span>

          <div className="h-px flex-1 bg-forest/15 dark:bg-white/15" />
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-3">
          {/* Google */}
          <Button
            type="button"
            className={cn(buttonStyles("outline"), authSocialButton)}
            onClick={handleGoogleSignIn}
          >
            <GoogleIcon />
            Continue with Google
          </Button>

          {/* Github */}
          <Button
            type="button"
            className={cn(buttonStyles("outline"), authSocialButton)}
            onClick={handleGithubSignIn}
          >
            <Github className="size-4 shrink-0" />
            Continue with GitHub
          </Button>
        </div>

        {/* Sign Up */}
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/pages/sign-up"
            className="font-display font-semibold tracking-wide text-forest uppercase underline decoration-brand decoration-2 underline-offset-4 dark:text-brand"
          >
            Register here
          </Link>
        </p>
      </Form>
    </AuthShell>
  );
}
