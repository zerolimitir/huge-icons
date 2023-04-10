import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignpostSmall = (
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
            d='M10.5 7.95H5.66a.463.463 0 0 1-.365-.181l-1.169-1.5a.522.522 0 0 1 0-.636l1.169-1.5a.463.463 0 0 1 .365-.182h4.84v4Zm0 8H4.078a.516.516 0 0 1-.361-.146l-1.53-1.5a.493.493 0 0 1 0-.707l1.53-1.5a.516.516 0 0 1 .36-.146H10.5v4Zm3-8h6.43c.135 0 .265.053.36.147l1.533 1.5c.2.195.2.512 0 .707l-1.532 1.5a.516.516 0 0 1-.362.147H13.5v-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M10.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostSmall);
export default ForwardRef;
