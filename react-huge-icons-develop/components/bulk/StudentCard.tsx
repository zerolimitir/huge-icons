import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStudentCard = (
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
            d='M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M6 17a3 3 0 1 1 6 0 1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Zm4-13a2 2 0 1 1 4 0v2h-4V4Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18.75 12a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Zm0 4a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
        <circle cx={9} cy={12} r={2} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgStudentCard);
export default ForwardRef;
