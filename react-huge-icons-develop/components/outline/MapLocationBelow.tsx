import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapLocationBelow = (
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
            d='M12.305 16.61c-1.276-.958-2.502-2.027-4.305-1.825-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.02-1.736-.872v-9.67c0-.585.255-1.142.722-1.495C3.86 3.782 6.132 2.234 8 2.025c3.318-.372 4.682 3.561 8 3.19 1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v9.669c0 .116-.01.23-.03.342'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M22 14.8c0 2.651-2.5 7.2-5 7.2s-5-4.549-5-7.2 2.239-4.8 5-4.8 5 2.149 5 4.8Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M18.5 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationBelow);
export default ForwardRef;
