import { useEffect } from 'react';

type SeoProps = {
    title: string;
    description: string;
};

const Seo = ({ title, description }: SeoProps) => {
    useEffect(() => {
        document.title = title;

        const descriptionTag =
            document.querySelector('meta[name="description"]') ||
            document.head.appendChild(document.createElement('meta'));
        descriptionTag.setAttribute('name', 'description');
        descriptionTag.setAttribute('content', description);

        const ogTitleTag =
            document.querySelector('meta[property="og:title"]') ||
            document.head.appendChild(document.createElement('meta'));
        ogTitleTag.setAttribute('property', 'og:title');
        ogTitleTag.setAttribute('content', title);

        const ogDescriptionTag =
            document.querySelector('meta[property="og:description"]') ||
            document.head.appendChild(document.createElement('meta'));
        ogDescriptionTag.setAttribute('property', 'og:description');
        ogDescriptionTag.setAttribute('content', description);
    }, [title, description]);

    return null;
};

export default Seo;
