import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapAccordionFlag = (
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
            d='M8.566 6.025C6.7 6.234 4.426 7.782 3.29 8.642a1.86 1.86 0 0 0-.723 1.495v9.67c0 .853 1.028 1.348 1.737.872 1.21-.813 2.852-1.736 4.263-1.894m0-12.76c3.319-.372 4.682 3.561 8 3.19m-8-3.19v12.76m8-9.57c1.412-.158 3.055-1.081 4.264-1.894.709-.476 1.736.02 1.736.873v9.669a1.86 1.86 0 0 1-.722 1.495c-1.138.86-3.41 2.408-5.278 2.617m0-12.76v12.76m-8-3.19c3.319-.371 4.682 3.562 8 3.19'
        />
        <path
            fill='currentColor'
            d='M13.102 13.107a.75.75 0 0 0 1.5 0h-1.5Zm.75-11.024v-.75a.75.75 0 0 0-.75.75h.75Zm6 0 .666.346a.75.75 0 0 0-.666-1.095v.75Zm0 3.624v.75a.75.75 0 0 0 .646-1.131l-.646.38Zm-1-1.696-.666-.346a.75.75 0 0 0 .02.727l.646-.381Zm-4.25 9.096v-7.4h-1.5v7.4h1.5Zm-.75-10.274h6v-1.5h-6v1.5Zm6 2.124h-6v1.5h6v-1.5Zm-5.25.75V2.084h-1.5v3.623h1.5Zm4.584-3.969-1 1.927 1.332.691 1-1.927-1.332-.69Zm-.98 2.654 1 1.696 1.292-.762-1-1.696-1.292.762Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordionFlag);
export default ForwardRef;
