import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignpostRight = (
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
            d='M12.5 2h-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M5.557 6.638 10.5 5.314l3-.804 2.218-.595a1 1 0 0 1 .851.16l1.548 1.14a1 1 0 0 1 .323 1.206l-.77 1.76a1 1 0 0 1-.658.564l-3.512.941-3 .804-3.649.978a1 1 0 0 1-1.225-.707L4.85 7.863a1 1 0 0 1 .707-1.225ZM6 14h10.52a1 1 0 0 1 .78.375l1.2 1.5a1 1 0 0 1 0 1.25l-1.2 1.5a1 1 0 0 1-.78.375H6a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostRight);
export default ForwardRef;
