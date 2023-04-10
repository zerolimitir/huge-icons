import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgClapperboard = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M10 17.131v-4.263a1 1 0 0 1 1.555-.832l3.197 2.132a1 1 0 0 1 0 1.664l-3.197 2.131A1 1 0 0 1 10 17.131Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m8.663 2-3 6h1.674l3-6h6.326l-3 6h1.674l2.993-5.987A4 4 0 0 1 22 6v2H2V6a4 4 0 0 1 4-4h2.663Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClapperboard);
export default ForwardRef;
