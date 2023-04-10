import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShuffle = (
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
            d='M16.47 5.47a.75.75 0 0 1 1.06 0l1.293 1.293a1.75 1.75 0 0 1 0 2.474L17.53 10.53a.75.75 0 1 1-1.06-1.06l.72-.72H13a.75.75 0 0 1 0-1.5h4.19l-.72-.72a.75.75 0 0 1 0-1.06ZM4.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.47 18.53a.75.75 0 0 0 1.06 0l1.293-1.293a1.75 1.75 0 0 0 0-2.474L17.53 13.47a.75.75 0 1 0-1.06 1.06l.72.72h-.718a3.25 3.25 0 0 1-2.907-1.797l-1.789-3.577A4.75 4.75 0 0 0 7.528 7.25H5a.75.75 0 0 0 0 1.5h2.528a3.25 3.25 0 0 1 2.907 1.797l1.789 3.577a4.75 4.75 0 0 0 4.248 2.626h.717l-.72.72a.75.75 0 0 0 0 1.06Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShuffle);
export default ForwardRef;
