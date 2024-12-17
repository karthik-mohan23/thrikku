import { MoveLeft } from "lucide-react";
import Link from "next/link";

function BackButton({ to }: { to: string }) {
  return (
    <Link
      href={to}
      className="border border-orange-500 rounded-lg px-3 py-2 space-x-1 group">
      <MoveLeft className="inline-block group-hover:-translate-x-1 transition-all" />
      <span>Go back</span>
    </Link>
  );
}
export default BackButton;