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
            stroke='currentColor'
            strokeWidth={1.5}
            d='M8 2.295c-1.867.21-4.14 1.757-5.278 2.618A1.86 1.86 0 0 0 2 6.408v9.669c0 .853 1.028 1.348 1.736.872.928-.623 2.11-1.31 3.247-1.67M8 2.296c3.318-.371 4.682 3.562 8 3.19m-8-3.19v9.475m8-6.285c1.411-.158 3.054-1.08 4.264-1.893.708-.476 1.736.019 1.736.872v9.67a1.86 1.86 0 0 1-.722 1.494c-1.138.86-3.41 2.409-5.278 2.618m0-12.76v6.38'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M17 14.744c0 2.65-2.5 7.2-5 7.2s-5-4.55-5-7.2c0-2.651 2.239-4.8 5-4.8s5 2.149 5 4.8Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.5 14.444a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordion);
export default ForwardRef;
