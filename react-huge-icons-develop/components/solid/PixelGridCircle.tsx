import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPixelGridCircle = (
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
            d='M8.4 4.023A8.718 8.718 0 0 1 12 3.25c1.284 0 2.503.276 3.6.773a3.333 3.333 0 0 0 4.376 4.376A8.718 8.718 0 0 1 20.751 12a8.718 8.718 0 0 1-.773 3.6 3.333 3.333 0 0 0-4.376 4.376 8.718 8.718 0 0 1-3.601.774 8.718 8.718 0 0 1-3.6-.773 3.333 3.333 0 0 0-4.376-4.376A8.718 8.718 0 0 1 3.249 12c0-1.284.276-2.503.773-3.6a3.333 3.333 0 0 0 4.376-4.376Zm-.909-1.23A10.209 10.209 0 0 1 12 1.75c1.618 0 3.148.375 4.509 1.042a3.333 3.333 0 0 1 4.698 4.699A10.209 10.209 0 0 1 22.25 12c0 1.618-.375 3.148-1.043 4.509a3.333 3.333 0 0 1-4.698 4.698A10.209 10.209 0 0 1 12 22.25c-1.618 0-3.148-.375-4.509-1.043a3.333 3.333 0 0 1-4.699-4.698A10.209 10.209 0 0 1 1.75 12c0-1.618.375-3.148 1.042-4.509a3.333 3.333 0 0 1 4.699-4.699Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPixelGridCircle);
export default ForwardRef;
