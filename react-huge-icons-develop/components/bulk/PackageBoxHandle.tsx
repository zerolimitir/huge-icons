import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageBoxHandle = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 25'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M22 18.5V7.461a2 2 0 0 0-.75-1.561l-3.154-2.523a4 4 0 0 0-2.5-.877H8.404a4 4 0 0 0-2.499.877L2.751 5.9A2 2 0 0 0 2 7.46V18.5a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M9 6.5h6v6l-3-2-3 2v-6Zm6.597-4H8.403a4 4 0 0 0-2.499.877L2.751 5.9a2 2 0 0 0-.505.6h19.508a2 2 0 0 0-.505-.6l-3.153-2.523a4 4 0 0 0-2.5-.877Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxHandle);
export default ForwardRef;
