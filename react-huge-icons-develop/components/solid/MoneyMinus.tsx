import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyMinus = (
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
            d='M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm7 5.75a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyMinus);
export default ForwardRef;
