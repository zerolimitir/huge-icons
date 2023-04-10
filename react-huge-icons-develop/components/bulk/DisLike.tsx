import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDisLike = (
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
            d='M18 15h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Z'
        />
        <path
            fill='currentColor'
            d='M8.123 3h3.666a4 4 0 0 1 2.219.672l1.547 1.031a1 1 0 0 1 .445.832v8.2a1 1 0 0 1-.132.496L12 21h-1.329c-1.996 0-3.187-2.225-2.08-3.887L10 15H4.562a2 2 0 0 1-1.94-2.485l1.62-6.485A4 4 0 0 1 8.124 3Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDisLike);
export default ForwardRef;
