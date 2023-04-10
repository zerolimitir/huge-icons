import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEarnings = (
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
            d='M13 3.75a.75.75 0 0 1 .75-.75h4a2.75 2.75 0 0 1 2.75 2.75v4a.75.75 0 0 1-1.5 0v-4c0-.06-.004-.12-.012-.177L4.28 20.28a.75.75 0 0 1-1.06-1.06L17.927 4.512a1.261 1.261 0 0 0-.177-.012h-4a.75.75 0 0 1-.75-.75Zm-3.25 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEarnings);
export default ForwardRef;
