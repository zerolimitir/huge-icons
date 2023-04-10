import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBellCrooked = (
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
            d='M9.597 19.26c.98.98 2.403 1.223 3.535.707L8.89 15.725c-.516 1.132-.273 2.556.707 3.535Z'
        />
        <path
            fill='currentColor'
            d='M10.223 5.453c2.6-2.071 6.283-1.911 8.566.372 2.283 2.283 2.443 5.966.372 8.566l-1.909 2.397a3.817 3.817 0 0 0-.821 2.065c-.13 1.591-2.069 2.344-3.179 1.234l-8.725-8.725c-1.11-1.11-.357-3.049 1.234-3.178a3.817 3.817 0 0 0 2.065-.822l2.397-1.91Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellCrooked);
export default ForwardRef;
