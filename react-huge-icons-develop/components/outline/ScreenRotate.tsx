import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgScreenRotate = (
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
        <rect
            width={8.5}
            height={14}
            x={4.045}
            y={10.056}
            stroke='currentColor'
            strokeWidth={1.5}
            rx={2}
            transform='rotate(-45 4.045 10.056)'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M14 3.223A9.013 9.013 0 0 1 20.777 10L22 8M10 20.777A9.013 9.013 0 0 1 3.223 14L2 16'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgScreenRotate);
export default ForwardRef;
