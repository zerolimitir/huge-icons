import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDrive = (
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
        <path fill='currentColor' d='m2 16 3 5 2.778-5L12 8.4 9 3 2 16Z' opacity={0.4} />
        <path fill='currentColor' d='m19 21 3-5H7.778L5 21h14Z' />
        <path fill='currentColor' d='M22 16 15 3H9l3 5.4 4.222 7.6H22Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgDrive);
export default ForwardRef;
