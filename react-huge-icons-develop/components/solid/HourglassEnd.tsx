import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHourglassEnd = (
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
            d='M8 2C5.528 2 4.117 4.822 5.6 6.8l2.55 3.4a3 3 0 0 1 0 3.6L5.6 17.2C4.117 19.178 5.528 22 8 22h8c2.472 0 3.883-2.822 2.4-4.8l-2.55-3.4a3 3 0 0 1 0-3.6l2.55-3.4C19.883 4.822 18.472 2 16 2H8Zm4.78 12.976a1 1 0 0 0-1.56 0l-1.92 2.4A1 1 0 0 0 10.08 19h3.84a1 1 0 0 0 .78-1.625l-1.92-2.399Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHourglassEnd);
export default ForwardRef;
