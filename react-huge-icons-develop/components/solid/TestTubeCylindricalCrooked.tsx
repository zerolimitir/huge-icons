import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTestTubeCylindricalCrooked = (
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
            d='M12.474 3.243a.99.99 0 0 1 1.4 0l6.883 6.882a.99.99 0 1 1-1.4 1.4l-6.883-6.882a.99.99 0 0 1 0-1.4Zm4.556.414a2.343 2.343 0 1 1 3.313 3.313L20 7.313 16.687 4l.343-.343ZM12.53 6.5l4.97 4.97-1.754 1.754-9.111-.828L12.53 6.5Zm-7.276 7.276 9.111.829-5.618 5.617a3.514 3.514 0 1 1-4.97-4.97l1.477-1.476Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTubeCylindricalCrooked);
export default ForwardRef;
