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
            d='M11 3.125a2.25 2.25 0 0 0-2.25 2.25v1a.75.75 0 0 1-1.5 0v-1A3.75 3.75 0 0 1 11 1.625h2a3.75 3.75 0 0 1 3.75 3.75v1a.75.75 0 0 1-1.5 0v-1A2.25 2.25 0 0 0 13 3.125h-2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M6 6.375h12a4 4 0 0 1 4 4s-2.352 2.302-8.315 2.55a.223.223 0 0 1-.22-.18 1.5 1.5 0 0 0-2.915-.059.223.223 0 0 1-.227.17C4.348 12.397 2 10.375 2 10.375a4 4 0 0 1 4-4Z'
        />
        <path
            fill='currentColor'
            d='M10.5 14.258a.202.202 0 0 0-.187-.2C5.623 13.702 3 12.468 2 11.888v6.487a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6.446c-1.003.658-3.631 2.031-8.306 2.235a.203.203 0 0 0-.194.201v.105a1.5 1.5 0 0 1-3 0v-.212Z'
        />
        <rect width={1.5} height={2.794} x={11.25} y={12.375} fill='currentColor' rx={0.75} />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseShortTriangular);
export default ForwardRef;
