import { Card, CardHeader, CardContent } from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";

type Achievement = (typeof RESUME_DATA)["achievements"][number];

interface AchievementPeriodProps {
  start?: Achievement["start"];
  end?: Achievement["end"];
}

/**
 * Displays the achievement period in a consistent format
 */
function AchievementPeriod({ start, end }: AchievementPeriodProps) {
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

interface AchievementItemProps {
  achievement: Achievement;
}

/**
 * Individual achievement card component
 */
function AchievementItem({ achievement }: AchievementItemProps) {
  const { title, start, end, description } = achievement;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3
            className="font-semibold leading-none"
            id={`achievement-${title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {title}
          </h3>
          <AchievementPeriod start={start} end={end} />
        </div>
      </CardHeader>
      <CardContent
        className="mt-2 text-foreground/80 print:text-[12px]"
        aria-labelledby={`achievement-${title
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        {description}
      </CardContent>
    </Card>
  );
}

interface AchievementListProps {
  achievements: readonly Achievement[];
}

/**
 * Main achievement section component
 * Renders a list of achievements
 */
export function Achievements({ achievements }: AchievementListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="achievements-section">
        Achievements
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="achievements-section"
      >
        {achievements.map((item) => (
          <article key={item.title} role="article">
            <AchievementItem achievement={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
