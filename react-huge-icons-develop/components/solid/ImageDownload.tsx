import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImageDownload = (
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
            d='M2.75 6A3.25 3.25 0 0 1 6 2.75h9a.75.75 0 0 0 0-1.5H6A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h12A4.75 4.75 0 0 0 22.75 18v-8a.75.75 0 0 0-1.5 0v3.51a2.002 2.002 0 0 0-.14-.104l-2.381-1.587a4 4 0 0 0-5.048.5L10.32 15.68a4 4 0 0 1-5.047.5L2.75 14.5V6ZM19 1.25a.75.75 0 0 1 .75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L16.47 6.53a.75.75 0 0 1 1.06-1.06l.72.72V2a.75.75 0 0 1 .75-.75ZM8.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageDownload);
export default ForwardRef;
