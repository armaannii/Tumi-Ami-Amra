"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient, signUp } from "@/lib/auth-client";
import { Github } from "lucide-brands";
import { cn } from "cn";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";

import AuthShell, {
  authFieldInput,
  authFieldLabel,
  authSocialButton,
  authSubmitButton,
  GoogleIcon,
} from "@/components/auth/auth-shell";
import { buttonStyles } from "@/lib/ui";

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check password matching
    if (password !== confirmPassword) {
      setConfirmError("The two passwords do not match.");
      return;
    }

    setConfirmError("");
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(
        formData.entries()
      ) as Record<string, string>;

      const { error } = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Account could not be created");
        return;
      }

      toast.success("Signup successful!");
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
      callbackURL: "/",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  return (
    <AuthShell
      eyebrow="Join the community"
      title="Create an account"
      subtitle="Create a new account to begin a safe journey — discover events near you and start making a difference."
      backLabel="Back to home"
    >
      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
        {/* Name */}
        <TextField
          isRequired
          name="name"
          type="text"
          autoComplete="name"
        >
          <Label className={authFieldLabel}>Name</Label>
          <Input
            placeholder="Example: Rahim Uddin"
            className={authFieldInput}
          />
          <FieldError />
        </TextField>

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

        {/* Profile photo  */}
        <TextField
          name="photo"
          type="text"
          autoComplete="url"
        >
          <Label className={authFieldLabel}>Profile Photo URL</Label>
          <Input
            placeholder="https://images.unsplash.com/_"
            className={authFieldInput}
          />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters.";
            }

            if (!/[A-Z]/.test(value)) {
              return "at least one uppercase letter";
            }

            if (!/[0-9]/.test(value)) {
              return "at least one number";
            }

            return null;
          }}
        >
          <Label className={authFieldLabel}>Password</Label>
          <Input
            placeholder="At least 8 characters"
            className={authFieldInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Description className="text-xs text-muted-foreground">
            At least 8 characters, 1 uppercase letter, and 1 number
          </Description>
          <FieldError />
        </TextField>

        {/* Confirm Password */}
        <TextField
          isRequired
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
        >
          <Label className={authFieldLabel}>Confirm password</Label>
          <Input
            placeholder="Write again"
            className={authFieldInput}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmError("");
            }}
          />
          {confirmError && (
            <p className="text-sm text-destructive" role="alert">
              {confirmError}
            </p>
          )}
        </TextField>

        {/* Signup Button */}
        <Button
          type="submit"
          className={cn(buttonStyles("primary"), authSubmitButton)}
          isDisabled={isLoading}
        >
          {isLoading ? "Being created..." : "Create an account"}
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-forest/15 dark:bg-white/15" />
          <span className="font-display text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
            or
          </span>
          <div className="h-px flex-1 bg-forest/15 dark:bg-white/15" />
        </div>

        {/* Social Signup */}
        <div className="flex flex-col gap-3">
          <Button
            type="button"
            className={cn(buttonStyles("outline"), authSocialButton)}
            onClick={handleGoogleSignIn}
          >
            <GoogleIcon />
            Continue with Google
          </Button>

          <Button
            type="button"
            className={cn(buttonStyles("outline"), authSocialButton)}
            onClick={handleGithubSignIn}
          >
            <Github className="size-4 shrink-0" />
            Continue with GitHub
          </Button>
        </div>

        {/* Sign In */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/pages/log-in"
            className="font-display font-semibold tracking-wide text-forest uppercase underline decoration-brand decoration-2 underline-offset-4 dark:text-brand"
          >
            Log In
          </Link>
        </p>
      </Form>
    </AuthShell>
  );
}
