import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmileEllipse = (
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
        <circle cx={12} cy={12} r={10} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            d='M17 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.495 14.436a.75.75 0 0 0-.993 1.125L9 15l-.498.56v.001l.002.001.002.003.006.005.018.015.056.045c.046.037.11.085.19.142.163.113.396.259.694.403a5.79 5.79 0 0 0 2.53.575 5.79 5.79 0 0 0 2.53-.575 5.149 5.149 0 0 0 .885-.545l.055-.045.018-.015.006-.005.002-.003h.001S15.498 15.56 15 15l.498.56a.75.75 0 0 0-.992-1.124h-.001l-.024.02a3.654 3.654 0 0 1-.606.37A4.29 4.29 0 0 1 12 15.25a4.29 4.29 0 0 1-1.876-.425 3.655 3.655 0 0 1-.606-.37l-.022-.017-.001-.002Zm5.01 0-.002.002a.065.065 0 0 1 .002-.002Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmileEllipse);
export default ForwardRef;
