import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSadCircle = (
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
            d='M14.505 16.564a.75.75 0 0 0 .993-1.125L15 16l.498-.56v-.001l-.002-.001-.002-.003-.006-.005-.018-.015a3.772 3.772 0 0 0-.247-.187 5.149 5.149 0 0 0-.693-.403A5.79 5.79 0 0 0 12 14.25a5.79 5.79 0 0 0-2.53.575 5.154 5.154 0 0 0-.884.545 2.499 2.499 0 0 0-.056.045l-.018.015-.006.005-.002.003h-.001S8.502 15.44 9 16l-.498-.56a.75.75 0 0 0 .993 1.124l.023-.02.115-.085c.108-.074.273-.178.491-.284A4.29 4.29 0 0 1 12 15.75c.802 0 1.44.213 1.876.425a3.654 3.654 0 0 1 .606.37l.022.017.001.002Zm-5.01 0 .002-.002a.064.064 0 0 1-.002.002Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSadCircle);
export default ForwardRef;
