import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeFast = (
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
            d='M6 1.25A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h16a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 18V6A3.25 3.25 0 0 1 6 2.75h12A3.25 3.25 0 0 1 21.25 6v4a.75.75 0 0 0 1.5 0V6A4.75 4.75 0 0 0 18 1.25H6Zm6 4a.75.75 0 0 1 .75.75v4.145a2 2 0 1 1-1.531 3.697L9.53 15.53a.75.75 0 0 1-1.06-1.06l1.688-1.689a2 2 0 0 1 1.092-2.636V6a.75.75 0 0 1 .75-.75ZM15.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75ZM18 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeFast);
export default ForwardRef;
