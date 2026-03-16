import { ArrowRight, CalendarDays, Clock3, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Workshop } from "@/lib/workshops";

type WorkshopCardProps = {
  onRegister: (workshop: Workshop) => void;
  workshop: Workshop;
};

export const WorkshopCard = ({ onRegister, workshop }: WorkshopCardProps) => {
  return (
    <article className="luxe-panel group relative h-full overflow-hidden rounded-[1.8rem] border border-primary/20 bg-card/55 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(211,179,113,0.12),_transparent_28%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-primary">
            Free Virtual Workshop
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
            {workshop.audience}
          </span>
        </div>

        <h3 className="text-2xl font-semibold leading-tight text-foreground">{workshop.title}</h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{workshop.description}</p>

        <dl className="mt-6 grid gap-3 border-t border-white/10 pt-6 text-sm text-foreground/90">
          <div className="flex items-start gap-3">
            <CalendarDays className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">Date</dt>
              <dd>{workshop.date}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock3 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">Time</dt>
              <dd>{workshop.time}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">Audience</dt>
              <dd>{workshop.audience}</dd>
            </div>
          </div>
        </dl>

        <Button
          type="button"
          onClick={() => onRegister(workshop)}
          data-cta="workshop-register"
          data-workshop-id={workshop.id}
          className="mt-8 w-full rounded-full bg-primary px-6 py-6 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground hover:bg-primary/90"
        >
          Register
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
};
