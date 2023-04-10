import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRemove = (
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
            d='M14.828 6.343a2 2 0 1 1 2.829 2.828l-8.485 8.486a2 2 0 0 1-2.829-2.829l8.485-8.485Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M17.657 14.828a2 2 0 1 1-2.829 2.829L6.343 9.17a2 2 0 1 1 2.829-2.828l8.485 8.485Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemove);
export default ForwardRef;
