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
            d='M17.53 5.47a.75.75 0 1 0-1.06 1.06l.72.72H13a.75.75 0 0 0 0 1.5h4.19l-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L17.53 5.47ZM5 15.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H5Zm12.53 3.28a.75.75 0 1 1-1.06-1.06l.72-.72h-.718a4.75 4.75 0 0 1-4.248-2.626l-1.79-3.577A3.25 3.25 0 0 0 7.529 8.75H5a.75.75 0 0 1 0-1.5h2.528a4.75 4.75 0 0 1 4.248 2.626l1.79 3.577a3.25 3.25 0 0 0 2.906 1.797h.717l-.72-.72a.75.75 0 1 1 1.061-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474L17.53 18.53Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShuffle);
export default ForwardRef;
