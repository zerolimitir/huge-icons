import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCalendar = (
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
            d='M8 1.25a.75.75 0 0 1 .75.75v1.5h6.5V2a.75.75 0 0 1 1.5 0v1.5H17a4 4 0 0 1 4 4v.75H3V7.5a4 4 0 0 1 4-4h.25V2A.75.75 0 0 1 8 1.25Zm-5 8.5h18V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;
