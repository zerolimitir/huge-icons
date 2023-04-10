import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEyeDropper = (
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
            d='m13.275 5.436.663.647-5.352 5.352a4 4 0 0 0-1.172 2.829v1.171h1.172a4 4 0 0 0 2.828-1.171l5.387-5.386.675.659a.75.75 0 0 0 1.048-1.073l-.663-.647 1.574-1.574a2 2 0 1 0-2.828-2.829l-1.608 1.608-.676-.659a.75.75 0 0 0-1.048 1.073ZM5.5 22c.828 0 1.5-.395 1.5-1.5C7 19.396 5.5 18 5.5 18S4 19.396 4 20.5c0 1.105.672 1.5 1.5 1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeDropper);
export default ForwardRef;
