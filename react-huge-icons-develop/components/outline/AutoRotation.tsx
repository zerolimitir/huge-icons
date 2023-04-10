import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAutoRotation = (
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
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m12 3.515 7.071 7.07a2 2 0 0 1 0 2.83l-3.536 3.535M12 20.485l-7.071-7.07a2 2 0 0 1 0-2.83L8.464 7.05'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M14.828 14.829v1.828a1 1 0 0 0 1 1h1.829M9.172 9.171V7.343a1 1 0 0 0-1-1H6.343'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAutoRotation);
export default ForwardRef;
