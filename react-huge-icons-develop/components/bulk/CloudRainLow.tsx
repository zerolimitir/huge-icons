import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudRainLow = (
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
            d='M2 11a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751A7.002 7.002 0 0 0 2 11Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M13.5 18.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S12 16 12 16s1.5 1.395 1.5 2.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudRainLow);
export default ForwardRef;
