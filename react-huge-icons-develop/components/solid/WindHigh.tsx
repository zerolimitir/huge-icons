import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWindHigh = (
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
            d='M8 2.75A2.25 2.25 0 0 0 5.75 5a.75.75 0 0 1-1.5 0A3.75 3.75 0 1 1 8 8.75H2a.75.75 0 0 1 0-1.5h6a2.25 2.25 0 0 0 0-4.5Zm10 2A3.25 3.25 0 0 0 14.75 8a.75.75 0 0 1-1.5 0A4.75 4.75 0 1 1 18 12.75H2a.75.75 0 0 1 0-1.5h16a3.25 3.25 0 0 0 0-6.5ZM10.75 19A2.25 2.25 0 1 0 13 16.75H2a.75.75 0 0 1 0-1.5h11A3.75 3.75 0 1 1 9.25 19a.75.75 0 0 1 1.5 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWindHigh);
export default ForwardRef;
