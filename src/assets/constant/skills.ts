export interface SkillGroupTypes {
    id: string;
    /** i18n key of the group title. */
    titleKey: string;
    items: string[];
}

export const skillGroups: SkillGroupTypes[] = [
    {
        id: 'frontend',
        titleKey: 'about.skills.frontend',
        items: [
            'React',
            'Next.js (App Router, SSR)',
            'TypeScript',
            'JavaScript',
            'HTML5 / CSS3 / SCSS',
            'Tailwind CSS',
            'Framer Motion',
        ],
    },
    {
        id: 'state-forms',
        titleKey: 'about.skills.stateForms',
        items: ['Redux Toolkit', 'Zustand', 'TanStack Query', 'React Hook Form', 'Zod'],
    },
    {
        id: 'backend',
        titleKey: 'about.skills.backend',
        items: [
            'Node.js',
            'NestJS',
            'Express.js',
            'REST APIs',
            'WebSockets (Socket.IO)',
            'JWT / OAuth 2.0',
            'RBAC',
        ],
    },
    {
        id: 'databases',
        titleKey: 'about.skills.databases',
        items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Mongoose', 'pgvector', 'Supabase'],
    },
    {
        id: 'ai-llm',
        titleKey: 'about.skills.aiLlm',
        items: [
            'Azure AI Foundry',
            'Azure OpenAI',
            'OpenAI API',
            'Claude API',
            'AI agents',
            'MCP',
            'RAG',
            'Vector search',
        ],
    },
    {
        id: 'cloud-devops',
        titleKey: 'about.skills.cloudDevops',
        items: [
            'Microsoft Azure',
            'AWS S3',
            'Docker',
            'GitHub Actions / CI/CD',
            'Linux',
            'Nginx',
            'PM2',
            'VPS (Henghost)',
            'Sentry',
        ],
    },
    {
        id: 'integrations-tools',
        titleKey: 'about.skills.integrationsTools',
        items: [
            'Stripe',
            'HubSpot (CRM, API)',
            'ERP integrations',
            'Git / GitHub',
            'Turborepo',
            'Jest',
            'Postman',
            'Figma',
            'Claude Code',
            'Cursor',
        ],
    },
];
