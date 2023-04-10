import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMiniStoreCrooked = (
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
            d='M7.231 2h9.538c1.817 0 3.451 1.245 4.126 3.143l.758 2.132c.23.645.388 1.336.22 2-.394 1.573-1.68 2.725-3.205 2.725-1.841 0-3.334-1.679-3.334-3.75 0 2.071-1.492 3.75-3.333 3.75-1.841 0-3.333-1.679-3.333-3.75 0 2.071-1.493 3.75-3.334 3.75-1.525 0-2.81-1.152-3.207-2.725-.167-.664-.009-1.355.22-2l.759-2.132C3.78 3.245 5.414 2 7.23 2ZM4 13.3V18a4 4 0 0 0 4 4h1v-2a3 3 0 1 1 6 0v2h1a4 4 0 0 0 4-4v-4.7c-.419.13-.865.2-1.333.2-1.337 0-2.49-.563-3.334-1.444-.843.881-1.996 1.444-3.333 1.444-1.337 0-2.49-.563-3.333-1.444-.844.881-1.997 1.444-3.334 1.444A4.51 4.51 0 0 1 4 13.3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMiniStoreCrooked);
export default ForwardRef;
