import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapAccordion = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M17.59 17.476c.21-.704.34-1.427.34-2.1a5.59 5.59 0 0 0-1.18-3.444V4.998c1.217-.327 2.514-1.075 3.514-1.747.708-.476 1.736.019 1.736.872v9.67a1.86 1.86 0 0 1-.722 1.495c-.827.625-2.254 1.614-3.689 2.188Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M15.25 10.569A6.054 6.054 0 0 0 12 9.627a6.052 6.052 0 0 0-3.25.94V1.943c1.278.106 2.264.856 3.25 1.607.986.75 1.972 1.5 3.25 1.606v5.413Z'
        />
        <path
            fill='currentColor'
            d='M7.25 11.932a5.614 5.614 0 0 0-1.18 3.356c-.836.371-1.653.863-2.334 1.32C3.028 17.084 2 16.59 2 15.736v-9.67c0-.585.255-1.141.722-1.494.99-.748 2.836-2.015 4.528-2.471v9.831Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.145 17.492c.265-.754.416-1.493.416-2.117 0-2.418-2.042-4.379-4.561-4.379-2.337 0-4.263 1.687-4.53 3.862a4.25 4.25 0 0 0-.032.517c0 2.419 2.281 6.569 4.562 6.569 1.692 0 3.385-2.285 4.145-4.452ZM12 16.47a1.368 1.368 0 1 0 0-2.737 1.368 1.368 0 0 0 0 2.737Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordion);
export default ForwardRef;
