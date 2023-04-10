import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBank = (
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
            stroke='currentColor'
            strokeWidth={1.5}
            d='M3.033 10h17.934c1.02 0 1.42-1.351.572-1.93l-8.395-5.716a2.026 2.026 0 0 0-2.288 0L2.461 8.07c-.849.579-.448 1.93.572 1.93ZM4 10h5v8H4zm11 0h5v8h-5zm4.382 8a1 1 0 0 1 .894.553l1 2A1 1 0 0 1 20.382 22H3.618a1 1 0 0 1-.894-1.447l1-2A1 1 0 0 1 4.618 18h14.764Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBank);
export default ForwardRef;
