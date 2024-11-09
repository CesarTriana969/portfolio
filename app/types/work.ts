export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface ExperienceResponse {
  experiences: Experience[];
}