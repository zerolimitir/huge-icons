import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPills = (
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
            d='M17.5 15c0-2.077-.745-3.98-1.983-5.457l4.935-4.934a7.001 7.001 0 0 1-2.97 10.938A8.61 8.61 0 0 0 17.5 15ZM9 6.5c-.184 0-.366.006-.547.017a7.001 7.001 0 0 1 10.938-2.97l-4.934 4.936A8.466 8.466 0 0 0 9 6.5ZM9 22a7.001 7.001 0 0 1-6.96-6.25h13.92A7.001 7.001 0 0 1 9 22Zm-6.96-7.75h13.92a7.001 7.001 0 0 0-13.92 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPills);
export default ForwardRef;
