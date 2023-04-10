import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUsb = (
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
            d='m10.2 3.4 1-1.333a1 1 0 0 1 1.6 0l1 1.333A1 1 0 0 1 13 5h-.25v5.96l4.329-1.443a.25.25 0 0 0 .171-.238V7.3a1.5 1.5 0 1 1 1.5 0v1.98a1.75 1.75 0 0 1-1.197 1.66l-4.803 1.602V18a.753.753 0 0 1-.013.14 2 2 0 1 1-1.474 0 .753.753 0 0 1-.013-.14v-3.46l-4.803-1.6a1.75 1.75 0 0 1-1.197-1.66V9.469A1 1 0 0 1 4.5 8.5v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.75.969v1.81a.25.25 0 0 0 .171.238l4.329 1.443V5H11a1 1 0 0 1-.8-1.6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUsb);
export default ForwardRef;
