import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookDownload = (
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
            d='M7 2h10a3 3 0 0 1 3 3v9.5H7a4.484 4.484 0 0 0-3 1.146V5a3 3 0 0 1 3-3Zm5.75 8.19.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L9.47 10.53a.75.75 0 1 1 1.06-1.06l.72.72V6a.75.75 0 0 1 1.5 0v4.19ZM7 16a3 3 0 1 0 0 6h10a3 3 0 0 0 3-3v-3H7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookDownload);
export default ForwardRef;
