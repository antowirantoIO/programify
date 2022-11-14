import { motion } from 'framer-motion';
import React from 'react';
import LazyLoad from 'react-lazy-load';

export default function Image({ className, alt, height, src, width }) {
    return (
        <LazyLoad height={height} width={width} threshold={0.95}>
            <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={className}
                src={src}
                alt={alt}
            />
        </LazyLoad>
    );
}
