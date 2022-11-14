import { Head, usePage } from '@inertiajs/inertia-react';

export default function Meta({ title = 'Parsinta', author = 'irsyadadl', description, image }) {
    const current_url = usePage().props.ziggy.location;
    return (
        <Head>
            <title>{title}</title>
            <meta name='robots' content='index, follow' />
            <meta head-key='title' name='title' content={title} />
            <meta
                head-key='description'
                name='description'
                content={
                    description ||
                    'Tingkatkan kemampuan Anda dengan parsinta dengan mendorong keterampilan Anda ke tingkat berikutnya, melalui seri-seri yang ada disini seperti Laravel, Vue, React, Tailwind CSS dan banyak lagi.'
                }
            />
            <meta head-key='author' name='author' content={author} />
            <meta head-key='og:type' property='og:type' content='website' />
            <meta head-key='og:url' property='og:url' content={current_url} />
            <meta head-key='og:title' property='og:title' content={title} />
            <link rel='canonical' href={current_url} />
            <meta
                head-key='og:description'
                property='og:description'
                content={description || 'A robust platform for growing up your dev skills'}
            />
            <meta head-key='og:image' property='og:image' content={image || 'https://parsinta.com/og-image.png'} />

            <meta head-key='twitter:card' property='twitter:card' content='summary_large_image' />
            <meta head-key='twitter:url' property='twitter:url' content={current_url} />
            <meta head-key='twitter:title' property='twitter:title' content={title} />
            <meta
                head-key='twitter:description'
                property='twitter:description'
                content={description || 'A robust platform for growing up your dev skills'}
            />
            <meta
                head-key='twitter:image'
                property='twitter:image'
                content={image || 'https://parsinta.com/og-image.png'}
            />
        </Head>
    );
}
