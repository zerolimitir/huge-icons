import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOnlineLearning = (
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
            d='M8.43 3.87A6.218 6.218 0 0 1 12 2.75c1.329 0 2.559.414 3.571 1.12a.75.75 0 1 0 .858-1.23A7.718 7.718 0 0 0 12 1.25a7.718 7.718 0 0 0-4.429 1.39.75.75 0 0 0 .858 1.23ZM12 5.75c-.593 0-1.147.158-1.625.434a.75.75 0 1 1-.75-1.298A4.732 4.732 0 0 1 12 4.25c.864 0 1.676.231 2.375.636a.75.75 0 1 1-.75 1.298A3.231 3.231 0 0 0 12 5.75Zm-.75 4.002C9.568 8.688 7.3 8.196 5.595 8.01 4.717 7.912 4 8.625 4 9.505v8.762c0 .88.717 1.593 1.595 1.69 1.705.187 3.973.678 5.655 1.743V9.752Zm1.5 11.948c1.682-1.065 3.95-1.556 5.654-1.744.879-.096 1.596-.81 1.596-1.69v-8.76c0-.88-.717-1.594-1.596-1.497-1.704.187-3.972.679-5.654 1.743V21.7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOnlineLearning);
export default ForwardRef;
