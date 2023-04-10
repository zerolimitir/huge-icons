import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationMap = (
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
            d='m3.154 19.23.833-2A2 2 0 0 1 5.833 16h12.334a2 2 0 0 1 1.846 1.23l.833 2A2 2 0 0 1 19 22H5a2 2 0 0 1-1.846-2.77Z'
        />
        <path
            fill='currentColor'
            d='M19 9.111C19 13.04 14.625 18 12 18s-7-4.961-7-8.889C5 5.184 8.134 2 12 2s7 3.184 7 7.111Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M14.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationMap);
export default ForwardRef;
