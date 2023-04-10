import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStopwatch = (
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
            d='M9.204 4.136A10.258 10.258 0 0 1 12 3.75c.97 0 1.908.135 2.796.386a.75.75 0 1 0 .408-1.444A11.758 11.758 0 0 0 12 2.25c-1.11 0-2.185.154-3.204.442a.75.75 0 1 0 .408 1.444ZM20.5 13.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0ZM12.75 9a.75.75 0 0 0-1.5 0v3.7a1.5 1.5 0 1 0 1.5 0V9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStopwatch);
export default ForwardRef;
