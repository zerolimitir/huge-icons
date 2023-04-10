import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMaximizeRectangle = (
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
            d='M20.25 9a.75.75 0 0 0 1.5 0h-1.5ZM21 3h.75a.75.75 0 0 0-.75-.75V3Zm-6-.75a.75.75 0 0 0 0 1.5v-1.5ZM9.47 13.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM21.75 9V3h-1.5v6h1.5ZM21 2.25h-6v1.5h6v-1.5Zm-.53.22-11 11 1.06 1.06 11-11-1.06-1.06Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMaximizeRectangle);
export default ForwardRef;
