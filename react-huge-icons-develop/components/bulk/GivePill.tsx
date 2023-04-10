import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGivePill = (
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
        <path fill='currentColor' d='M16 5a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0V5Z' opacity={0.4} />
        <path fill='currentColor' d='M16 8h6v3a3 3 0 1 1-6 0V8Z' />
        <path
            fill='currentColor'
            d='M4 10H2v9l4.31 2.155A8 8 0 0 0 9.89 22H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.714-1.721a1.911 1.911 0 0 0-.757-2.906L4 10Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGivePill);
export default ForwardRef;
