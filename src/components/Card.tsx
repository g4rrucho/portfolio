import { Card as ShadcnCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  stripClassName?: string;
}> = ({ children, className, stripClassName = "bg-primary" }) => {
  return (
    <ShadcnCard
      className={cn(
        "relative overflow-hidden rounded-md hover:shadow-xl transition-shadow duration-300 ",
        className
      )}
    >
      <div
        className={cn("absolute left-0 top-0 bottom-0 w-1 ", stripClassName)}
      ></div>
      {children}
    </ShadcnCard>
  );
};

export default Card;
