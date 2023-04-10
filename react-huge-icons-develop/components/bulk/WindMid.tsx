import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWindMid = (
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
            d='M18 9.75A3.25 3.25 0 0 0 14.75 13a.75.75 0 0 1-1.5 0A4.75 4.75 0 1 1 18 17.75H2a.75.75 0 0 1 0-1.5h16a3.25 3.25 0 0 0 0-6.5Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8 7.75A2.25 2.25 0 0 0 5.75 10a.75.75 0 0 1-1.5 0A3.75 3.75 0 1 1 8 13.75H2a.75.75 0 0 1 0-1.5h6a2.25 2.25 0 0 0 0-4.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWindMid);
export default ForwardRef;
