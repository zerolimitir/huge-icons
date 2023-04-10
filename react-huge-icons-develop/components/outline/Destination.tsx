import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDestination = (
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
        <circle cx={14.039} cy={5.268} r={1.142} stroke='currentColor' strokeWidth={1.5} />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M6.616 16.886a1.317 1.317 0 1 1-2.633 0 1.317 1.317 0 0 1 2.633 0Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M9.25 16.886c0 2.181-2.634 5.267-3.95 5.267-1.317 0-3.95-3.086-3.95-5.267a3.95 3.95 0 1 1 7.9 0Zm8.215-11.618c0 1.892-2.284 4.568-3.426 4.568-1.142 0-3.425-2.676-3.425-4.568a3.426 3.426 0 0 1 6.85 0Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M13.945 12.195v2.765a2.292 2.292 0 0 0 2.293 2.292h2.257a2.327 2.327 0 0 1 0 4.654h-8.53'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDestination);
export default ForwardRef;
