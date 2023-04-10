import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgScreenshot = (
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
        <rect width={10} height={10} x={7} y={7} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M9 3H5a2 2 0 0 0-2 2v4m12 12h4a2 2 0 0 0 2-2v-4'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgScreenshot);
export default ForwardRef;
