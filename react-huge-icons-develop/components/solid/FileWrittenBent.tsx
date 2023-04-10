import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileWrittenBent = (
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
            d='M3 16.5V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v11.5h-8.7a.8.8 0 0 0-.8.8c0 1.767-1.457 3.2-3.225 3.2C4.48 20.5 3 19.045 3 17.25v-.75ZM7 6.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H7ZM6.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm16.627 6.99A4.002 4.002 0 0 1 19 22H7a4.002 4.002 0 0 0 3.877-3.01c.136-.535.57-.99 1.123-.99h10c.552 0 1.013.455.877.99Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileWrittenBent);
export default ForwardRef;
