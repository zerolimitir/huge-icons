import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowReturnCircle = (
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
        <circle cx={12} cy={12} r={10} stroke='currentColor' strokeWidth={1.5} />
        <path
            fill='currentColor'
            d='M14.53 6.47a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM16 9l.53.53a.75.75 0 0 0 0-1.06L16 9Zm-2.53 1.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM16 15.75a.75.75 0 0 0 0-1.5v1.5Zm-2.53-8.22 2 2 1.06-1.06-2-2-1.06 1.06Zm2 .94-2 2 1.06 1.06 2-2-1.06-1.06Zm.53-.22h-5v1.5h5v-1.5Zm-5 7.5h5v-1.5h-5v1.5ZM7.25 12A3.75 3.75 0 0 0 11 15.75v-1.5A2.25 2.25 0 0 1 8.75 12h-1.5ZM11 8.25A3.75 3.75 0 0 0 7.25 12h1.5A2.25 2.25 0 0 1 11 9.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowReturnCircle);
export default ForwardRef;
