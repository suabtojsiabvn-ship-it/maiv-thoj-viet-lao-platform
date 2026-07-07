import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Button, GlassCard } from "@/components/ui";

export function FAQCTA() {
  return (
    <GlassCard className="mt-20 p-10 text-center">
      <h3 className="text-3xl font-bold text-white">
        Still Have Questions?
      </h3>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
  If you could not find the answer you are looking for, our
  international patient coordinators are ready to help you plan your
  dental journey.
</p>

      <div className="mt-10 flex justify-center">
        <Link href="/contact">
         <Button asChild size="lg">
  <Link href="/contact">
    <MessageCircle
      size={18}
      className="mr-2"
      aria-hidden="true"
    />
    Talk With Our Team
  </Link>
</Button>
        </Link>
      </div>
    </GlassCard>
  );
}