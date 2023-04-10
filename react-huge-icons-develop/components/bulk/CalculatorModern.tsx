import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCalculatorModern = (
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
        <path fill='currentColor' d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2.5H2V6Z' opacity={0.4} />
        <path fill='currentColor' d='M2 10h6v6H2z' />
        <path fill='currentColor' d='M8 10h6v6H8z' opacity={0.4} />
        <path fill='currentColor' d='M15.5 10H22v8a4 4 0 0 1-4 4h-2.5V10ZM8 16h6v6H8z' />
        <path fill='currentColor' d='M2 16h6v6H6a4 4 0 0 1-4-4v-2Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgCalculatorModern);
export default ForwardRef;
