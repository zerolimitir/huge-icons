import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCalculatorModern = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1.25H2V6Zm0 2.75h5.75v5.5H2v-5.5Zm0 7V18a4 4 0 0 0 4 4h1.75v-6.25H2Zm7.25 0V22h5.5v-6.25h-5.5Zm5.5-1.5h-5.5v-5.5h5.5v5.5Zm1.5.75v7H18a4 4 0 0 0 4-4V8.75h-5.75V15Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalculatorModern);
export default ForwardRef;
