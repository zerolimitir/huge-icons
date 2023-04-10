import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCardArrowLeft = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 25 24'
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
            d='M22.305 6.25A4.001 4.001 0 0 0 18.375 3h-12a4.001 4.001 0 0 0-3.93 3.25h19.86Zm.07 1.5v2.5h-20v-2.5h20Zm-20 4h20V14a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1h-7a4 4 0 0 1-4-4v-5.25Zm5 5.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm12.116.53-.72.72h3.604a.75.75 0 0 1 0 1.5h-3.604l.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474l1.292-1.293a.75.75 0 1 1 1.061 1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardArrowLeft);
export default ForwardRef;
