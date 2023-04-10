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
            d='M16 15a7 7 0 0 0-7.938-6.938 7 7 0 1 1 7.875 7.875A7.07 7.07 0 0 0 16 15Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M19.95 13.95a7 7 0 0 0 0-9.9l-6 6a6.978 6.978 0 0 1 1.988 5.887 6.97 6.97 0 0 0 4.012-1.987Z'
        />
        <path fill='currentColor' d='M16 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z' opacity={0.4} />
        <path fill='currentColor' d='M9 22a7 7 0 0 0 7-7H2a7 7 0 0 0 7 7Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgPills);
export default ForwardRef;
