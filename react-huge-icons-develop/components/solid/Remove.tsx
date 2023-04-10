import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRemove = (
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
            d='M6.343 14.828a2 2 0 1 0 2.829 2.829L12 14.828l2.828 2.829a2 2 0 1 0 2.829-2.829L14.828 12l2.829-2.828a2 2 0 1 0-2.829-2.829L12 9.172 9.172 6.343a2 2 0 1 0-2.829 2.829L9.172 12l-2.829 2.828Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemove);
export default ForwardRef;
