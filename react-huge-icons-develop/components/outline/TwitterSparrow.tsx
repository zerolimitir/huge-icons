import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTwitterSparrow = (
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
            d='M15.286 4c-2.104 0-3.81 1.79-3.81 4 0 .334.04.658.113.968C9.3 8.968 5.7 8.444 3 4.888c0 8.89 3.6 11.408 5.4 11.556-1.35 1.334-3.454 2.32-5.4 2.506.837.76 3.46 1.017 4.667 1.05 6.241 0 11.314-5.253 11.426-11.778C20.29 7.444 20.86 5.334 21 4.89c-.583.612-1.8.889-2.77.573C17.532 4.569 16.472 4 15.286 4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTwitterSparrow);
export default ForwardRef;
