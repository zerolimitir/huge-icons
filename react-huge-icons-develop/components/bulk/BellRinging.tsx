import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBellRinging = (
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
            d='M15.288 3.763a.75.75 0 0 1 .95-.474l.153.051a6.75 6.75 0 0 1 4.27 4.27l.05.153a.75.75 0 1 1-1.423.474l-.05-.154a5.25 5.25 0 0 0-3.321-3.32l-.154-.051a.75.75 0 0 1-.475-.949Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M12 21c1.385 0 2.563-.835 3-2H9c.437 1.165 1.615 2 3 2Z' />
        <path
            fill='currentColor'
            d='M5.68 10.794C6.054 7.491 8.77 5 12 5c3.23 0 5.946 2.49 6.32 5.794l.345 3.044a3.82 3.82 0 0 0 .88 2.042c1.033 1.216.194 3.12-1.375 3.12H5.83c-1.57 0-2.408-1.904-1.375-3.12a3.816 3.816 0 0 0 .88-2.042l.345-3.044Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.712 3.763a.75.75 0 0 0-.95-.474l-.153.051a6.75 6.75 0 0 0-4.27 4.27l-.05.153a.75.75 0 1 0 1.423.474l.05-.154a5.25 5.25 0 0 1 3.321-3.32l.154-.051a.75.75 0 0 0 .475-.949Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellRinging);
export default ForwardRef;
