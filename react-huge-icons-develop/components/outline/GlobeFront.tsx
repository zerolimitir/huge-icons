import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlobeFront = (
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
            d='M22 9c0 5.523-4.477 10-10 10m0 0C6.477 19 2 14.523 2 9m10 10v3m0 0H9m3 0h3m4-13A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobeFront);
export default ForwardRef;
