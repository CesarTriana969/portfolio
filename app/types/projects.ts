export interface Projects {
  id: number;
  title: string;
  description: string;
  video: string;
  tags: string[];
  category: string[];
  slug: string;
  githubUrl: string;
}

export interface ProjectsResponse {
  projects: Projects[];
}