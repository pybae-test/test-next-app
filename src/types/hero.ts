export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  imageSrc: string;
  onCtaClick?: () => void;
}
