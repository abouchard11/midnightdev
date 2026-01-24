import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import { useState } from "react";

interface ContactDialogProps {
  triggerText?: string;
  service?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export default function ContactDialog({ 
  triggerText = "CONTACT US", 
  service,
  className,
  variant = "default",
  size = "default"
}: ContactDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-black border-white/10 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tighter">
            INITIATE <span className="text-primary">PROTOCOL</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter your details below to start the conversation.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ContactForm service={service} onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
