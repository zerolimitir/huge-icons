import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTicketPercent = (
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
            d='M2 17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1c0-.552-.46-.984-.982-1.164a3.001 3.001 0 0 1 0-5.672C21.54 8.984 22 8.552 22 8V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1c0 .552.46.984.982 1.164a3.001 3.001 0 0 1 0 5.672C2.46 15.016 2 15.448 2 16v1Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTicketPercent);
export default ForwardRef;
