import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../../lib/sanity.client';
import Image from 'next/image';
import urlFor from '../../../../lib/urlFor';
import { PortableText } from '@portabletext/react';
import { RichTextComponent } from '../../../../components/RichTextComponent';
import Link from 'next/link';

type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 60; // Revalidate with build and start every 60 seconds.

export async function generateStaticParams() {
    const query = groq`*[_type=="post"]
    {
        slug
    }`;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map(slug => ({
        slug,
    }));
}

async function Post({ params: { slug } }: Props) {
    
    const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `

    const post: Post = await client.fetch(query, { slug });

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center bg-white">
              <h1 className="text-5xl font-bold text-black mt-12 mb-8">404 - Page Not Found</h1>
              <p className="text-2xl font-semibold text-black mb-8">
                Sorry, we couldn't find the page you were looking for.
              </p>
              <Link href="/" className="bg-black text-yellow-400 py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                  Go back to homepage
              </Link>
            </div>
        );
    }

    return (
        <article className="px-10 pb-28">
            <section className="space-y-2 border-[#EFE335] text-white">
                <div className="relative min-h-56 flex flex-col md:flex-row
                                    justify-between">
                    <div className="absolute top-0 w-full h-full opacity-10
                                    blur-sm p-10">
                        { post.mainImage && (
                            <Image
                                className="object-cover object-center mx-auto"
                                src={ urlFor(post.mainImage)?.url() }
                                alt={ post.author.name } 
                                fill
                            />
                        )}
                    </div>

                    <section className="p-5 bg-[#EFE335] w-full">
                        <div className="flex flex-col md:flex-row 
                                        justify-between gap-y-5">
                            <div>
                                <h1 className="text-4xl font-extrabold text-black">
                                    { post.title }
                                </h1>

                                <p className="text-black">
                                    { new Date(post._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric"
                                    })} 
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Image 
                                    className="rounded-full"
                                    src={ urlFor(post.author.image).url() }
                                    alt={ post.author.name }
                                    height={ 40 }
                                    width={ 40 }
                                />

                                <div className="w-64">
                                    <h3 className="text-lg font-bold text-black">
                                       { post.author.name } 
                                    </h3>
                                    <div>
                                        { /* Add author bio */ }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="italic pt-10 text-black">
                                { post.description }
                            </h2>
                            <div className="flex items-center justify-end mt-auto space-x-2">
                                { post.categories.map((category) => (
                                    <p 
                                        key={ category._id }
                                        className="bg-gray-800 text-white px-3 py-1
                                                    rounded-full text-sm font-semibold mt-4"
                                    >
                                        { category.title }
                                    </p>
                                )) }
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <PortableText value={ post.body } components={ RichTextComponent } />
        </article>
    )
}

export default Post