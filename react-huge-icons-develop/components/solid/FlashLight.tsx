import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFlashLight = (
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
            d='M6.857 2h10.286c.473 0 .857.384.857.857a5.144 5.144 0 0 1-3 4.677V19a3 3 0 1 1-6 0V7.534a5.144 5.144 0 0 1-3-4.677C6 2.384 6.384 2 6.857 2Zm5.893 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashLight);
export default ForwardRef;
