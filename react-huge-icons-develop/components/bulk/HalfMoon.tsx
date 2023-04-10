import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHalfMoon = (
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
            d='M5.672 14.869A9.197 9.197 0 0 0 14.475 3 9.197 9.197 0 1 1 3 14.475a9.195 9.195 0 0 0 2.672.394Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHalfMoon);
export default ForwardRef;
