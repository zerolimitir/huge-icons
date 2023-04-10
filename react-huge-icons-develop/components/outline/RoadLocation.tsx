import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoadLocation = (
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
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M12 16v1m0-5.5v1M12 7v1m-.832-4H8.386a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702l-1.279-3.409'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M19.424 6.313a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M22.174 6.313c0 2.277-2.75 5.499-4.124 5.499-1.375 0-4.125-3.222-4.125-5.5a4.125 4.125 0 0 1 8.25 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadLocation);
export default ForwardRef;
