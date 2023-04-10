import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDirectionDownDouble = (
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
            d='M7.469 6.414a.75.75 0 1 0-.937 1.172l5 4a.75.75 0 0 0 .937 0l5-4a.75.75 0 1 0-.938-1.172L12 10.04 7.469 6.414Zm0 6a.75.75 0 1 0-.937 1.172l5 4a.75.75 0 0 0 .937 0l5-4a.75.75 0 1 0-.938-1.172L12 16.04l-4.531-3.626Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionDownDouble);
export default ForwardRef;
