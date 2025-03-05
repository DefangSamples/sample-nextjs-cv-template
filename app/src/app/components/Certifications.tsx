import { Card, CardHeader, CardContent } from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";

type Certification = (typeof RESUME_DATA)["certifications"][number];

interface CertificationPeriodProps {
  start?: Certification["start"];
  end?: Certification["end"];
}

/**
 * Displays the certification period in a consistent format
 */
function CertificationPeriod({ start, end }: CertificationPeriodProps) {
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

interface CertificationItemProps {
  certification: Certification;
}

/**
 * Individual certification card component
 */
function CertificationItem({ certification }: CertificationItemProps) {
  const { name, start, end, institution } = certification;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3
            className="font-semibold leading-none"
            id={`certification-${name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {name}
          </h3>
          <CertificationPeriod start={start} end={end} />
        </div>
      </CardHeader>
      <CardContent
        className="mt-2 text-foreground/80 print:text-[12px]"
        aria-labelledby={`certification-${name
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        {institution}
      </CardContent>
    </Card>
  );
}

interface CertificationListProps {
  certifications: readonly Certification[];
}

/**
 * Main certification section component
 * Renders a list of certifications
 */
export function Certifications({ certifications }: CertificationListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="certifications-section">
        Certifications
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="certifications-section"
      >
        {certifications.map((item) => (
          <article key={item.name} role="article">
            <CertificationItem certification={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
