import React from 'react';

type Props = { title: string; slug: string; url: string };

function SlideoutLink({ title, slug, url }: Props) {
    return (
        <li className="account-slideout-link relative font-medium">
            <a
                className="group ml-8 block text-left text-xl font-medium hover:text-blue"
                href={url}
            >
                {title}{' '}
                <div className="text-3xs text-grey-600/30 group-hover:text-blue">
                    // {slug}
                </div>
            </a>
        </li>
    );
}

export default SlideoutLink;
