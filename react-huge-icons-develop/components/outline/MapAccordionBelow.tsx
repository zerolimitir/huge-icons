import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapAccordionBelow = (
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
            stroke='currentColor'
            strokeWidth={1.5}
            d='M8 2.27c-1.867.21-4.14 1.757-5.278 2.618A1.86 1.86 0 0 0 2 6.383v9.67c0 .852 1.028 1.347 1.736.871C4.946 16.112 6.59 15.19 8 15.031M8 2.27c3.318-.372 4.682 3.56 8 3.19M8 2.27v12.76m8-9.57c1.411-.159 3.054-1.081 4.264-1.894.708-.476 1.736.019 1.736.872v9.67a1.86 1.86 0 0 1-.722 1.494 21.18 21.18 0 0 1-1.694 1.161M16 5.46v6.38m-8 3.19c1.214-.135 2.166.305 3.048.9'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M19.555 15.805c0 2.283-2.153 6.2-4.305 6.2-2.152 0-4.305-3.917-4.305-6.2 0-2.282 1.928-4.132 4.305-4.132s4.305 1.85 4.305 4.132Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M16.541 15.547a1.291 1.291 0 1 1-2.582 0 1.291 1.291 0 0 1 2.582 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordionBelow);
export default ForwardRef;
