import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomeDoor = (
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
            d='M3 9.847a3 3 0 0 1 1.007-2.242l5.336-4.743a4 4 0 0 1 5.315 0l5.335 4.743A3 3 0 0 1 21 9.847V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9.847Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M8 18a4 4 0 0 1 8 0v4H8v-4Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeDoor);
export default ForwardRef;
