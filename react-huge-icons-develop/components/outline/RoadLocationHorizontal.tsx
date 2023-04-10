import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoadLocationHorizontal = (
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
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M8.008 8H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-1.913'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M12.5 15h-1m6.5 0h-1M7 15H6'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M16.454 6.276c0 2.361-2.227 6.414-4.454 6.414S7.546 8.637 7.546 6.276C7.546 3.914 9.54 2 12 2s4.454 1.914 4.454 4.276Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.336 6.009a1.336 1.336 0 1 1-2.672 0 1.336 1.336 0 0 1 2.672 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadLocationHorizontal);
export default ForwardRef;
