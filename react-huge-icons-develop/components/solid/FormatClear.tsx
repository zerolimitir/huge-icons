import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFormatClear = (
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
            d='m18.47 19.53-6.815-6.814-.913 6.39a.75.75 0 1 1-1.484-.212l1.072-7.504-5.86-5.86a.75.75 0 0 1 1.06-1.06l14 14a.75.75 0 0 1-1.06 1.06ZM12.018 4.25H18a.75.75 0 0 1 0 1.5h-5.35l-.48 3.36-1.325-1.326.29-2.034H8.811l-1.5-1.5h4.707Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatClear);
export default ForwardRef;
