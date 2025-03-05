import { Card, CardHeader, CardContent } from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";

type Position = (typeof RESUME_DATA)["positions"][number];

interface PositionPeriodProps {
  start?: Position["start"];
  end?: Position["end"];
}

/**
 * Displays the position period in a consistent format
 */
function PositionPeriod({ start, end }: PositionPeriodProps) {
  if (!start && !end) return null;

  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      aria-label={`Period: ${start ?? "N/A"} to ${end ?? "N/A"}`}
    >
      {start ?? "N/A"} - {end ?? "N/A"}
    </div>
  );
}

interface PositionItemProps {
  position: Position;
}

/**
 * Individual position card component
 */
function PositionItem({ position }: PositionItemProps) {
  const { title, start, end, description } = position;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3
            className="font-semibold leading-none"
            id={`position-${title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {title}
          </h3>
          <PositionPeriod start={start} end={end} />
        </div>
      </CardHeader>
      <CardContent
        className="mt-2 text-foreground/80 print:text-[12px]"
        aria-labelledby={`position-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {description}
      </CardContent>
    </Card>
  );
}

interface PositionListProps {
  positions: readonly Position[];
}

/**
 * Main position of responsibility section component
 * Renders a list of positions
 */
export function PositionOfResponsibility({ positions }: PositionListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="positions-section">
        Position of Responsibility
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="positions-section"
      >
        {positions.map((item) => (
          <article key={item.title} role="article">
            <PositionItem position={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
