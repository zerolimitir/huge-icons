import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSticker = (
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
            d='M18 3H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h4.343a4 4 0 0 0 2.829-1.172l7.656-7.656A4 4 0 0 0 22 9.343V7a4 4 0 0 0-4-4Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='m12 21 10-10h-4a6 6 0 0 0-6 6v4Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgSticker);
export default ForwardRef;
