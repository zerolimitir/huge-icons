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
        <path fill='currentColor' d='M20 18V7H4v11a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4Z' opacity={0.4} />
        <path
            fill='currentColor'
            d='M16.769 2H7.23C5.414 2 3.78 3.245 3.105 5.143l-.758 2.132c-.23.645-.388 1.336-.221 2C2.522 10.848 3.808 12 5.333 12c1.841 0 3.334-1.679 3.334-3.75C8.667 10.321 10.159 12 12 12c1.841 0 3.333-1.679 3.333-3.75 0 2.071 1.493 3.75 3.334 3.75 1.525 0 2.81-1.152 3.207-2.725.167-.664.009-1.355-.22-2l-.759-2.132C20.22 3.245 18.586 2 16.77 2ZM9 19a3 3 0 1 1 6 0v3H9v-3Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMiniStoreCrooked);
export default ForwardRef;
