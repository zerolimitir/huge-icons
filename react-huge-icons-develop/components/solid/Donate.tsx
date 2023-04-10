import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDonate = (
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
            d='m15.438 12.048-2.83-3.538A2.776 2.776 0 0 1 12 6.776v-.124A2.652 2.652 0 0 1 14.652 4h.297c.513 0 1.005.204 1.367.566a.967.967 0 0 0 1.368 0A1.934 1.934 0 0 1 19.05 4h.297A2.652 2.652 0 0 1 22 6.652v.124a2.78 2.78 0 0 1-.608 1.734l-2.83 3.538a2 2 0 0 1-3.124 0ZM2 8h1.582a2 2 0 0 1 .801.168l5.88 2.572a1.911 1.911 0 0 1 .756 2.906l2.714 1.72a6.001 6.001 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a8 8 0 0 1-3.578-.845L2 17V8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDonate);
export default ForwardRef;
