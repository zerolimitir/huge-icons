import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapPaper = (
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
            d='M8 4.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 8.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894m0-12.76c3.318-.372 4.682 3.561 8 3.19m-8-3.19v12.76m8-9.57c1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v9.669a1.86 1.86 0 0 1-.722 1.495c-1.138.86-3.41 2.408-5.278 2.617m0-12.76v12.76m-8-3.19c3.318-.371 4.682 3.562 8 3.19'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapPaper);
export default ForwardRef;
