import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFocus = (
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
            fillRule='evenodd'
            d='M6 1.25A4.75 4.75 0 0 0 1.25 6v1.556a.75.75 0 0 0 1.5 0V6A3.25 3.25 0 0 1 6 2.75h1.556a.75.75 0 0 0 0-1.5H6Zm10.444 0a.75.75 0 0 0 0 1.5H18A3.25 3.25 0 0 1 21.25 6v1.556a.75.75 0 0 0 1.5 0V6A4.75 4.75 0 0 0 18 1.25h-1.556ZM2.75 16.444a.75.75 0 0 0-1.5 0V18A4.75 4.75 0 0 0 6 22.75h1.556a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 18v-1.556Zm20 0a.75.75 0 0 0-1.5 0V18A3.25 3.25 0 0 1 18 21.25h-1.556a.75.75 0 0 0 0 1.5H18A4.75 4.75 0 0 0 22.75 18v-1.556ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFocus);
export default ForwardRef;
