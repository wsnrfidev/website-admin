'use client'

import { StringValidation } from "zod";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Copy, Server } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";
import toast from "react-hot-toast";

interface ApiAlertprops {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertprops["variant"], string> = {
  public: "public",
  admin: "admin",
};

const variantMap: Record<ApiAlertprops["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert: React.FC<ApiAlertprops> = ({
  title,
  description,
  variant = "public",
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("API berhasil dicopy");
  };

  return (
    <Alert>
      <Server className="h-4 w-4" />
      <AlertTitle>
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded bg-muted px-[0,3rem] py-[0,2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant={"outline"} size={"sm"} onClick={onCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
