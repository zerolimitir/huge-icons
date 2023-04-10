import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTextSpacing = (
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
            d='M7 4.25a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 0h10v-1.5H7v1.5Z'
        />
        <path
            fill='currentColor'
            d='M12.75 5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm0-8v8h1.5V5h-1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m7 15-2 2m0 0 2 2m-2-2h14m0 0-2-2m2 2-2 2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTextSpacing);
export default ForwardRef;
