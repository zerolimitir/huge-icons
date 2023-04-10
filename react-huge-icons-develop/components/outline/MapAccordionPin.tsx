import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapAccordionPin = (
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
            d='M8 6.52c-1.867.21-4.14 1.757-5.278 2.618A1.86 1.86 0 0 0 2 10.633v9.67c0 .852 1.028 1.347 1.736.871C4.946 20.362 6.59 19.44 8 19.281M8 6.52v12.76M8 6.52c2.964-.332 4.368 2.77 7 3.172.314.048.646.057 1 .017m0 0a5.42 5.42 0 0 0 1.03-.228c1.133-.36 2.31-1.044 3.234-1.665.708-.476 1.736.019 1.736.872v9.67a1.86 1.86 0 0 1-.722 1.494c-1.138.86-3.41 2.409-5.278 2.618m0-12.76v12.76m-8-3.19c3.318-.372 4.682 3.561 8 3.19'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M18.383 6.496a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordionPin);
export default ForwardRef;
