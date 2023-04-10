import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTransform = (
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
            d='M6 1.25A4.75 4.75 0 0 0 1.25 6v2a.75.75 0 0 0 1.5 0V6A3.25 3.25 0 0 1 6 2.75h2a.75.75 0 0 0 0-1.5H6Zm10 0a.75.75 0 0 0 0 1.5h2A3.25 3.25 0 0 1 21.25 6v2a.75.75 0 0 0 1.5 0V6A4.75 4.75 0 0 0 18 1.25h-2ZM2.75 16a.75.75 0 0 0-1.5 0v2A4.75 4.75 0 0 0 6 22.75h2a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 18v-2Zm20 0a.75.75 0 0 0-1.5 0v2A3.25 3.25 0 0 1 18 21.25h-2a.75.75 0 0 0 0 1.5h2A4.75 4.75 0 0 0 22.75 18v-2ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTransform);
export default ForwardRef;
