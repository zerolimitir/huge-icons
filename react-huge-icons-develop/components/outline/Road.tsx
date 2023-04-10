import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoad = (
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
            d='M6.513 5.298A2 2 0 0 1 8.386 4h7.228a2 2 0 0 1 1.873 1.298l4.5 12A2 2 0 0 1 20.114 20H3.886a2 2 0 0 1-1.873-2.702l4.5-12Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M12 16v1m0-5.5v1M12 7v1'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoad);
export default ForwardRef;
