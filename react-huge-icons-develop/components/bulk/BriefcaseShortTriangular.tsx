import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseShortTriangular = (
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
            fillRule='evenodd'
            d='M11 2.75A2.25 2.25 0 0 0 8.75 5v1a.75.75 0 0 1-1.5 0V5A3.75 3.75 0 0 1 11 1.25h2A3.75 3.75 0 0 1 16.75 5v1a.75.75 0 0 1-1.5 0V5A2.25 2.25 0 0 0 13 2.75h-2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M2 10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M6 6h12a4 4 0 0 1 4 4s-2.278 2.23-8.036 2.537c-.264.014-.482-.191-.588-.433a1.5 1.5 0 0 0-2.727-.055c-.115.237-.34.433-.603.41C4.276 11.959 2 10 2 10a4 4 0 0 1 4-4Z'
        />
        <rect width={1.5} height={2.794} x={11.25} y={12} fill='currentColor' rx={0.75} />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseShortTriangular);
export default ForwardRef;
