import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWheelChair = (
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
        <circle cx={7} cy={16} r={5} stroke='currentColor' strokeWidth={1.5} />
        <circle cx={20.5} cy={19.5} r={1.5} stroke='currentColor' strokeWidth={1.5} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 16h6.5a2 2 0 0 1 2 2v0M4 3h1a2 2 0 0 1 2 2v6m0-5h10a2 2 0 0 1 2 2v8'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWheelChair);
export default ForwardRef;
