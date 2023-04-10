import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudHalfMoonRainMid = (
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
            d='M17 10c-.545 0-1.07.087-1.561.249a7.027 7.027 0 0 0-3.433-3.573A5.002 5.002 0 0 1 16.106 2a4 4 0 0 0 5.867 4.4 4.993 4.993 0 0 1-2.026 4.56A4.978 4.978 0 0 0 17 10Z'
        />
        <path
            fill='currentColor'
            d='M2 13a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751 7.027 7.027 0 0 0-3.433-3.573A7 7 0 0 0 2 13Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M11 20.5c0 1.105-.672 1.5-1.5 1.5S8 21.605 8 20.5 9.5 18 9.5 18s1.5 1.395 1.5 2.5Zm6 0c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5 1.5-2.5 1.5-2.5 1.5 1.395 1.5 2.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudHalfMoonRainMid);
export default ForwardRef;
